import * as d from '../declarations';
export declare class BuildEvents implements d.BuildEvents {
    private evCallbacks;
    subscribe(eventName: 'fileUpdate', cb: (path: string) => void): Function;
    subscribe(eventName: 'fileAdd', cb: (path: string) => void): Function;
    subscribe(eventName: 'fileDelete', cb: (path: string) => void): Function;
    subscribe(eventName: 'dirAdd', cb: (path: string) => void): Function;
    subscribe(eventName: 'dirDelete', cb: (path: string) => void): Function;
    subscribe(eventName: 'fsChange', cb: (fsChange: d.FsWatchResults) => void): Function;
    subscribe(eventName: 'buildFinish', cb: (buildResults: d.BuildResults) => void): Function;
    subscribe(eventName: 'buildLog', cb: (buildLog: d.BuildLog) => void): Function;
    unsubscribe(eventName: string, cb: Function): void;
    unsubscribeAll(): void;
    emit(eventName: d.CompilerEventName, ...args: any[]): void;
}
