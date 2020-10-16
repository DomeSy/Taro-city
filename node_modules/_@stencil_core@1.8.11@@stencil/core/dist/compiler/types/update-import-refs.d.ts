import * as d from '../../declarations';
/**
 * Find all referenced types by a component and add them to the importDataObj and return the newly
 * updated importDataObj
 *
 * @param importDataObj key/value of type import file, each value is an array of imported types
 * @param cmpMeta the metadata for the component that is referencing the types
 * @param filePath the path of the component file
 * @param config general config that all of stencil uses
 */
export declare function updateReferenceTypeImports(config: d.Config, importDataObj: d.TypesImportData, allTypes: Map<string, number>, cmp: d.ComponentCompilerMeta, filePath: string): d.TypesImportData;
