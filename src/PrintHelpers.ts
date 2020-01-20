// import * as Browser from './types';
// import { arrayToMap, integerTypes } from './helpers';
//
// function emitIterator(inter: Browser.Interface) {
//   // check anonymous unsigned long getter and length property
//   const isIterableGetter = (m: Browser.AnonymousMethod) =>
//     m.getter === 1 &&
//     !!m.signature.length &&
//     !!m.signature[0].param &&
//     m.signature[0].param!.length === 1 &&
//     typeof m.signature[0].param![0].type === 'string' &&
//     integerTypes.has(m.signature[0].param![0].type as string);
//
//   function findIterableGetter() {
//     const anonymousGetter = inter['anonymous-methods'] && inter['anonymous-methods']!.method.find(isIterableGetter);
//
//     if (anonymousGetter) return anonymousGetter;
//     if (inter.methods) return Object.values(inter.methods.method).find(isIterableGetter);
//     return undefined;
//   }
//
//   function findLengthProperty(i: Browser.Interface | undefined) {
//     const p = i && i.properties && i.properties.property.length;
//     return p && p.name === 'length' && typeof p.type === 'string' && integerTypes.has(p.type);
//   }
//
//   function getIteratorSubtypes() {
//     if (inter.iterator) {
//       if (inter.iterator.type.length === 1) {
//         return [convertDomTypeToTsType(inter.iterator.type[0])];
//       }
//       return inter.iterator.type.map(convertDomTypeToTsType);
//     }
//     if (inter.name !== 'Window') {
//       const iterableGetter = findIterableGetter();
//       const lengthProperty = findLengthProperty(inter) || findLengthProperty(this.components.allInterfacesMap[inter.extends]);
//       if (iterableGetter && lengthProperty) {
//         return [
//           convertDomTypeToTsType({
//             type: iterableGetter.signature[0].type,
//           }),
//         ];
//       }
//     }
//   }
//
//   function stringifySingleOrTupleTypes(types: string[]) {
//     if (types.length === 1) {
//       return types[0];
//     }
//     return `[${types.join(', ')}]`;
//   }
//
//   function emitIterableDeclarationMethods(i: Browser.Interface, subtypes: string[]) {
//     let [keyType, valueType] = subtypes;
//     if (!valueType) {
//       valueType = keyType;
//       keyType = 'number';
//     }
//
//     const methods = [
//       {
//         name: 'entries',
//         definition: `IterableIterator<[${keyType}, ${valueType}]>`,
//       },
//       {
//         name: 'keys',
//         definition: `IterableIterator<${keyType}>`,
//       },
//       {
//         name: 'values',
//         definition: `IterableIterator<${valueType}>`,
//       },
//     ];
//
//     const comments = i.iterator && i.iterator.comments && i.iterator.comments.comment;
//
//     methods.forEach(m => {
//       if (comments && comments[m.name]) {
//         comments[m.name].split('\n').forEach(printer.printLine);
//       }
//       printer.printLine(`${m.name}(): ${m.definition};`);
//     });
//   }
//
//   function getIteratorExtends(iterator?: Browser.Iterator, subtypes?: string[]) {
//     if (!iterator || !subtypes) {
//       return '';
//     }
//     const base =
//       iterator.kind === 'maplike'
//         ? `Map<${subtypes[0]}, ${subtypes[1]}>`
//         : iterator.kind === 'setlike'
//         ? `Set<${subtypes[0]}>`
//         : undefined;
//     if (!base) {
//       return '';
//     }
//     const result = iterator.readonly ? `Readonly${base}` : base;
//     return `extends ${result} `;
//   }
//
//   function hasSequenceArgument(s: Browser.Signature) {
//     function typeIncludesSequence(type: string | Browser.Typed[]): boolean {
//       if (Array.isArray(type)) {
//         return type.some(t => typeIncludesSequence(t.type));
//       }
//       return type === 'sequence' || !!sequenceTypedefMap[type];
//     }
//     return !!s.param && s.param.some(p => typeIncludesSequence(p.type));
//   }
//
//   function replaceTypedefsInSignatures(signatures: Browser.Signature[]): Browser.Signature[] {
//     return signatures.map(s => {
//       const params = s.param!.map(p => {
//         const typedef = typeof p.type === 'string' ? sequenceTypedefMap[p.type] : undefined;
//         if (!typedef) {
//           return p;
//         }
//         return { ...p, type: typedef.type };
//       });
//       return { ...s, param: params };
//     });
//   }
//
//   const sequenceTypedefs = !webidl.typedefs
//     ? []
//     : webidl.typedefs
//       .filter(typedef => Array.isArray(typedef.type))
//       .map(typedef => ({ ...typedef, type: (typedef.type as Browser.Typed[]).filter(t => t.type === 'sequence') }))
//       .filter(typedef => typedef.type.length);
//   const sequenceTypedefMap = arrayToMap(
//     sequenceTypedefs,
//     t => t['new-type'],
//     t => t,
//   );
//
//   const subtypes = getIteratorSubtypes();
//   const methodsWithSequence: Browser.Method[] = Object.values(inter.methods ? inter.methods.method : {})
//     .filter(m => m.signature)
//     .map(m => ({
//       ...m,
//       signature: replaceTypedefsInSignatures(m.signature.filter(hasSequenceArgument)),
//     }))
//     .filter(m => m.signature.length)
//     .sort(compareName);
//
//   if (subtypes || methodsWithSequence.length) {
//     const iteratorExtends = getIteratorExtends(inter.iterator, subtypes);
//     const name = getNameWithTypeParameter(
//       inter,
//       extendConflictsBaseTypes[inter.name] ? `${inter.name}Base` : inter.name,
//     );
//     printer.printLine('');
//     printer.printLine(`export interface ${name} ${iteratorExtends}{`);
//     printer.increaseIndent();
//
//     methodsWithSequence.forEach(m => emitMethod('', m, new Set()));
//
//     if (subtypes && !iteratorExtends) {
//       printer.printLine(`[Symbol.iterator](): IterableIterator<${stringifySingleOrTupleTypes(subtypes)}>;`);
//     }
//     if (inter.iterator && inter.iterator.kind === 'iterable' && subtypes) {
//       emitIterableDeclarationMethods(inter, subtypes);
//     }
//     printer.decreaseIndent();
//     printer.printLine('}');
//   }
// }
