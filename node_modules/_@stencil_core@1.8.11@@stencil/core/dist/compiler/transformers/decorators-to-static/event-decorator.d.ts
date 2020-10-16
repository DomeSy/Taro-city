import * as d from '../../../declarations';
import ts from 'typescript';
export declare const eventDecoratorsToStatic: (config: d.Config, diagnostics: d.Diagnostic[], decoratedProps: ts.ClassElement[], typeChecker: ts.TypeChecker, newMembers: ts.ClassElement[]) => void;
export declare const getEventName: (eventOptions: d.EventOptions, memberName: string) => string;
