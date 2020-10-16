import ts from 'typescript';
export declare const parseStaticEncapsulation: (staticMembers: ts.ClassElement[]) => "none" | "shadow" | "scoped";
export declare const parseStaticShadowDelegatesFocus: (encapsulation: string, staticMembers: ts.ClassElement[]) => boolean;
