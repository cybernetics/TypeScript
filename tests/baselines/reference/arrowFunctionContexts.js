//// [arrowFunctionContexts.ts]

// Arrow function used in with statement
with (window) {
    var p = () => this;
}

// Arrow function as argument to super call
class Base {
    constructor(n: any) { }
}

class Derived extends Base {
    constructor() {
        super(() => this);
    }
}

// Arrow function as function argument
window.setTimeout(() => null, 100);

// Arrow function as value in array literal

var obj = (n: number) => '';
var obj: { (n: number): string; }; // OK

var arr = [(n: number) => ''];
var arr: { (n: number): string; }[]; // Incorrect error here (bug 829597)

// Arrow function as enum value
enum E {
    x = () => 4, // Error expected
    y = (() => this).length // error, can't use this in enum
}

// Arrow function as module variable initializer
module M {
    export var a = (s) => '';
    var b = (s) => s;
}

// Repeat above for module members that are functions? (necessary to redo all of them?)
module M2 {
    // Arrow function used in with statement
    with (window) {
        var p = () => this;
    }

    // Arrow function as argument to super call
    class Base {
        constructor(n: any) { }
    }

    class Derived extends Base {
        constructor() {
            super(() => this);
        }
    }

    // Arrow function as function argument
    window.setTimeout(() => null, 100);

    // Arrow function as value in array literal

    var obj = (n: number) => '';
    var obj: { (n: number): string; }; // OK

    var arr = [(n: number) => ''];
    var arr: { (n: number): string; }[]; // Incorrect error here (bug 829597)

    // Arrow function as enum value
    enum E {
        x = () => 4, // Error expected
        y = (() => this).length
    }

    // Arrow function as module variable initializer
    module M {
        export var a = (s) => '';
        var b = (s) => s;
    }

}

// <Identifier>(ParamList) => { ... } is a generic arrow function
var generic1 = <T>(n: T) => [n];
var generic1: { <T>(n: T): T[] }; // Incorrect error, Bug 829597
var generic2 = <T>(n: T) => { return [n]; };
var generic2: { <T>(n: T): T[] };

// <Identifier> ((ParamList) => { ... } ) is a type assertion to an arrow function
var asserted1 = <any>((n) => [n]);
var asserted1: any;
var asserted2 = <any>((n) => { return n; });
var asserted2: any;



//// [arrowFunctionContexts.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
with (window) {
    var p = function () { return this; };
}
var Base = (function () {
    function Base(n) {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.call(this, function () { return _this; });
        var _this = this;
    }
    return Derived;
})(Base);
window.setTimeout(function () { return null; }, 100);
var obj = function (n) { return ''; };
var obj;
var arr = [function (n) { return ''; }];
var arr;
var E;
(function (E) {
    E[E["x"] = function () { return 4; }] = "x";
    E[E["y"] = (function () { return _this; }).length] = "y";
})(E || (E = {}));
var M;
(function (M) {
    M.a = function (s) { return ''; };
    var b = function (s) { return s; };
})(M || (M = {}));
var M2;
(function (M2) {
    with (window) {
        var p = function () { return this; };
    }
    var Base = (function () {
        function Base(n) {
        }
        return Base;
    })();
    var Derived = (function (_super) {
        __extends(Derived, _super);
        function Derived() {
            _super.call(this, function () { return _this; });
            var _this = this;
        }
        return Derived;
    })(Base);
    window.setTimeout(function () { return null; }, 100);
    var obj = function (n) { return ''; };
    var obj;
    var arr = [function (n) { return ''; }];
    var arr;
    var E;
    (function (E) {
        E[E["x"] = function () { return 4; }] = "x";
        E[E["y"] = (function () { return _this; }).length] = "y";
    })(E || (E = {}));
    var M;
    (function (M) {
        M.a = function (s) { return ''; };
        var b = function (s) { return s; };
    })(M || (M = {}));
})(M2 || (M2 = {}));
var generic1 = function (n) { return [n]; };
var generic1;
var generic2 = function (n) {
    return [n];
};
var generic2;
var asserted1 = (function (n) { return [n]; });
var asserted1;
var asserted2 = (function (n) {
    return n;
});
var asserted2;
