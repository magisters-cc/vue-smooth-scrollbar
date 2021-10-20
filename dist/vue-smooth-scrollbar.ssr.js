'use strict';function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};var toString$1 = {}.toString;

var classofRaw = function (it) {
  return toString$1.call(it).slice(8, -1);
};var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();var setGlobal = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global_1, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global_1[key] = value;
  } return value;
};var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$1;var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
});// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};var hasOwnProperty$1 = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1.call(toObject(it), key);
};var id$1 = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix).toString(36);
};// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable = function (argument) {
  return typeof argument === 'function';
};var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
};var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';var process = global_1.process;
var Deno = global_1.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;/* eslint-disable es/no-symbol -- required for testing */



// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
});/* eslint-disable es/no-symbol -- required for testing */


var useSymbolAsUid = nativeSymbol
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';var WellKnownSymbolsStore = shared('wks');
var Symbol$3 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (nativeSymbol && hasOwnProperty_1(Symbol$3, name)) {
      WellKnownSymbolsStore[name] = Symbol$3[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};var isObject$1 = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};// `Assert: Type(argument) is Object`
var anObject = function (argument) {
  if (isObject$1(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$1(document$1) && isObject$1(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});var isSymbol$1 = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};var tryToString = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};// `Assert: IsCallable(argument) is true`
var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject$1(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject$1(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject$1(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive = function (input, pref) {
  if (!isObject$1(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject$1(result) || isSymbol$1(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$1(key) ? key : String(key);
};// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$5 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$5
};var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};var hiddenKeys$1 = {};var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};var html = getBuiltIn('document', 'documentElement');var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};/* global ActiveXObject -- old IE, WSH */








var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};var iterators = {};var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(sharedStore.inspectSource)) {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;var WeakMap$2 = global_1.WeakMap;

var nativeWeakMap = isCallable(WeakMap$2) && /native code/.test(inspectSource(WeakMap$2));var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap$1 = global_1.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwnProperty_1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwnProperty_1(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$4
};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$3
};var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};var redefine = createCommonjsModule(function (module) {
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});
});var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
	f: f$2
};// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$1 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$1
};// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwnProperty_1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};var ITERATOR$4 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype$2[ITERATOR$4])) {
  redefine(IteratorPrototype$2, ITERATOR$4, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};var defineProperty$2 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !hasOwnProperty_1(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$2(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};var aPossiblePrototype = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};/* eslint-disable no-proto -- safe */



// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);var PROPER_FUNCTION_NAME = functionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var IteratorPrototype = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$3])) {
          redefine(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  iterators[NAME] = defaultIterator;

  return methods;
};var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');/* eslint-disable es/no-object-getownpropertynames -- safe */

var $getOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f
};var freezing = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;





var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwnProperty_1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwnProperty_1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && REQUIRED && isExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    objectGetOwnPropertyNames.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    _export({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys$1[METADATA] = true;
});var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
};// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR$1)
    || getMethod(it, '@@iterator')
    || iterators[classof(it)];
};var getIterator = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};var anInstance = function (it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$1(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$1(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$1(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced_1(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.enable();
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};var SPECIES$1 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$1]) {
    defineProperty(Constructor, SPECIES$1, {
      configurable: true,
      get: function () { return this; }
    });
  }
};var defineProperty$1 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$2 = internalState.set;
var internalStateGetterFor$1 = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$1(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$1 = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString$1, { unsafe: true });
}var toString_1 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString_1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};var charAt = stringMultibyte.charAt;




var STRING_ITERATOR = 'String Iterator';
var setInternalState$1 = internalState.set;
var getInternalState = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString_1(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});var path = global_1;path.Map;// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);path.Set;// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray || function isArray(argument) {
  return classofRaw(argument) == 'Array';
};var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject$1(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};var getWeakData = internalMetadata.getWeakData;








var setInternalState = internalState.set;
var internalStateGetterFor = internalState.getterFor;
var find = arrayIteration.find;
var findIndex = arrayIteration.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

var collectionWeak = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject$1(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwnProperty_1(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject$1(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwnProperty_1(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject$1(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};createCommonjsModule(function (module) {






var enforceIternalState = internalState.enforce;


var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (nativeWeakMap && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  internalMetadata.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject$1(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject$1(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject$1(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject$1(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}
});path.WeakMap;// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};var createProperty = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: arrayFrom
});path.Array.from;// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});path.Object.assign;/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}function range(min, max) {
    if (min === void 0) { min = -Infinity; }
    if (max === void 0) { max = Infinity; }
    return function (proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function () {
                return this[alias];
            },
            set: function (val) {
                Object.defineProperty(this, alias, {
                    value: clamp(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true,
                });
            },
            enumerable: true,
            configurable: true,
        });
    };
}function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function () {
            return this[alias];
        },
        set: function (val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true,
            });
        },
        enumerable: true,
        configurable: true,
    });
}/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

var now$1 = now;/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}function debounce() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return function (_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function () {
                if (!this.hasOwnProperty(key)) {
                    Object.defineProperty(this, key, {
                        value: debounce$1.apply(void 0, __spreadArrays([fn], options)),
                    });
                }
                return this[key];
            },
        };
    };
}var Options = /** @class */ (function () {
    function Options(config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */
        this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */
        this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */
        this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */
        this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */
        this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */
        this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */
        this.plugins = {};
        Object.keys(config).forEach(function (prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function () {
            return this.delegateTo;
        },
        set: function (el) {
            console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        range(0, 1)
    ], Options.prototype, "damping", void 0);
    __decorate([
        range(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    __decorate([
        boolean
    ], Options.prototype, "renderByPixels", void 0);
    __decorate([
        boolean
    ], Options.prototype, "alwaysShowTracks", void 0);
    __decorate([
        boolean
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}());var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) {
        return eventListenerOptions;
    }
    var supportPassiveEvent = false;
    try {
        var noop = function () { };
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                supportPassiveEvent = true;
            },
        });
        window.addEventListener('testPassive', noop, options);
        window.removeEventListener('testPassive', noop, options);
    }
    catch (e) { }
    eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) {
                return;
            }
            fn(event);
        }
        events.split(/\s+/g).forEach(function (eventName) {
            configs.push({ elem: elem, eventName: eventName, handler: handler });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) {
        return;
    }
    configs.forEach(function (_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}/**
 * Get pointer/touch data
 */
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}/**
 * Get pointer/finger position
 */
function getPosition(evt) {
    var data = getPointerData(evt);
    return {
        x: data.clientX,
        y: data.clientY,
    };
}/**
 * Check if `a` is one of `[...b]`
 */
function isOneOf(a, b) {
    if (b === void 0) { b = []; }
    return b.some(function (v) { return a === v; });
}var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o',
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function (prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function (prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function (prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function (_, $1) { return $1.toUpperCase(); });
        elem.style[cssProp] = styles[prop];
    });
}var Tracker = /** @class */ (function () {
    function Tracker(touch) {
        this.updateTime = Date.now();
        this.delta = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.lastPosition = { x: 0, y: 0 };
        this.lastPosition = getPosition(touch);
    }
    Tracker.prototype.update = function (touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = getPosition(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y),
        };
        var duration = (now - updateTime) || 16;
        var vx = delta.x / duration * 16;
        var vy = delta.y / duration * 16;
        velocity.x = vx * 0.9 + velocity.x * 0.1;
        velocity.y = vy * 0.9 + velocity.y * 0.1;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}());
var TouchRecord = /** @class */ (function () {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function () {
            return { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function () {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return __assign({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return __assign({}, tracker.velocity);
    };
    TouchRecord.prototype.track = function (evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function (touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function (evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function (touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function (evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function (touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function (touch) {
        if (this._has(touch)) {
            return;
        }
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function (touch) {
        if (!this._has(touch)) {
            return;
        }
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function (touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function (touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function (touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function () {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}());var TrackDirection;
(function (TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));var ScrollbarThumb = /** @class */ (function () {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) { _minSize = 0; }
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */
        this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */
        this.displaySize = 0;
        /**
         * Actual size of the thumb
         */
        this.realSize = 0;
        /**
         * Thumb offset to the top
         */
        this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */
    ScrollbarThumb.prototype.attachTo = function (trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function (scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        setStyle(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function () {
        switch (this._direction) {
            case TrackDirection.X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)",
                };
            case TrackDirection.Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)",
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}());var ScrollbarTrack = /** @class */ (function () {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) { thumbMinSize = 0; }
        /**
         * Track element
         */
        this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new ScrollbarThumb(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */
    ScrollbarTrack.prototype.attachTo = function (scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */
    ScrollbarTrack.prototype.show = function () {
        if (this._isShown) {
            return;
        }
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */
    ScrollbarTrack.prototype.hide = function () {
        if (!this._isShown) {
            return;
        }
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function (scrollOffset, containerSize, pageSize) {
        setStyle(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block',
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}());var TrackController = /** @class */ (function () {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
        this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */
    TrackController.prototype.update = function () {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */
    TrackController.prototype.autoHideOnIdle = function () {
        if (this._scrollbar.options.alwaysShowTracks) {
            return;
        }
        this.xAxis.hide();
        this.yAxis.hide();
    };
    __decorate([
        debounce(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}());function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight',
    ].map(function (prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight,
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding,
        },
    };
}function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0),
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0),
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = clamp(x, 0, limit.x);
    y = clamp(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x)
        track.xAxis.show();
    if (y !== offset.y)
        track.yAxis.show();
    if (!options.alwaysShowTracks) {
        track.autoHideOnIdle();
    }
    if (x === offset.x && y === offset.y) {
        return null;
    }
    offset.x = x;
    offset.y = y;
    setStyle(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)",
    });
    track.update();
    return {
        offset: __assign({}, offset),
        limit: __assign({}, limit),
    };
}var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) { duration = 0; }
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = clamp(x, 0, limit.x) - startX;
    var disY = clamp(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') {
                callback.call(scrollbar);
            }
        }
        else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */
function defaultEasing(t) {
    return Math.pow((t - 1), 3) + 1;
}function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem))
        return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
        return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, clamp(delta, -offset.y, limit.y - offset.y));
}var ScrollbarPlugin = /** @class */ (function () {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function () { };
    ScrollbarPlugin.prototype.onDestroy = function () { };
    ScrollbarPlugin.prototype.onUpdate = function () { };
    ScrollbarPlugin.prototype.onRender = function (_remainMomentum) { };
    ScrollbarPlugin.prototype.transformDelta = function (delta, _evt) {
        return __assign({}, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}());
var globalPlugins = {
    order: new Set(),
    constructors: {},
};
function addPlugins() {
    var Plugins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Plugins[_i] = arguments[_i];
    }
    Plugins.forEach(function (P) {
        var pluginName = P.pluginName;
        if (!pluginName) {
            throw new TypeError("plugin name is required");
        }
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order)
        .filter(function (pluginName) {
        return options[pluginName] !== false;
    })
        .map(function (pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function (evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) {
            return;
        }
        if (isEditable(activeElement)) {
            return;
        }
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) {
            return;
        }
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) {
                    scrollbar.parent.containerEl.focus();
                }
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch (keyCode) {
        case KEY_CODE.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE.SPACE:
            return [0, 200];
        case KEY_CODE.PAGE_UP:
            return [0, -size.container.height + 40];
        case KEY_CODE.PAGE_DOWN:
            return [0, size.container.height - 40];
        case KEY_CODE.END:
            return [0, limit.y - offset.y];
        case KEY_CODE.HOME:
            return [0, -offset.y];
        case KEY_CODE.LEFT:
            return [-40, 0];
        case KEY_CODE.UP:
            return [0, -40];
        case KEY_CODE.RIGHT:
            return [40, 0];
        case KEY_CODE.DOWN:
            return [0, 40];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function () {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            onlyScrollIfNeeded: true,
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === 'INPUT' ||
        elem.tagName === 'SELECT' ||
        elem.tagName === 'TEXTAREA' ||
        elem.isContentEditable) {
        return !elem.disabled;
    }
    return false;
}var Direction;
(function (Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcOffset(direction, clickPosition) {
        var size = scrollbar.size;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return clickPosition / totalWidth * size.content.width;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return clickPosition / totalHeight * size.content.height;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if (isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
            return Direction.X;
        }
        if (isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
            return Direction.Y;
        }
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var startTrackDirection;
    var containerRect;
    addEvent(container, 'click', function (evt) {
        if (isMouseMoving || !isOneOf(evt.target, [xAxis.element, yAxis.element])) {
            return;
        }
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = getPosition(evt);
        var offset = scrollbar.offset, limit = scrollbar.limit;
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(clamp(calcOffset(direction, offsetOnTrack) - offset.x, -offset.x, limit.x - offset.x), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, clamp(calcOffset(direction, offsetOnTrack) - offset.y, -offset.y, limit.y - offset.y));
        }
    });
    addEvent(container, 'mousedown', function (evt) {
        if (!isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
            return;
        }
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = getPosition(evt);
        var thumbRect = thumb.getBoundingClientRect();
        startTrackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top,
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        setStyle(scrollbar.containerEl, {
            '-user-select': 'none',
        });
    });
    addEvent(window, 'mousemove', function (evt) {
        if (!isMouseDown)
            return;
        isMouseMoving = true;
        var offset = scrollbar.offset;
        var cursorPos = getPosition(evt);
        if (startTrackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setPosition(calcOffset(startTrackDirection, offsetOnTrack), offset.y);
        }
        if (startTrackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setPosition(offset.x, calcOffset(startTrackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function () {
        isMouseDown = isMouseMoving = false;
        setStyle(scrollbar.containerEl, {
            '-user-select': '',
        });
    });
}function resizeHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    addEvent(window, 'resize', debounce$1(scrollbar.update.bind(scrollbar), 300));
}function selectHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y)
            return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum(clamp(offset.x + x, 0, limit.x) - offset.x, clamp(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function () {
            scroll({ x: x, y: y });
        });
    }
    addEvent(window, 'mousemove', function (evt) {
        if (!isSelected)
            return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    addEvent(contentEl, 'selectstart', function (evt) {
        evt.stopPropagation();
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function () {
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function (evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = getPosition(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0,
    };
    var padding = 20;
    if (x === 0 && y === 0)
        return res;
    if (x > right - padding) {
        res.x = (x - right + padding);
    }
    else if (x < left + padding) {
        res.x = (x - left - padding);
    }
    if (y > bottom - padding) {
        res.y = (y - bottom + padding);
    }
    else if (y < top + padding) {
        res.y = (y - top - padding);
    }
    res.x *= 2;
    res.y *= 2;
    return res;
}var activeScrollbar;
function touchHandler(scrollbar) {
    var MIN_EAING_MOMENTUM = 50;
    var EASING_MULTIPLIER = /Android/.test(navigator.userAgent) ? 3 : 2;
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new TouchRecord();
    var addEvent = eventScope(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, 'touchstart', function (evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, 'touchmove', function (evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar)
            return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, 'touchcancel touchend', function (evt) {
        var velocity = touchRecord.getVelocity();
        var momentum = { x: 0, y: 0 };
        Object.keys(velocity).forEach(function (dir) {
            var s = velocity[dir] / damping;
            // throw small values
            momentum[dir] = Math.abs(s) < MIN_EAING_MOMENTUM ? 0 : s * EASING_MULTIPLIER;
        });
        scrollbar.addTransformableMomentum(momentum.x, momentum.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) {
            scrollbar.options.damping = damping;
        }
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}function wheelHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = ('onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0')) ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function (evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3,
};
var DELTA_MODE = [1.0, 28.0, 500.0];
var getDeltaMode = function (mode) { return DELTA_MODE[mode] || DELTA_MODE[0]; };
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode,
        };
    }
    if ('wheelDeltaX' in evt) {
        return {
            x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
            y: evt.wheelDeltaY / DELTA_SCALE.OTHERS,
        };
    }
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS,
    };
}var eventHandlers=/*#__PURE__*/Object.freeze({__proto__:null,keyboardHandler:keyboardHandler,mouseHandler:mouseHandler,resizeHandler:resizeHandler,selectHandler:selectHandler,touchHandler:touchHandler,wheelHandler:wheelHandler});// DO NOT use WeakMap here
// .getAll() methods requires `scrollbarMap.values()`
var scrollbarMap = new Map();
var Scrollbar = /** @class */ (function () {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */
        this.offset = {
            x: 0,
            y: 0,
        };
        /**
         * Max-allowed scrolling offsets
         */
        this.limit = {
            x: Infinity,
            y: Infinity,
        };
        /**
         * Container bounding rect
         */
        this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
        this._plugins = [];
        this._momentum = { x: 0, y: 0 };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new Options(options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '-1');
        setStyle(containerEl, {
            overflow: 'hidden',
            outline: 'none',
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) {
            containerEl.style.msTouchAction = 'none';
        }
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function (node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new TrackController(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = initPlugins(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true,
        });
        var global = window;
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
        // observe
        if (typeof MutationObserver === 'function') {
            this._observer = new MutationObserver(function () {
                _this.update();
            });
            this._observer.observe(contentEl, {
                subtree: true,
                childList: true,
            });
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function () {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */
        get: function () {
            var elem = this.containerEl.parentElement;
            while (elem) {
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) {
                    return parentScrollbar;
                }
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */
        get: function () {
            return this.offset.y;
        },
        set: function (y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */
        get: function () {
            return this.offset.x;
        },
        set: function (x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */
    Scrollbar.prototype.getSize = function () {
        return getSize(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */
    Scrollbar.prototype.update = function () {
        update(this);
        this._plugins.forEach(function (plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */
    Scrollbar.prototype.isVisible = function (elem) {
        return isVisible(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */
    Scrollbar.prototype.setPosition = function (x, y, options) {
        var _this = this;
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (options === void 0) { options = {}; }
        var status = setPosition(this, x, y);
        if (!status || options.withoutCallbacks) {
            return;
        }
        this._listeners.forEach(function (fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */
    Scrollbar.prototype.scrollTo = function (x, y, duration, options) {
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (duration === void 0) { duration = 0; }
        if (options === void 0) { options = {}; }
        scrollTo(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */
    Scrollbar.prototype.scrollIntoView = function (elem, options) {
        if (options === void 0) { options = {}; }
        scrollIntoView(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */
    Scrollbar.prototype.addListener = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        }
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */
    Scrollbar.prototype.removeListener = function (fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */
    Scrollbar.prototype.addTransformableMomentum = function (x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function (delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, { x: x, y: y });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) {
            this.addMomentum(finalDelta.x, finalDelta.y);
        }
        if (callback) {
            callback.call(this, willScroll);
        }
    };
    /**
     * Increases scrollbar's momentum
     */
    Scrollbar.prototype.addMomentum = function (x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */
    Scrollbar.prototype.setMomentum = function (x, y) {
        if (this.limit.x === 0) {
            x = 0;
        }
        if (this.limit.y === 0) {
            y = 0;
        }
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */
    Scrollbar.prototype.updatePluginOptions = function (pluginName, options) {
        this._plugins.forEach(function (plugin) {
            if (plugin.name === pluginName) {
                Object.assign(plugin.options, options);
            }
        });
    };
    Scrollbar.prototype.destroy = function () {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        clearEventsOn(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) {
            this._observer.disconnect();
        }
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
        childNodes.forEach(function (el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        setStyle(containerEl, {
            overflow: '',
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function (plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function () {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(eventHandlers).forEach(function (prop) {
            eventHandlers[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function (plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function () {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function (deltaX, deltaY) {
        if (deltaX === void 0) { deltaX = 0; }
        if (deltaY === void 0) { deltaY = 0; }
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling)
            return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) {
            this._updateDebounced();
        }
        var destX = clamp(deltaX + offset.x, 0, limit.x);
        var destY = clamp(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && (destX === offset.x);
        res = res && (destY === offset.y);
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function () {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = __assign({}, this._momentum);
        this._plugins.forEach(function (plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function (direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) {
            return {
                momentum: 0,
                position: current + remain,
            };
        }
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) {
            nextMomentum |= 0;
        }
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum,
        };
    };
    __decorate([
        debounce(100, { leading: true })
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}());var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) {
        document.head.appendChild(styleEl);
    }
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) {
        return;
    }
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var SmoothScrollbar = /** @class */ (function (_super) {
    __extends(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */
    SmoothScrollbar.init = function (elem, options) {
        if (!elem || elem.nodeType !== 1) {
            throw new TypeError("expect element to be DOM Element, but got " + elem);
        }
        // attach stylesheet
        attachStyle();
        if (scrollbarMap.has(elem)) {
            return scrollbarMap.get(elem);
        }
        return new Scrollbar(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */
    SmoothScrollbar.initAll = function (options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function (elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */
    SmoothScrollbar.has = function (elem) {
        return scrollbarMap.has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */
    SmoothScrollbar.get = function (elem) {
        return scrollbarMap.get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */
    SmoothScrollbar.getAll = function () {
        return Array.from(scrollbarMap.values());
    };
    /**
     * Removes scrollbar on the given element
     */
    SmoothScrollbar.destroy = function (elem) {
        var scrollbar = scrollbarMap.get(elem);
        if (scrollbar) {
            scrollbar.destroy();
        }
    };
    /**
     * Removes all scrollbar instances from current document
     */
    SmoothScrollbar.destroyAll = function () {
        scrollbarMap.forEach(function (scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */
    SmoothScrollbar.use = function () {
        var Plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Plugins[_i] = arguments[_i];
        }
        return addPlugins.apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */
    SmoothScrollbar.attachStyle = function () {
        return attachStyle();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */
    SmoothScrollbar.detachStyle = function () {
        return detachStyle();
    };
    SmoothScrollbar.version = "8.6.3";
    SmoothScrollbar.ScrollbarPlugin = ScrollbarPlugin;
    return SmoothScrollbar;
}(Scrollbar));var defaultOptions = {
  damping: 0.1,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
  delegateTo: null,
  plugins: {}
};var script = {
  name: 'SmoothScrollbar',
  // vue component name
  props: {
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      scrollbar: null
    };
  },
  mounted: function mounted() {
    this.scrollbar = SmoothScrollbar.init(this.$refs.scrollContainer, _objectSpread2(_objectSpread2({}, defaultOptions), this.options));
  },
  destroyed: function destroyed() {
    this.scrollbar.destroy();
    this.scrollbar = null;
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "scrollContainer",
    staticClass: "vue-smooth-scrollbar"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1d1aa579_0", {
    source: ".vue-smooth-scrollbar[data-v-1d1aa579]{width:100%;height:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-1d1aa579";
/* module identifier */

var __vue_module_identifier__ = "data-v-1d1aa579";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);

var component$1 = __vue_component__;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = component$1; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('SmoothScrollbar', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;