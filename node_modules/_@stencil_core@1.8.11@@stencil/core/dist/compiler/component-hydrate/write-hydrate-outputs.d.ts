import * as d from '../../declarations';
import { RollupOutput } from 'rollup';
export declare function writeHydrateOutputs(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTargets: d.OutputTargetHydrate[], rollupOutput: RollupOutput): Promise<void[]>;
