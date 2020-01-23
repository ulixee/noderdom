// import * as Types from './types';
//
// export default class TsStaticInterfaceEmitter {
//   // @ts-ignore
//   private emitStaticInterface(i: Types.Interface) {
//     // Some types are static types with non-static members. For example,
//     // NodeFilter is a static method itself, however it has an "acceptNode" method
//     // that expects the user to implement.
//     const hasNonStaticMethod = i.methods && !!Object.values(i.methods.method).find(m => !m.static);
//     const hasProperty = i.properties && Object.values(i.properties.property).find(p => !p.static);
//     const hasNonStaticMember = hasNonStaticMethod || hasProperty;
//
//     if (hasNonStaticMember) {
//       this.emitStaticInterfaceWithNonStaticMembers(i);
//     } else {
//       this.emitPureStaticInterface(i);
//     }
//   }
//
//   // For static types with non-static members, we put the non-static members into an
//   // interface, and put the static members into the object literal type of 'declare var'
//   // For static types with only static members, we put everything in the interface.
//   // Because in the two cases the interface contains different things, it might be easier to
//   // read to separate them into two functions.
//   private emitStaticInterfaceWithNonStaticMembers(i: Types.Interface) {
//     this.emitInterfaceDeclaration(i);
//     this.printer.increaseIndent();
//
//     // printMembers(/*prefix*/ '', Types.EmitScope.InstanceOnly, i);
//     // printConstants(i);
//     // printEventHandlers(/*prefix*/ '', i);
//     // printIndexers(Types.EmitScope.InstanceOnly, i);
//
//     this.printer.decreaseIndent();
//     this.printer.printLine('}');
//     this.printer.printLine('');
//     this.printer.printLine('// VAR - STATIC INTERFACE');
//     this.printer.printLine(`declare var ${i.name}: {`);
//     this.printer.increaseIndent();
//     // printConstants(i);
//     // printMembers(/*prefix*/ '', Types.EmitScope.StaticOnly, i);
//     this.printer.decreaseIndent();
//     this.printer.printLine('};');
//     this.printer.printLine('');
//   }
//
//   private emitPureStaticInterface(i: Types.Interface) {
//     this.emitInterfaceDeclaration(i);
//     this.printer.increaseIndent();
//
//     // printMembers(/*prefix*/ '', Types.EmitScope.StaticOnly, i);
//     // printConstants(i);
//     // printEventHandlers(/*prefix*/ '', i);
//     // printIndexers(Types.EmitScope.StaticOnly, i);
//     this.printer.decreaseIndent();
//     this.printer.printLine('}');
//     this.printer.printLine('// VAR - PURE STATIC INTERFACE');
//     this.printer.printLine(`declare var ${i.name}: ${i.name};`);
//     this.printer.printLine('');
//   }
// }
