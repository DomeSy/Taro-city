import * as d from '../../declarations';
import { RollupBuild } from 'rollup';
export declare const bundleHydrateFactory: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, build: d.Build, appEntryCode: string) => Promise<RollupBuild>;
