//// [constructSignatureAssignabilityInInheritance4.ts]
// checking subtype relations for function types as it relates to contextual signature instantiation

class Base { foo: string; }
class Derived extends Base { bar: string; }
class Derived2 extends Derived { baz: string; }
class OtherDerived extends Base { bing: string; }

interface A { // T
    // M's
    a: new <T>(x: T) => T[];
    a2: new <T>(x: T) => string[];
    a3: new <T>(x: T) => void;
    a4: new <T, U>(x: T, y: U) => string;
    a5: new <T, U>(x: (arg: T) => U) => T;
    a6: new <T extends Base>(x: (arg: T) => Derived) => T;
    a11: new <T>(x: { foo: T }, y: { foo: T; bar: T }) => Base;
    a15: new <T>(x: { a: T; b: T }) => T[];
    a16: new <T extends Base>(x: { a: T; b: T }) => T[];
    a17: {
        new <T extends Base>(x: T): T[];
        new <U extends Derived>(x: U): U[];
    };
    a18: {
        new <T extends Derived>(x: T): number[];
        new <U extends Base>(x: U): number[];
    };
    a19: {
        new <T extends Derived>(x: new (a: T) => T): T[];
        new <U extends Base>(x: new (a: U) => U): U[];
    };
    a20: {
        new (x: {
            new <T extends Derived>(a: T): T;
            new <U extends Base>(a: U): U;
        }): any[];
        new (x: {
            new <T extends Base>(a: T): T;
            new <U extends Derived2>(a: U): U;
        }): any[];
    };
}

// S's
interface I extends A {
    // N's
    a: new <T>(x: T) => T[]; // ok, instantiation of N is a subtype of M, T is number
    a2: new <T>(x: T) => string[]; // ok
    a3: new <T>(x: T) => T; // ok since Base returns void
    a4: new <T, U>(x: T, y: U) => string; // ok, instantiation of N is a subtype of M, T is string, U is number
    a5: new <T, U>(x: (arg: T) => U) => T; // ok, U is in a parameter position so inferences can be made
    a6: new <T extends Base, U extends Derived>(x: (arg: T) => U) => T; // ok, same as a5 but with object type hierarchy
    a11: new <T, U>(x: { foo: T }, y: { foo: U; bar: U }) => Base; // ok
    a15: new <U, V>(x: { a: U; b: V; }) => U[]; // ok, T = U, T = V
    a16: new <T>(x: { a: T; b: T }) => T[]; // ok, more general parameter type
    a17: new <T extends Base>(x: T) => T[]; // ok, more general parameter type
    a18: new <T extends Base>(x: T) => number[]; // ok, more general parameter type
    a19: new <T extends Base>(x: new (a: T) => T) => T[]; // ok
    a20: new (x: new <T extends Base>(a: T) => T) => any[]; // ok
}

//// [constructSignatureAssignabilityInInheritance4.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
    }
    return Derived2;
})(Derived);
var OtherDerived = (function (_super) {
    __extends(OtherDerived, _super);
    function OtherDerived() {
        _super.apply(this, arguments);
    }
    return OtherDerived;
})(Base);
