import * as d from '../../declarations';
import { RollupBuild } from 'rollup';
export declare function generateEsmBrowser(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, rollupBuild: RollupBuild, outputTargets: d.OutputTargetDistLazy[]): Promise<d.BundleModule[]>;
