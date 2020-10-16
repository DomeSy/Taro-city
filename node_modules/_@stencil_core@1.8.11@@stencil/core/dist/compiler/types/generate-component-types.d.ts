import * as d from '../../declarations';
/**
 * Generate a string based on the types that are defined within a component.
 *
 * @param cmp the metadata for the component that a type definition string is generated for
 * @param importPath the path of the component file
 */
export declare function generateComponentTypes(cmp: d.ComponentCompilerMeta): d.TypesModule;
