'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var node = require('../sys/node');
var utils = require('../utils');
var path = require('path');
var path__default = _interopDefault(path);
var querystring = require('querystring');
var Url = require('url');
var zlib = require('zlib');
var buffer = require('buffer');
var net = require('net');
var http = require('http');
var https = require('https');

function sendMsg(process, msg) {
    process.send(msg);
}
function sendError(process, e) {
    const msg = {
        error: {
            message: e
        }
    };
    if (typeof e === 'string') {
        msg.error.message = e + '';
    }
    else if (e) {
        Object.keys(e).forEach(key => {
            try {
                msg.error[key] = e[key] + '';
            }
            catch (idk) {
                console.log(idk);
            }
        });
    }
    sendMsg(process, msg);
}
function responseHeaders(headers) {
    return Object.assign({}, DEFAULT_HEADERS, headers);
}
const DEFAULT_HEADERS = {
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Expires': '0',
    'X-Powered-By': 'Stencil Dev Server',
    'Access-Control-Allow-Origin': '*'
};
function getBrowserUrl(protocol, address, port, basePath, pathname) {
    address = (address === `0.0.0.0`) ? `localhost` : address;
    const portSuffix = (!port || port === 80 || port === 443) ? '' : (':' + port);
    let path = basePath;
    if (pathname.startsWith('/')) {
        pathname = pathname.substring(1);
    }
    path += pathname;
    protocol = protocol.replace(/\:/g, '');
    return `${protocol}://${address}${portSuffix}${path}`;
}
function getDevServerClientUrl(devServerConfig, host) {
    let address = devServerConfig.address;
    let port = devServerConfig.port;
    if (host) {
        address = host;
        port = null;
    }
    return getBrowserUrl(devServerConfig.protocol, address, port, devServerConfig.basePath, DEV_SERVER_URL);
}
function getContentType(devServerConfig, filePath) {
    const last = filePath.replace(/^.*[/\\]/, '').toLowerCase();
    const ext = last.replace(/^.*\./, '').toLowerCase();
    const hasPath = last.length < filePath.length;
    const hasDot = ext.length < last.length - 1;
    return ((hasDot || !hasPath) && devServerConfig.contentTypes[ext]) || 'application/octet-stream';
}
function isHtmlFile(filePath) {
    filePath = filePath.toLowerCase().trim();
    return (filePath.endsWith('.html') || filePath.endsWith('.htm'));
}
function isCssFile(filePath) {
    filePath = filePath.toLowerCase().trim();
    return filePath.endsWith('.css');
}
const TXT_EXT = ['css', 'html', 'htm', 'js', 'json', 'svg', 'xml'];
function isSimpleText(filePath) {
    const ext = filePath.toLowerCase().trim().split('.').pop();
    return TXT_EXT.includes(ext);
}
function isDevClient(pathname) {
    return pathname.startsWith(DEV_SERVER_URL);
}
function isOpenInEditor(pathname) {
    return pathname === OPEN_IN_EDITOR_URL;
}
function isInitialDevServerLoad(pathname) {
    return pathname === DEV_SERVER_INIT_URL;
}
function isDevServerClient(pathname) {
    return pathname === DEV_SERVER_URL;
}
const DEV_SERVER_URL = '/~dev-server';
const DEV_SERVER_INIT_URL = `${DEV_SERVER_URL}-init`;
const OPEN_IN_EDITOR_URL = `${DEV_SERVER_URL}-open-in-editor`;
function shouldCompress(devServerConfig, req) {
    if (!devServerConfig.gzip) {
        return false;
    }
    if (req.method !== 'GET') {
        return false;
    }
    const acceptEncoding = req.headers && req.headers['accept-encoding'];
    if (typeof acceptEncoding !== 'string') {
        return false;
    }
    if (!acceptEncoding.includes('gzip')) {
        return false;
    }
    return true;
}

function serve500(devServerConfig, req, res, error) {
    try {
        res.writeHead(500, responseHeaders({
            'Content-Type': 'text/plain'
        }));
        let errorMsg = '';
        if (typeof error === 'string') {
            errorMsg = error;
        }
        else if (error) {
            if (error.message) {
                errorMsg += error.message + '\n';
            }
            if (error.stack) {
                errorMsg += error.stack + '\n';
            }
        }
        res.write(errorMsg);
        res.end();
        if (devServerConfig.logRequests) {
            sendMsg(process, {
                requestLog: {
                    method: req.method,
                    url: req.url,
                    status: 200
                }
            });
        }
    }
    catch (e) {
        sendError(process, 'serve500: ' + e);
    }
}

async function serve404(devServerConfig, fs, req, res) {
    try {
        if (req.pathname === '/favicon.ico') {
            try {
                const defaultFavicon = path.join(devServerConfig.devServerDir, 'static', 'favicon.ico');
                res.writeHead(200, responseHeaders({
                    'Content-Type': 'image/x-icon'
                }));
                fs.createReadStream(defaultFavicon).pipe(res);
                return;
            }
            catch (e) { }
        }
        const content = [
            '404 File Not Found',
            'Url: ' + req.pathname,
            'File: ' + req.filePath
        ].join('\n');
        serve404Content(devServerConfig, req, res, content);
        if (devServerConfig.logRequests) {
            sendMsg(process, {
                requestLog: {
                    method: req.method,
                    url: req.url,
                    status: 404
                }
            });
        }
    }
    catch (e) {
        serve500(devServerConfig, req, res, e);
    }
}
function serve404Content(devServerConfig, req, res, content) {
    try {
        const headers = responseHeaders({
            'Content-Type': 'text/plain'
        });
        res.writeHead(404, headers);
        res.write(content);
        res.end();
    }
    catch (e) {
        serve500(devServerConfig, req, res, e);
    }
}

async function serveFile(devServerConfig, fs, req, res) {
    try {
        if (isSimpleText(req.filePath)) {
            // easy text file, use the internal cache
            let content = await fs.readFile(req.filePath);
            if (devServerConfig.websocket && isHtmlFile(req.filePath) && !isDevServerClient(req.pathname)) {
                // auto inject our dev server script
                content += getDevServerClientScript(devServerConfig, req);
            }
            else if (isCssFile(req.filePath)) {
                content = updateStyleUrls(req.url, content);
            }
            if (shouldCompress(devServerConfig, req)) {
                // let's gzip this well known web dev text file
                res.writeHead(200, responseHeaders({
                    'Content-Type': getContentType(devServerConfig, req.filePath),
                    'Content-Encoding': 'gzip',
                    'Vary': 'Accept-Encoding'
                }));
                zlib.gzip(content, { level: 9 }, (_, data) => {
                    res.end(data);
                });
            }
            else {
                // let's not gzip this file
                res.writeHead(200, responseHeaders({
                    'Content-Type': getContentType(devServerConfig, req.filePath),
                    'Content-Length': buffer.Buffer.byteLength(content, 'utf8')
                }));
                res.write(content);
                res.end();
            }
        }
        else {
            // non-well-known text file or other file, probably best we use a stream
            // but don't bother trying to gzip this file for the dev server
            res.writeHead(200, responseHeaders({
                'Content-Type': getContentType(devServerConfig, req.filePath),
                'Content-Length': req.stats.size
            }));
            fs.createReadStream(req.filePath).pipe(res);
        }
        if (devServerConfig.logRequests) {
            sendMsg(process, {
                requestLog: {
                    method: req.method,
                    url: req.url,
                    status: 200
                }
            });
        }
    }
    catch (e) {
        serve500(devServerConfig, req, res, e);
    }
}
function updateStyleUrls(cssUrl, oldCss) {
    const parsedUrl = Url.parse(cssUrl);
    const qs = querystring.parse(parsedUrl.query);
    const versionId = qs['s-hmr'];
    const hmrUrls = qs['s-hmr-urls'];
    if (versionId && hmrUrls) {
        hmrUrls.split(',').forEach(hmrUrl => {
            urlVersionIds.set(hmrUrl, versionId);
        });
    }
    const reg = /url\((['"]?)(.*)\1\)/ig;
    let result;
    let newCss = oldCss;
    while ((result = reg.exec(oldCss)) !== null) {
        const oldUrl = result[2];
        const parsedUrl = Url.parse(oldUrl);
        const fileName = path__default.basename(parsedUrl.pathname);
        const versionId = urlVersionIds.get(fileName);
        if (!versionId) {
            continue;
        }
        const qs = querystring.parse(parsedUrl.query);
        qs['s-hmr'] = versionId;
        parsedUrl.search = querystring.stringify(qs);
        const newUrl = Url.format(parsedUrl);
        newCss = newCss.replace(oldUrl, newUrl);
    }
    return newCss;
}
const urlVersionIds = new Map();
function getDevServerClientScript(devServerConfig, req) {
    const devServerClientUrl = getDevServerClientUrl(devServerConfig, req.host);
    return `\n<iframe title="Stencil Dev Server Connector &#9889;" src="${devServerClientUrl}" style="display:block;width:0;height:0;border:0"></iframe>`;
}

const openInEditorPath = path.join(__dirname, '..', 'sys', 'node', 'open-in-editor.js');
async function serveOpenInEditor(devServerConfig, fs, req, res) {
    let status = 200;
    const data = {};
    try {
        if (devServerConfig.editors.length > 0) {
            await parseData(devServerConfig, fs, req, data);
            await openInEditor(data);
        }
        else {
            data.error = `no editors available`;
        }
    }
    catch (e) {
        data.error = e + '';
        status = 500;
    }
    res.writeHead(status, responseHeaders({
        'Content-Type': 'application/json'
    }));
    res.write(JSON.stringify(data, null, 2));
    res.end();
}
async function parseData(devServerConfig, fs, req, data) {
    const query = Url.parse(req.url).query;
    const qs = querystring.parse(query);
    if (typeof qs.file !== 'string') {
        data.error = `missing file`;
        return;
    }
    data.file = qs.file;
    if (qs.line != null && !isNaN(qs.line)) {
        data.line = parseInt(qs.line, 10);
    }
    if (typeof data.line !== 'number' || data.line < 1) {
        data.line = 1;
    }
    if (qs.column != null && !isNaN(qs.column)) {
        data.column = parseInt(qs.column, 10);
    }
    if (typeof data.column !== 'number' || data.column < 1) {
        data.column = 1;
    }
    if (typeof qs.editor === 'string') {
        qs.editor = qs.editor.trim().toLowerCase();
        if (devServerConfig.editors.some(e => e.id === qs.editor)) {
            data.editor = qs.editor;
        }
        else {
            data.error = `invalid editor: ${qs.editor}`;
            return;
        }
    }
    else {
        data.editor = devServerConfig.editors[0].id;
    }
    try {
        const stat = await fs.stat(data.file);
        data.exists = stat.isFile();
    }
    catch (e) {
        data.exists = false;
    }
}
async function openInEditor(data) {
    if (!data.exists || data.error) {
        return;
    }
    try {
        const opts = {
            editor: data.editor
        };
        const oie = require(openInEditorPath);
        const editor = oie.openInEditor.configure(opts, (err) => data.error = err + '');
        if (data.error) {
            return;
        }
        data.open = `${data.file}:${data.line}:${data.column}`;
        await editor.open(data.open);
    }
    catch (e) {
        data.error = e + '';
    }
}
async function getEditors() {
    const editors = [];
    try {
        const oie = require(openInEditorPath);
        await Promise.all(Object.keys(oie.editors).map(async (id) => {
            const isSupported = await isEditorSupported(oie, id);
            editors.push({
                id: id,
                priority: EDITOR_PRIORITY[id],
                supported: isSupported
            });
        }));
    }
    catch (e) { }
    return editors
        .filter(e => e.supported)
        .sort((a, b) => {
        if (a.priority < b.priority)
            return -1;
        if (a.priority > b.priority)
            return 1;
        return 0;
    }).map(e => {
        return {
            id: e.id,
            name: EDITORS[e.id]
        };
    });
}
async function isEditorSupported(oie, editor) {
    let isSupported = false;
    try {
        await oie.editors[editor].detect();
        isSupported = true;
    }
    catch (e) { }
    return isSupported;
}
const EDITORS = {
    atom: 'Atom',
    code: 'Code',
    emacs: 'Emacs',
    idea14ce: 'IDEA 14 Community Edition',
    phpstorm: 'PhpStorm',
    sublime: 'Sublime',
    webstorm: 'WebStorm',
    vim: 'Vim',
    visualstudio: 'Visual Studio',
};
const EDITOR_PRIORITY = {
    code: 1,
    atom: 2,
    sublime: 3,
    visualstudio: 4,
    idea14ce: 5,
    webstorm: 6,
    phpstorm: 7,
    vim: 8,
    emacs: 9,
};

async function serveDevClient(devServerConfig, fs, req, res) {
    try {
        if (isOpenInEditor(req.pathname)) {
            return serveOpenInEditor(devServerConfig, fs, req, res);
        }
        if (isDevServerClient(req.pathname)) {
            return serveDevClientScript(devServerConfig, fs, req, res);
        }
        if (isInitialDevServerLoad(req.pathname)) {
            req.filePath = path__default.join(devServerConfig.devServerDir, 'templates', 'initial-load.html');
        }
        else {
            const staticFile = req.pathname.replace(DEV_SERVER_URL + '/', '');
            req.filePath = path__default.join(devServerConfig.devServerDir, 'static', staticFile);
        }
        try {
            req.stats = await fs.stat(req.filePath);
            return serveFile(devServerConfig, fs, req, res);
        }
        catch (e) {
            return serve404(devServerConfig, fs, req, res);
        }
    }
    catch (e) {
        return serve500(devServerConfig, req, res, e);
    }
}
async function serveDevClientScript(devServerConfig, fs, req, res) {
    const filePath = path__default.join(devServerConfig.devServerDir, 'static', 'dev-server-client.html');
    let content = await fs.readFile(filePath);
    const devClientConfig = {
        basePath: devServerConfig.basePath,
        editors: devServerConfig.editors,
        reloadStrategy: devServerConfig.reloadStrategy
    };
    content = content.replace('window.__DEV_CLIENT_CONFIG__', JSON.stringify(devClientConfig));
    res.writeHead(200, responseHeaders({
        'Content-Type': 'text/html'
    }));
    res.write(content);
    res.end();
    if (devServerConfig.logRequests) {
        sendMsg(process, {
            requestLog: {
                method: req.method,
                url: req.url,
                status: 200
            }
        });
    }
}

async function serveDirectoryIndex(devServerConfig, fs, req, res) {
    try {
        const indexFilePath = path__default.join(req.filePath, 'index.html');
        req.stats = await fs.stat(indexFilePath);
        if (req.stats.isFile()) {
            req.filePath = indexFilePath;
            return serveFile(devServerConfig, fs, req, res);
        }
    }
    catch (e) { }
    if (!req.pathname.endsWith('/')) {
        if (devServerConfig.logRequests) {
            sendMsg(process, {
                requestLog: {
                    method: req.method,
                    url: req.url,
                    status: 302
                }
            });
        }
        res.writeHead(302, {
            'location': req.pathname + '/'
        });
        return res.end();
    }
    try {
        const dirItemNames = await fs.readdir(req.filePath);
        try {
            const dirTemplatePath = path__default.join(devServerConfig.devServerDir, 'templates', 'directory-index.html');
            const dirTemplate = await fs.readFile(dirTemplatePath);
            const files = await getFiles(fs, req.filePath, req.pathname, dirItemNames);
            const templateHtml = dirTemplate
                .replace('{{title}}', getTitle(req.pathname))
                .replace('{{nav}}', getName(req.pathname))
                .replace('{{files}}', files);
            res.writeHead(200, responseHeaders({
                'Content-Type': 'text/html',
                'X-Directory-Index': req.pathname
            }));
            res.write(templateHtml);
            res.end();
            if (devServerConfig.logRequests) {
                sendMsg(process, {
                    requestLog: {
                        method: req.method,
                        url: req.url,
                        status: 200
                    }
                });
            }
        }
        catch (e) {
            serve500(devServerConfig, req, res, e);
        }
    }
    catch (e) {
        serve404(devServerConfig, fs, req, res);
    }
}
async function getFiles(fs, filePath, urlPathName, dirItemNames) {
    const items = await getDirectoryItems(fs, filePath, urlPathName, dirItemNames);
    if (urlPathName !== '/') {
        items.unshift({
            isDirectory: true,
            pathname: '../',
            name: '..'
        });
    }
    return items
        .map(item => {
        return (`
        <li class="${item.isDirectory ? 'directory' : 'file'}">
          <a href="${item.pathname}">
            <span class="icon"></span>
            <span>${item.name}</span>
          </a>
        </li>`);
    })
        .join('');
}
async function getDirectoryItems(fs, filePath, urlPathName, dirItemNames) {
    const items = await Promise.all(dirItemNames.map(async (dirItemName) => {
        const absPath = path__default.join(filePath, dirItemName);
        const stats = await fs.stat(absPath);
        const item = {
            name: dirItemName,
            pathname: Url.resolve(urlPathName, dirItemName),
            isDirectory: stats.isDirectory()
        };
        return item;
    }));
    return items;
}
function getTitle(pathName) {
    return pathName;
}
function getName(pathName) {
    const dirs = pathName.split('/');
    dirs.pop();
    let url = '';
    return dirs.map((dir, index) => {
        url += dir + '/';
        const text = (index === 0 ? `~` : dir);
        return `<a href="${url}">${text}</a>`;
    }).join('<span>/</span>') + '<span>/</span>';
}

function createRequestHandler(devServerConfig, fs) {
    return async function (incomingReq, res) {
        try {
            const req = normalizeHttpRequest(devServerConfig, incomingReq);
            if (req.url === '') {
                res.writeHead(302, { 'location': '/' });
                if (devServerConfig.logRequests) {
                    sendMsg(process, {
                        requestLog: {
                            method: req.method,
                            url: req.url,
                            status: 302
                        }
                    });
                }
                return res.end();
            }
            if (isDevClient(req.pathname) && devServerConfig.websocket) {
                return serveDevClient(devServerConfig, fs, req, res);
            }
            if (!req.url.startsWith(devServerConfig.basePath)) {
                if (devServerConfig.logRequests) {
                    sendMsg(process, {
                        requestLog: {
                            method: req.method,
                            url: req.url,
                            status: 404
                        }
                    });
                }
                return serve404Content(devServerConfig, req, res, `404 File Not Found, base path: ${devServerConfig.basePath}`);
            }
            try {
                req.stats = await fs.stat(req.filePath);
                if (req.stats.isFile()) {
                    return serveFile(devServerConfig, fs, req, res);
                }
                if (req.stats.isDirectory()) {
                    return serveDirectoryIndex(devServerConfig, fs, req, res);
                }
            }
            catch (e) { }
            if (isValidHistoryApi(devServerConfig, req)) {
                try {
                    const indexFilePath = path__default.join(devServerConfig.root, devServerConfig.historyApiFallback.index);
                    req.stats = await fs.stat(indexFilePath);
                    if (req.stats.isFile()) {
                        req.filePath = indexFilePath;
                        return serveFile(devServerConfig, fs, req, res);
                    }
                }
                catch (e) { }
            }
            return serve404(devServerConfig, fs, req, res);
        }
        catch (e) {
            return serve500(devServerConfig, incomingReq, res, e);
        }
    };
}
function normalizeHttpRequest(devServerConfig, incomingReq) {
    const req = {
        method: (incomingReq.method || 'GET').toUpperCase(),
        headers: incomingReq.headers,
        acceptHeader: (incomingReq.headers && typeof incomingReq.headers.accept === 'string' && incomingReq.headers.accept) || '',
        url: (incomingReq.url || '').trim() || '',
        host: (incomingReq.headers && typeof incomingReq.headers.host === 'string' && incomingReq.headers.host) || null
    };
    const parsedUrl = Url.parse(req.url);
    const parts = (parsedUrl.pathname || '').replace(/\\/g, '/').split('/');
    req.pathname = parts.map(part => decodeURIComponent(part)).join('/');
    if (req.pathname.length > 0 && !isDevClient(req.pathname)) {
        req.pathname = '/' + req.pathname.substring(devServerConfig.basePath.length);
    }
    req.filePath = utils.normalizePath(path__default.normalize(path__default.join(devServerConfig.root, path__default.relative('/', req.pathname))));
    return req;
}
function isValidHistoryApi(devServerConfig, req) {
    if (!devServerConfig.historyApiFallback) {
        return false;
    }
    if (req.method !== 'GET') {
        return false;
    }
    if (!req.acceptHeader.includes('text/html')) {
        return false;
    }
    if (!devServerConfig.historyApiFallback.disableDotRule && req.pathname.includes('.')) {
        return false;
    }
    return true;
}

async function findClosestOpenPort(host, port) {
    async function t(portToCheck) {
        const isTaken = await isPortTaken(host, portToCheck);
        if (!isTaken) {
            return portToCheck;
        }
        return t(portToCheck + 1);
    }
    return t(port);
}
function isPortTaken(host, port) {
    return new Promise((resolve, reject) => {
        const tester = net.createServer()
            .once('error', () => {
            resolve(true);
        })
            .once('listening', () => {
            tester.once('close', () => {
                resolve(false);
            })
                .close();
        })
            .on('error', (err) => {
            reject(err);
        })
            .listen(port, host);
    });
}

async function createHttpServer(devServerConfig, fs, destroys) {
    // figure out the port to be listening on
    // by figuring out the first one available
    devServerConfig.port = await findClosestOpenPort(devServerConfig.address, devServerConfig.port);
    // create our request handler
    const reqHandler = createRequestHandler(devServerConfig, fs);
    const credentials = devServerConfig.https;
    let server = credentials ? https.createServer(credentials, reqHandler) : http.createServer(reqHandler);
    destroys.push(() => {
        // close down the serve on destroy
        server.close();
        server = null;
    });
    return server;
}

const WebSocket = require('../sys/node/websocket').WebSocket;
function createWebSocket(process, httpServer, destroys) {
    const wsConfig = {
        server: httpServer
    };
    const wsServer = new WebSocket.Server(wsConfig);
    function heartbeat() {
        this.isAlive = true;
    }
    wsServer.on('connection', (ws) => {
        ws.on('message', (data) => {
            // the server process has received a message from the browser
            // pass the message received from the browser to the main cli process
            process.send(JSON.parse(data.toString()));
        });
        ws.isAlive = true;
        ws.on('pong', heartbeat);
    });
    const pingInternval = setInterval(() => {
        wsServer.clients.forEach((ws) => {
            if (!ws.isAlive) {
                return ws.close(1000);
            }
            ws.isAlive = false;
            ws.ping(utils.noop);
        });
    }, 10000);
    function onMessageFromCli(msg) {
        // the server process has received a message from the cli's main thread
        // pass the data to each web socket for each browser/tab connected
        if (msg) {
            const data = JSON.stringify(msg);
            wsServer.clients.forEach(ws => {
                if (ws.readyState === ws.OPEN) {
                    ws.send(data);
                }
            });
        }
    }
    process.addListener('message', onMessageFromCli);
    destroys.push(() => {
        clearInterval(pingInternval);
        wsServer.clients.forEach(ws => {
            ws.close(1000);
        });
    });
}

/*
 * exit
 * https://github.com/cowboy/node-exit
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

var exit = function exit(exitCode, streams) {
  if (!streams) { streams = [process.stdout, process.stderr]; }
  var drainCount = 0;
  // Actually exit if all streams are drained.
  function tryToExit() {
    if (drainCount === streams.length) {
      process.exit(exitCode);
    }
  }
  streams.forEach(function(stream) {
    // Count drained streams now, but monitor non-drained streams.
    if (stream.bufferSize === 0) {
      drainCount++;
    } else {
      stream.write('', 'utf-8', function() {
        drainCount++;
        tryToExit();
      });
    }
    // Prevent further writing.
    stream.write = function() {};
  });
  // If all streams were already drained, exit now.
  tryToExit();
  // In Windows, when run as a Node.js child process, a script utilizing
  // this library might just exit with a 0 exit code, regardless. This code,
  // despite the fact that it looks a bit crazy, appears to fix that.
  process.on('exit', function() {
    process.exit(exitCode);
  });
};

async function startDevServerWorker(process, devServerConfig, fs) {
    try {
        const destroys = [];
        devServerConfig.editors = await getEditors();
        // create the http server listening for and responding to requests from the browser
        let httpServer = await createHttpServer(devServerConfig, fs, destroys);
        if (devServerConfig.websocket) {
            // upgrade web socket requests the server receives
            createWebSocket(process, httpServer, destroys);
        }
        // start listening!
        httpServer.listen(devServerConfig.port, devServerConfig.address);
        // have the server worker send a message to the main cli
        // process that the server has successfully started up
        sendMsg(process, {
            serverStated: {
                browserUrl: getBrowserUrl(devServerConfig.protocol, devServerConfig.address, devServerConfig.port, devServerConfig.basePath, '/'),
                initialLoadUrl: getBrowserUrl(devServerConfig.protocol, devServerConfig.address, devServerConfig.port, devServerConfig.basePath, devServerConfig.initialLoadUrl || DEV_SERVER_INIT_URL)
            }
        });
        const closeServer = () => {
            // probably recived a SIGINT message from the parent cli process
            // let's do our best to gracefully close everything down first
            destroys.forEach(destroy => {
                destroy();
            });
            destroys.length = 0;
            httpServer = null;
            setTimeout(() => {
                exit(0);
            }, 5000).unref();
            process.removeAllListeners('message');
        };
        process.once('SIGINT', closeServer);
    }
    catch (e) {
        sendError(process, e);
    }
}

async function startServer(devServerConfig) {
    // received a message from main to start the server
    try {
        const fs = new node.NodeFs(process);
        devServerConfig.contentTypes = await loadContentTypes(fs);
        startDevServerWorker(process, devServerConfig, fs);
    }
    catch (e) {
        sendError(process, e);
    }
}
async function loadContentTypes(fs) {
    const contentTypePath = path__default.join(__dirname, 'content-type-db.json');
    const contentTypeJson = await fs.readFile(contentTypePath);
    return JSON.parse(contentTypeJson);
}
process.on('message', (msg) => {
    if (msg.startServer) {
        startServer(msg.startServer);
    }
});
process.on('unhandledRejection', (e) => {
    console.log(e);
});
