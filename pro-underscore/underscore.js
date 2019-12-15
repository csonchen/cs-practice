(function() {
    
    var root = this

    var previousUnderscore = root._

    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype

    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString
        hasOwnProperty = ObjProto.hasOwnProperty

    var nativeIsArray = Array.isArray
        nativeKeys = Object.keys
        nativeBind = FuncProto.bind
        nativeCreate = Object.create    
        
    var Ctor = function() {}

    var _ = function(obj) {
        if (obj instanceof _)
            return obj

        if (!(this instanceof _)) {
            return new _(obj)
        }
            
        this._wrapped = obj    
    }

    if (typeof exports !== 'undefnied') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _
        }
        exports._ = _
    } else {
        root._ = _
    }

    _.VERSION = '1.8.3'

    var optimizeCb = function(func, context, argCount) {
        if (context === void 0) {
            return func
        }

        switch (argCount == null ? 3 : argCount) {
            case 1: return function(value) {
                return func.call(context, value)
            }
            case 2: return function(value, other) {
                return func.call(context, value, other)
            }
            case 3: return function(value, index, collection) {
                return func.call(context, value, index, collection)
            }
            case 4: return function(accmulator, value, index, collection) {
                return func.call(context, accmulator, value, index, collection)
            }
        }

        return function() {
            return func.apply(context, arguments)
        }
    }

    var cb = function(value, context, argCount) {
        if (value == null) return _.identity
        if (_.isFunction(value)) return optimizeCb(value, context, argCount)
        if (_.isObject(value)) return _.matcher(value)
        return _.property(value)
    }

    _.iteratee = function(value, context) {
        return cb(value, context, Infinity)
    }

    var createAssigner = function(keysFunc, undefinedOnly) {
        return function(obj) {
            var length = arguments.length
            if (length < 2 || obj == null) return obj
        
            for (var index = 1; index < length; i++) {
                var source = arguments[index],
                    keys = keysFunc(source),
                    l = keys.length

                for (var i = 0; i < l; i++) {
                    var key = keys[i]
                    if (!undefinedOnly || obj[key] === void 0) {
                        obj[key] = source[key]
                    } 
                }    
            }

            return obj
        }
    }

    var baseCreate = function(prototype) {
        if (!_.isObject(prototype)) return {}

        if (nativeCreate) return nativeCreate(prototype)

        Ctor.prototype = prototype
        var result = new Ctor
        Ctor.prototype = null
        return result
    }

    var property = function(key) {
        return function(obj) {
            return obj == null ? void 0 : obj[key]
        }
    }
})()

