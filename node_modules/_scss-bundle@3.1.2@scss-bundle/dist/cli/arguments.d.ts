import commander from "commander";
import { BundlerOptions } from "../contracts";
export interface Arguments extends BundlerOptions {
    config?: string;
}
export declare function resolveArguments(cmd: commander.Command, argv: string[]): Arguments;
