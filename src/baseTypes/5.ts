/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type unionType = string | number;
type lieraltype = "enable" | "disable";

let union: unionType = 46;
let literal: lieraltype = "disable";
