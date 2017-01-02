/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(38);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(6)
	  , redefine  = __webpack_require__(16)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(14)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(6)
	  , has       = __webpack_require__(17)
	  , SRC       = __webpack_require__(18)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(35)
	  , pIE      = __webpack_require__(36)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(25)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(34);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(24)
	  , arrayIndexOf = __webpack_require__(28)(false)
	  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(26);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(31);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys')
	  , uid    = __webpack_require__(18);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(39);
	var ReactDom = __webpack_require__(40);
	var button_1 = __webpack_require__(41);
	ReactDom.render(React.createElement(button_1.Button, { label: "Hello World!" }), document.getElementById('root'));

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BrowseButton = exports.IconButton = exports.Button = undefined;
	
	var _identifiers = __webpack_require__(42);
	
	var _reactCssThemr = __webpack_require__(43);
	
	var _Button = __webpack_require__(49);
	
	var _BrowseButton = __webpack_require__(56);
	
	var _IconButton = __webpack_require__(57);
	
	var _FontIcon = __webpack_require__(51);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _ripple = __webpack_require__(58);
	
	var _ripple2 = _interopRequireDefault(_ripple);
	
	var _theme = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./theme.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon2.default);
	var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon2.default);
	var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon2.default);
	var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
	var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);
	var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(BrowseButton);
	
	exports.default = ThemedButton;
	exports.Button = ThemedButton;
	exports.IconButton = ThemedIconButton;
	exports.BrowseButton = ThemedBrowseButton;

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_BAR = exports.APP_BAR = 'RTAppBar';
	var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
	var AVATAR = exports.AVATAR = 'RTAvatar';
	var BUTTON = exports.BUTTON = 'RTButton';
	var CARD = exports.CARD = 'RTCard';
	var CHIP = exports.CHIP = 'RTChip';
	var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
	var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
	var DIALOG = exports.DIALOG = 'RTDialog';
	var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
	var INPUT = exports.INPUT = 'RTInput';
	var LAYOUT = exports.LAYOUT = 'RTLayout';
	var LINK = exports.LINK = 'RTLink';
	var LIST = exports.LIST = 'RTList';
	var MENU = exports.MENU = 'RTMenu';
	var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
	var OVERLAY = exports.OVERLAY = 'RTOverlay';
	var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
	var RADIO = exports.RADIO = 'RTRadio';
	var RIPPLE = exports.RIPPLE = 'RTRipple';
	var SLIDER = exports.SLIDER = 'RTSlider';
	var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
	var SWITCH = exports.SWITCH = 'RTSwitch';
	var TABLE = exports.TABLE = 'RTTable';
	var TABS = exports.TABS = 'RTTabs';
	var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
	var TIME_PICKER = exports.TIME_PICKER = 'RTTimePicker';

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ThemeProvider = __webpack_require__(44);
	
	Object.defineProperty(exports, 'ThemeProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ThemeProvider).default;
	  }
	});
	
	var _themr = __webpack_require__(46);
	
	Object.defineProperty(exports, 'themr', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_themr).default;
	  }
	});
	Object.defineProperty(exports, 'themeable', {
	  enumerable: true,
	  get: function get() {
	    return _themr.themeable;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _class, _temp;
	
	var _react = __webpack_require__(39);
	
	var _themrShape = __webpack_require__(45);
	
	var _themrShape2 = _interopRequireDefault(_themrShape);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ThemeProvider = (_temp = _class = function (_Component) {
	  _inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    return {
	      themr: {
	        theme: this.props.theme
	      }
	    };
	  };
	
	  ThemeProvider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };
	
	  return ThemeProvider;
	}(_react.Component), _class.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  theme: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  theme: {}
	}, _class.childContextTypes = {
	  themr: _themrShape2.default.isRequired
	}, _temp);
	exports.default = ThemeProvider;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(39);
	
	exports.default = _react.PropTypes.shape({
	  theme: _react.PropTypes.object.isRequired
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.themeable = themeable;
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(47);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @typedef {Object.<string, TReactCSSThemrTheme>} TReactCSSThemrTheme
	 */
	
	/**
	 * @typedef {{}} TReactCSSThemrOptions
	 * @property {String|Boolean} [composeTheme=COMPOSE_DEEPLY]
	 * @property {Boolean} [withRef=false]
	 */
	
	var COMPOSE_DEEPLY = 'deeply';
	var COMPOSE_SOFTLY = 'softly';
	var DONT_COMPOSE = false;
	
	var DEFAULT_OPTIONS = {
	  composeTheme: COMPOSE_DEEPLY,
	  withRef: false
	};
	
	var THEMR_CONFIG = typeof Symbol !== 'undefined' ? Symbol('THEMR_CONFIG') : '__REACT_CSS_THEMR_CONFIG__';
	
	/**
	 * Themr decorator
	 * @param {String|Number|Symbol} componentName - Component name
	 * @param {TReactCSSThemrTheme} [localTheme] - Base theme
	 * @param {{}} [options] - Themr options
	 * @returns {function(ThemedComponent:Function):Function} - ThemedComponent
	 */
	
	exports.default = function (componentName, localTheme) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return function (ThemedComponent) {
	    var _class, _temp;
	
	    var _DEFAULT_OPTIONS$opti = _extends({}, DEFAULT_OPTIONS, options),
	        optionComposeTheme = _DEFAULT_OPTIONS$opti.composeTheme,
	        optionWithRef = _DEFAULT_OPTIONS$opti.withRef;
	
	    validateComposeOption(optionComposeTheme);
	
	    var config = ThemedComponent[THEMR_CONFIG];
	    if (config && config.componentName === componentName) {
	      config.localTheme = themeable(config.localTheme, localTheme);
	      return ThemedComponent;
	    }
	
	    config = {
	      componentName: componentName,
	      localTheme: localTheme
	    };
	
	    /**
	     * @property {{wrappedInstance: *}} refs
	     */
	    var Themed = (_temp = _class = function (_Component) {
	      _inherits(Themed, _Component);
	
	      function Themed() {
	        _classCallCheck(this, Themed);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));
	
	        _this.theme_ = _this.calcTheme(_this.props);
	        return _this;
	      }
	
	      Themed.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(optionWithRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the third argument of the themr() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Themed.prototype.getNamespacedTheme = function getNamespacedTheme(props) {
	        var themeNamespace = props.themeNamespace,
	            theme = props.theme;
	
	        if (!themeNamespace) return theme;
	        if (themeNamespace && !theme) throw new Error('Invalid themeNamespace use in react-css-themr. ' + 'themeNamespace prop should be used only with theme prop.');
	
	        return Object.keys(theme).filter(function (key) {
	          return key.startsWith(themeNamespace);
	        }).reduce(function (result, key) {
	          var _extends2;
	
	          return _extends({}, result, (_extends2 = {}, _extends2[removeNamespace(key, themeNamespace)] = theme[key], _extends2));
	        }, {});
	      };
	
	      Themed.prototype.getThemeNotComposed = function getThemeNotComposed(props) {
	        if (props.theme) return this.getNamespacedTheme(props);
	        if (config.localTheme) return config.localTheme;
	        return this.getContextTheme();
	      };
	
	      Themed.prototype.getContextTheme = function getContextTheme() {
	        return this.context.themr ? this.context.themr.theme[config.componentName] : {};
	      };
	
	      Themed.prototype.getTheme = function getTheme(props) {
	        return props.composeTheme === COMPOSE_SOFTLY ? _extends({}, this.getContextTheme(), config.localTheme, this.getNamespacedTheme(props)) : themeable(themeable(this.getContextTheme(), config.localTheme), this.getNamespacedTheme(props));
	      };
	
	      Themed.prototype.calcTheme = function calcTheme(props) {
	        var composeTheme = props.composeTheme;
	
	        return composeTheme ? this.getTheme(props) : this.getThemeNotComposed(props);
	      };
	
	      Themed.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (nextProps.composeTheme !== this.props.composeTheme || nextProps.theme !== this.props.theme || nextProps.themeNamespace !== this.props.themeNamespace) {
	          this.theme_ = this.calcTheme(nextProps);
	        }
	      };
	
	      Themed.prototype.render = function render() {
	        var renderedElement = void 0;
	        //exclude themr-only props
	        //noinspection JSUnusedLocalSymbols
	
	        var _props = this.props,
	            composeTheme = _props.composeTheme,
	            themeNamespace = _props.themeNamespace,
	            props = _objectWithoutProperties(_props, ['composeTheme', 'themeNamespace']); //eslint-disable-line no-unused-vars
	
	        if (optionWithRef) {
	          renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, props, {
	            ref: 'wrappedInstance',
	            theme: this.theme_
	          }));
	        } else {
	          renderedElement = _react2.default.createElement(ThemedComponent, _extends({}, props, {
	            theme: this.theme_
	          }));
	        }
	
	        return renderedElement;
	      };
	
	      return Themed;
	    }(_react.Component), _class.displayName = 'Themed' + ThemedComponent.name, _class.contextTypes = {
	      themr: _react.PropTypes.object
	    }, _class.propTypes = _extends({}, ThemedComponent.propTypes, {
	      composeTheme: _react.PropTypes.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
	      theme: _react.PropTypes.object,
	      themeNamespace: _react.PropTypes.string
	    }), _class.defaultProps = _extends({}, ThemedComponent.defaultProps, {
	      composeTheme: optionComposeTheme
	    }), _temp);
	
	
	    Themed[THEMR_CONFIG] = config;
	
	    return Themed;
	  };
	};
	
	/**
	 * Merges two themes by concatenating values with the same keys
	 * @param {TReactCSSThemrTheme} [original] - Original theme object
	 * @param {TReactCSSThemrTheme} [mixin] - Mixing theme object
	 * @returns {TReactCSSThemrTheme} - Merged resulting theme
	 */
	
	
	function themeable() {
	  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var mixin = arguments[1];
	
	  //don't merge if no mixin is passed
	  if (!mixin) return original;
	
	  //merge themes by concatenating values with the same keys
	  return Object.keys(mixin).reduce(
	
	  //merging reducer
	  function (result, key) {
	    var _extends3;
	
	    var originalValue = original[key];
	    var mixinValue = mixin[key];
	
	    var newValue = void 0;
	
	    //check if values are nested objects
	    if ((typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) === 'object' && (typeof mixinValue === 'undefined' ? 'undefined' : _typeof(mixinValue)) === 'object') {
	      //go recursive
	      newValue = themeable(originalValue, mixinValue);
	    } else {
	      //either concat or take mixin value
	      newValue = originalValue ? originalValue + ' ' + mixinValue : mixinValue;
	    }
	
	    return _extends({}, result, (_extends3 = {}, _extends3[key] = newValue, _extends3));
	  },
	
	  //use original theme as an acc
	  original);
	}
	
	/**
	 * Validates compose option
	 * @param {String|Boolean} composeTheme - Compose them option
	 * @throws
	 * @returns {undefined}
	 */
	function validateComposeOption(composeTheme) {
	  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
	    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
	  }
	}
	
	/**
	 * Removes namespace from key
	 * @param {String} key - Key
	 * @param {String} themeNamespace - Theme namespace
	 * @returns {String} - Key
	 */
	function removeNamespace(key, themeNamespace) {
	  var capitalized = key.substr(themeNamespace.length);
	  return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ },
/* 48 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Button = exports.buttonFactory = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(50);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(43);
	
	var _identifiers = __webpack_require__(42);
	
	var _FontIcon = __webpack_require__(51);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Ripple = __webpack_require__(52);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var factory = function factory(ripple, FontIcon) {
	  var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, Button);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(Button, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;
	
	        var _props = this.props,
	            accent = _props.accent,
	            children = _props.children,
	            className = _props.className,
	            flat = _props.flat,
	            floating = _props.floating,
	            href = _props.href,
	            icon = _props.icon,
	            inverse = _props.inverse,
	            label = _props.label,
	            mini = _props.mini,
	            neutral = _props.neutral,
	            primary = _props.primary,
	            theme = _props.theme,
	            type = _props.type,
	            raised = _props.raised,
	            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'theme', 'type', 'raised']);
	
	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';
	
	        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
	
	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          type: !href ? type : null,
	          'data-react-toolbox': 'button'
	        });
	
	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
	      }
	    }]);
	
	    return Button;
	  }(_react.Component);
	
	  Button.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    flat: _react.PropTypes.bool,
	    floating: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    mini: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    theme: _react.PropTypes.shape({
	      accent: _react.PropTypes.string,
	      button: _react.PropTypes.string,
	      flat: _react.PropTypes.string,
	      floating: _react.PropTypes.string,
	      icon: _react.PropTypes.string,
	      inverse: _react.PropTypes.string,
	      mini: _react.PropTypes.string,
	      neutral: _react.PropTypes.string,
	      primary: _react.PropTypes.string,
	      raised: _react.PropTypes.string,
	      rippleWrapper: _react.PropTypes.string,
	      toggle: _react.PropTypes.string
	    }),
	    type: _react.PropTypes.string
	  };
	  Button.defaultProps = {
	    accent: false,
	    className: '',
	    flat: false,
	    floating: false,
	    mini: false,
	    neutral: true,
	    primary: false,
	    raised: false,
	    type: 'button'
	  };
	
	
	  return ripple(Button);
	};
	
	var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
	exports.buttonFactory = factory;
	exports.Button = Button;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FontIcon = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(50);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FontIcon = function FontIcon(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      value = _ref.value,
	      other = _objectWithoutProperties(_ref, ['children', 'className', 'value']);
	
	  return _react2.default.createElement(
	    'span',
	    _extends({
	      'data-react-toolbox': 'font-icon',
	      className: (0, _classnames2.default)({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)
	    }, other),
	    value,
	    children
	  );
	};
	
	FontIcon.propTypes = {
	  children: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	};
	
	FontIcon.defaultProps = {
	  className: ''
	};
	
	exports.default = FontIcon;
	exports.FontIcon = FontIcon;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(40);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames2 = __webpack_require__(50);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _immutabilityHelper = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"immutability-helper\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);
	
	var _reactCssThemr = __webpack_require__(43);
	
	var _identifiers = __webpack_require__(42);
	
	var _events = __webpack_require__(53);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _prefixer = __webpack_require__(54);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(55);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaults = {
	  centered: false,
	  className: '',
	  multiple: true,
	  spread: 2,
	  theme: {}
	};
	
	var rippleFactory = function rippleFactory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _defaults$options = _extends({}, defaults, options),
	      defaultCentered = _defaults$options.centered,
	      defaultClassName = _defaults$options.className,
	      defaultMultiple = _defaults$options.multiple,
	      defaultSpread = _defaults$options.spread,
	      defaultTheme = _defaults$options.theme,
	      props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'multiple', 'spread', 'theme']);
	
	  return function (ComposedComponent) {
	    var RippledComponent = function (_Component) {
	      _inherits(RippledComponent, _Component);
	
	      function RippledComponent() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, RippledComponent);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippledComponent.__proto__ || Object.getPrototypeOf(RippledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	          ripples: {}
	        }, _this.handleMouseDown = function (event) {
	          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	          if (!_this.props.disabled) {
	            var _events$getMousePosit = _events2.default.getMousePosition(event),
	                x = _events$getMousePosit.x,
	                y = _events$getMousePosit.y;
	
	            _this.animateRipple(x, y, false);
	          }
	        }, _this.handleTouchStart = function (event) {
	          if (_this.props.onTouchStart) _this.props.onTouchStart(event);
	          if (!_this.props.disabled) {
	            var _events$getTouchPosit = _events2.default.getTouchPosition(event),
	                x = _events$getTouchPosit.x,
	                y = _events$getTouchPosit.y;
	
	            _this.animateRipple(x, y, true);
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(RippledComponent, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	          // If a new ripple was just added, add a remove event listener to its animation
	          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
	            this.addRippleRemoveEventListener(this.getLastKey());
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          var _this2 = this;
	
	          // Remove document event listeners for ripple if they still exists
	          Object.keys(this.state.ripples).forEach(function (key) {
	            _this2.state.ripples[key].endRipple();
	          });
	        }
	
	        /**
	         * Add an event listener to the reference with given key so when the animation transition
	         * ends we can be sure that it finished and it can be safely removed from the state.
	         * This function is called whenever a new ripple is added to the component.
	         *
	         * @param {String} rippleKey Is the key of the ripple to add the event.
	         */
	
	      }, {
	        key: 'addRippleRemoveEventListener',
	        value: function addRippleRemoveEventListener(rippleKey) {
	          var self = this;
	          _events2.default.addEventListenerOnTransitionEnded(this.refs[rippleKey], function onOpacityEnd(e) {
	            if (e.propertyName === 'opacity') {
	              if (self.props.onRippleEnded) self.props.onRippleEnded(e);
	              _events2.default.removeEventListenerOnTransitionEnded(self.refs[rippleKey], onOpacityEnd);
	              self.setState({ ripples: _utils2.default.removeObjectKey(rippleKey, self.state.ripples) });
	            }
	          });
	        }
	
	        /**
	         * Start a ripple animation on an specific point with touch or mouse events. First
	         * decides if the animation should trigger. If the ripple is multiple or there is no
	         * ripple present, it creates a new key. If it's a simple ripple and already exists,
	         * it just restarts the current ripple. The animation happens in two state changes
	         * to allow triggering via css.
	         *
	         * @param {Number} x Coordinate X on the screen where animation should start
	         * @param {Number} y Coordinate Y on the screen where animation should start
	         * @param {Boolean} isTouch Use events from touch or mouse.
	         */
	
	      }, {
	        key: 'animateRipple',
	        value: function animateRipple(x, y, isTouch) {
	          var _this3 = this;
	
	          if (this.rippleShouldTrigger(isTouch)) {
	            (function () {
	              var _getDescriptor = _this3.getDescriptor(x, y),
	                  top = _getDescriptor.top,
	                  left = _getDescriptor.left,
	                  width = _getDescriptor.width;
	
	              var noRipplesActive = Object.keys(_this3.state.ripples).length === 0;
	              var key = _this3.props.rippleMultiple || noRipplesActive ? _this3.getNextKey() : _this3.getLastKey();
	              var endRipple = _this3.addRippleDeactivateEventListener(isTouch, key);
	              var initialState = { active: false, restarting: true, top: top, left: left, width: width, endRipple: endRipple };
	              var runningState = { active: true, restarting: false };
	              _this3.setState((0, _immutabilityHelper2.default)(_this3.state, { ripples: _defineProperty({}, key, { $set: initialState }) }), function () {
	                _this3.refs[key].offsetWidth; //eslint-disable-line no-unused-expressions
	                _this3.setState((0, _immutabilityHelper2.default)(_this3.state, { ripples: _defineProperty({}, key, { $merge: runningState }) }));
	              });
	            })();
	          }
	        }
	
	        /**
	         * Determine if a ripple should start depending if its a touch event. For mobile both
	         * touchStart and mouseDown are launched so in case is touch we should always trigger
	         * but if its not we should check if a touch was already triggered to decide.
	         *
	         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
	         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
	         */
	
	      }, {
	        key: 'rippleShouldTrigger',
	        value: function rippleShouldTrigger(isTouch) {
	          var shouldStart = isTouch ? true : !this.touchCache;
	          this.touchCache = isTouch;
	          return shouldStart;
	        }
	
	        /**
	         * Find out a descriptor object for the ripple element being created depending on
	         * the position where the it was triggered and the component's dimensions.
	         *
	         * @param {Number} x Coordinate x in the viewport where ripple was triggered
	         * @param {Number} y Coordinate y in the viewport where ripple was triggered
	         * @return {Object} Descriptor element including position and size of the element
	         */
	
	      }, {
	        key: 'getDescriptor',
	        value: function getDescriptor(x, y) {
	          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
	              left = _ReactDOM$findDOMNode.left,
	              top = _ReactDOM$findDOMNode.top,
	              height = _ReactDOM$findDOMNode.height,
	              width = _ReactDOM$findDOMNode.width;
	
	          var _props = this.props,
	              centered = _props.rippleCentered,
	              spread = _props.rippleSpread;
	
	          return {
	            left: centered ? 0 : x - left - width / 2,
	            top: centered ? 0 : y - top - height / 2,
	            width: width * spread
	          };
	        }
	
	        /**
	         * Increments and internal counter and returns the next value as a string. It
	         * is used to assign key references to new ripple elements.
	         *
	         * @return {String} Key to be assigned to a ripple.
	         */
	
	      }, {
	        key: 'getNextKey',
	        value: function getNextKey() {
	          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
	          return 'ripple' + this.currentCount;
	        }
	
	        /**
	         * Return the last generated key for a ripple element. When there is only one ripple
	         * and to get the reference when a ripple was just created.
	         *
	         * @return {String} The last generated ripple key.
	         */
	
	      }, {
	        key: 'getLastKey',
	        value: function getLastKey() {
	          return 'ripple' + this.currentCount;
	        }
	
	        /**
	         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
	         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
	         * ending function is created from a factory function and returned.
	         *
	         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
	         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
	         * @return {Function} Callback function that deactivates the ripple and removes the event listener
	         */
	
	      }, {
	        key: 'addRippleDeactivateEventListener',
	        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
	          var eventType = isTouch ? 'touchend' : 'mouseup';
	          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
	          document.addEventListener(eventType, endRipple);
	          return endRipple;
	        }
	
	        /**
	         * Generates a function that can be called to deactivate a given ripple and remove its finishing
	         * event listener. If is generated because we need to store it to be called on unmount in case
	         * the ripple is still running.
	         *
	         * @param {String} eventType Is the event type that can be touchend or mouseup
	         * @param {String} rippleKey Is the key representing the ripple
	         * @return {Function} Callback function that deactivates the ripple and removes the listener
	         */
	
	      }, {
	        key: 'createRippleDeactivateCallback',
	        value: function createRippleDeactivateCallback(eventType, rippleKey) {
	          var self = this;
	          return function endRipple() {
	            document.removeEventListener(eventType, endRipple);
	            self.setState({ ripples: (0, _immutabilityHelper2.default)(self.state.ripples, _defineProperty({}, rippleKey, { $merge: { active: false } })) });
	          };
	        }
	      }, {
	        key: 'renderRipple',
	        value: function renderRipple(key, className, _ref2) {
	          var _classnames;
	
	          var active = _ref2.active,
	              left = _ref2.left,
	              restarting = _ref2.restarting,
	              top = _ref2.top,
	              width = _ref2.width;
	
	          var scale = restarting ? 0 : 1;
	          var transform = 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')';
	          var _className = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);
	          return _react2.default.createElement(
	            'span',
	            _extends({ key: key, 'data-react-toolbox': 'ripple', className: this.props.theme.rippleWrapper }, props),
	            _react2.default.createElement('span', {
	              role: 'ripple',
	              ref: key,
	              className: _className,
	              style: (0, _prefixer2.default)({ transform: transform }, { width: width, height: width })
	            })
	          );
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this4 = this;
	
	          var ripples = this.state.ripples;
	
	          var _props2 = this.props,
	              onRippleEnded = _props2.onRippleEnded,
	              rippleCentered = _props2.rippleCentered,
	              rippleMultiple = _props2.rippleMultiple,
	              rippleSpread = _props2.rippleSpread,
	              children = _props2.children,
	              ripple = _props2.ripple,
	              rippleClassName = _props2.rippleClassName,
	              other = _objectWithoutProperties(_props2, ['onRippleEnded', 'rippleCentered', 'rippleMultiple', 'rippleSpread', 'children', 'ripple', 'rippleClassName']);
	
	          if (!ripple) return _react2.default.createElement(ComposedComponent, _extends({ children: children }, other));
	          return _react2.default.createElement(
	            ComposedComponent,
	            _extends({}, other, { onMouseDown: this.handleMouseDown, onTouchStart: this.handleTouchStart }),
	            children,
	            Object.keys(ripples).map(function (key) {
	              return _this4.renderRipple(key, rippleClassName, ripples[key]);
	            })
	          );
	        }
	      }]);
	
	      return RippledComponent;
	    }(_react.Component);
	
	    RippledComponent.propTypes = {
	      children: _react.PropTypes.any,
	      disabled: _react.PropTypes.bool,
	      onRippleEnded: _react.PropTypes.func,
	      ripple: _react.PropTypes.bool,
	      rippleCentered: _react.PropTypes.bool,
	      rippleClassName: _react.PropTypes.string,
	      rippleMultiple: _react.PropTypes.bool,
	      rippleSpread: _react.PropTypes.number,
	      theme: _react.PropTypes.shape({
	        ripple: _react.PropTypes.string,
	        rippleActive: _react.PropTypes.string,
	        rippleRestarting: _react.PropTypes.string,
	        rippleWrapper: _react.PropTypes.string
	      })
	    };
	    RippledComponent.defaultProps = {
	      disabled: false,
	      ripple: true,
	      rippleCentered: defaultCentered,
	      rippleClassName: defaultClassName,
	      rippleMultiple: defaultMultiple,
	      rippleSpread: defaultSpread
	    };
	
	
	    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
	  };
	};
	
	exports.default = rippleFactory;

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  getMousePosition: function getMousePosition(event) {
	    return {
	      x: event.pageX - (window.scrollX || window.pageXOffset),
	      y: event.pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  getTouchPosition: function getTouchPosition(event) {
	    return {
	      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
	      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  pauseEvent: function pauseEvent(event) {
	    event.stopPropagation();
	    event.preventDefault();
	  },
	  addEventsToDocument: function addEventsToDocument(eventMap) {
	    for (var key in eventMap) {
	      document.addEventListener(key, eventMap[key], false);
	    }
	  },
	  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
	    for (var key in eventMap) {
	      document.removeEventListener(key, eventMap[key], false);
	    }
	  },
	  targetIsDescendant: function targetIsDescendant(event, parent) {
	    var node = event.target;
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	    return false;
	  },
	  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.addEventListener(eventName, fn);
	    return true;
	  },
	  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element, fn) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.removeEventListener(eventName, fn);
	    return true;
	  }
	};
	
	
	var TRANSITIONS = {
	  'transition': 'transitionend',
	  'OTransition': 'oTransitionEnd',
	  'MozTransition': 'transitionend',
	  'WebkitTransition': 'webkitTransitionEnd'
	};
	
	function transitionEventNamesFor(element) {
	  for (var transition in TRANSITIONS) {
	    if (element && element.style[transition] !== undefined) {
	      return TRANSITIONS[transition];
	    }
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var WEBKIT = 'Webkit';
	var MICROSOFT = 'Ms';
	
	var properties = {
	  transform: [WEBKIT, MICROSOFT]
	};
	
	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.substr(1);
	}
	
	function getPrefixes(property, value) {
	  return properties[property].reduce(function (acc, item) {
	    acc['' + item + capitalize(property)] = value;
	    return acc;
	  }, {});
	}
	
	function addPrefixesTo(style, property, value) {
	  var vendor = getPrefixes(property, value);
	  for (var prefix in vendor) {
	    style[prefix] = vendor[prefix];
	  }
	
	  return style;
	}
	
	function prefixer(style) {
	  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var _style = defaultValue;
	  for (var property in style) {
	    _style[property] = style[property];
	    if (properties[property]) {
	      addPrefixesTo(_style, property, style[property]);
	    }
	  }
	
	  return _style;
	}
	
	exports.default = prefixer;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  angleFromPositions: function angleFromPositions(cx, cy, ex, ey) {
	    var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
	    return theta * 180 / Math.PI;
	  },
	  angle360FromPositions: function angle360FromPositions(cx, cy, ex, ey) {
	    var angle = this.angleFromPositions(cx, cy, ex, ey);
	    return angle < 0 ? 360 + angle : angle;
	  },
	  range: function range() {
	    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	    var _start = 0,
	        _stop = start;
	
	    if (stop !== null) {
	      _start = start;
	      _stop = stop;
	    }
	    var length = Math.max(Math.ceil((_stop - _start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, _start += step) {
	      range[idx] = _start;
	    }
	
	    return range;
	  },
	  round: function round(number, decimals) {
	    if (!isNaN(parseFloat(number)) && isFinite(number)) {
	      var decimalPower = Math.pow(10, decimals);
	      return Math.round(parseFloat(number) * decimalPower) / decimalPower;
	    }
	    return NaN;
	  },
	  getViewport: function getViewport() {
	    return {
	      height: window.innerHeight || document.documentElement.offsetHeight,
	      width: window.innerWidth || document.documentElement.offsetWidth
	    };
	  },
	  cloneObject: function cloneObject(object) {
	    return JSON.parse(JSON.stringify(object));
	  },
	  inputTypeForPrototype: function inputTypeForPrototype(prototype) {
	    if (prototype === Date) return 'date';
	    if (prototype === Number) return 'number';
	    if (prototype === Boolean) return 'checkbox';
	    return 'text';
	  },
	  prepareValueForInput: function prepareValueForInput(value, type) {
	    if (type === 'date') return new Date(value).toISOString().slice(0, 10);
	    if (type === 'checkbox') {
	      return value ? 'on' : '';
	    }
	    return value;
	  },
	  removeObjectKey: function removeObjectKey(key, object) {
	    var newObject = {};
	    Object.keys(object).filter(function (k) {
	      return k !== key;
	    }).forEach(function (k) {
	      newObject[k] = object[k];
	    });
	    return newObject;
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BrowseButton = exports.browseButtonFactory = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(50);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(43);
	
	var _identifiers = __webpack_require__(42);
	
	var _FontIcon = __webpack_require__(51);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Ripple = __webpack_require__(52);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var factory = function factory(ripple, FontIcon) {
	  var SimpleBrowseButton = function (_Component) {
	    _inherits(SimpleBrowseButton, _Component);
	
	    function SimpleBrowseButton() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, SimpleBrowseButton);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBrowseButton.__proto__ || Object.getPrototypeOf(SimpleBrowseButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.label.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.label.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _this.handleFileChange = function (event) {
	        if (_this.props.onChange) _this.props.onChange(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(SimpleBrowseButton, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;
	
	        var _props = this.props,
	            accent = _props.accent,
	            children = _props.children,
	            className = _props.className,
	            flat = _props.flat,
	            floating = _props.floating,
	            icon = _props.icon,
	            inverse = _props.inverse,
	            label = _props.label,
	            mini = _props.mini,
	            neutral = _props.neutral,
	            primary = _props.primary,
	            theme = _props.theme,
	            raised = _props.raised,
	            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'theme', 'raised']);
	
	        var element = 'label';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';
	
	        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
	
	        var props = _extends({}, others, {
	          ref: 'label',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          'data-react-toolbox': 'label'
	        });
	
	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement(
	          'span',
	          null,
	          label
	        ), _react2.default.createElement('input', { className: classes, type: 'file', onChange: this.handleFileChange }), children);
	      }
	    }]);
	
	    return SimpleBrowseButton;
	  }(_react.Component);
	
	  SimpleBrowseButton.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    flat: _react.PropTypes.bool,
	    floating: _react.PropTypes.bool,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    mini: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    theme: _react.PropTypes.shape({
	      accent: _react.PropTypes.string,
	      button: _react.PropTypes.string,
	      flat: _react.PropTypes.string,
	      floating: _react.PropTypes.string,
	      icon: _react.PropTypes.string,
	      inverse: _react.PropTypes.string,
	      mini: _react.PropTypes.string,
	      neutral: _react.PropTypes.string,
	      primary: _react.PropTypes.string,
	      raised: _react.PropTypes.string,
	      rippleWrapper: _react.PropTypes.string,
	      toggle: _react.PropTypes.string
	    }),
	    type: _react.PropTypes.string
	  };
	  SimpleBrowseButton.defaultProps = {
	    accent: false,
	    className: '',
	    flat: false,
	    floating: false,
	    mini: false,
	    neutral: true,
	    primary: false,
	    raised: false
	  };
	
	
	  return ripple(SimpleBrowseButton);
	};
	
	var BrowseButton = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);
	exports.browseButtonFactory = factory;
	exports.BrowseButton = BrowseButton;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.iconButtonFactory = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(39);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(50);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(43);
	
	var _identifiers = __webpack_require__(42);
	
	var _FontIcon = __webpack_require__(51);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Ripple = __webpack_require__(52);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var factory = function factory(ripple, FontIcon) {
	  var IconButton = function (_Component) {
	    _inherits(IconButton, _Component);
	
	    function IconButton() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, IconButton);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(IconButton, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;
	
	        var _props = this.props,
	            accent = _props.accent,
	            children = _props.children,
	            className = _props.className,
	            href = _props.href,
	            icon = _props.icon,
	            inverse = _props.inverse,
	            neutral = _props.neutral,
	            primary = _props.primary,
	            theme = _props.theme,
	            type = _props.type,
	            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme', 'type']);
	
	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
	
	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          type: !href ? type : null,
	          'data-react-toolbox': 'button'
	        });
	
	        return _react2.default.createElement(element, props, icon ? typeof icon === 'string' ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : icon : null, children);
	      }
	    }]);
	
	    return IconButton;
	  }(_react.Component);
	
	  IconButton.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    theme: _react.PropTypes.object,
	    type: _react.PropTypes.string
	  };
	  IconButton.defaultProps = {
	    accent: false,
	    className: '',
	    neutral: true,
	    primary: false,
	    type: 'button'
	  };
	
	
	  return ripple(IconButton);
	};
	
	var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
	exports.iconButtonFactory = factory;
	exports.IconButton = IconButton;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Ripple = __webpack_require__(52);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	var _theme = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./theme.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (options) {
	  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map