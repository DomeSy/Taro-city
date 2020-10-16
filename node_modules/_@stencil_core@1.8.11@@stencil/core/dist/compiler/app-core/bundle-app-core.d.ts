import * as d from '../../declarations';
import { OutputOptions, RollupBuild } from 'rollup';
export declare const bundleApp: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, build: d.Build, bundleAppOptions: d.BundleAppOptions) => Promise<RollupBuild>;
export declare const generateRollupOutput: (build: RollupBuild, options: OutputOptions, config: d.Config, entryModules: d.EntryModule[]) => Promise<d.RollupResult[]>;
export declare const DEFAULT_CORE = "\nexport * from '@stencil/core/platform';\nimport globals from '@stencil/core/global-scripts';\nexport { globals };\n";
export declare const DEFAULT_ENTRY = "\nexport * from '@stencil/core';\n";
