import * as d from '../../declarations';
import { BuildContext } from '../build/build-ctx';
export declare function generateBuildFromFsWatch(config: d.Config, compilerCtx: d.CompilerCtx): BuildContext;
export declare function filesChanged(buildCtx: d.BuildCtx): string[];
export declare function isScriptExt(ext: string): boolean;
export declare function isStyleExt(ext: string): boolean;
export declare function updateCacheFromRebuild(compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): void;
