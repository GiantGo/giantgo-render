export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export function isDefined(value) {
  return typeof value !== 'undefined'
}

export function isEmptyObject(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}

export function isPrimitive(val) {
  return !['object', 'function'].includes(typeof val) || val === null
}

export function hasOwn(obj, key) {
  return Object.hasOwnProperty.call(obj, key)
}

/**
 *
 * @param time
 * @param format "yyyy-MM-dd hh:mm:ss"
 * @returns {*}
 */
export function parseTime(time, format = 'yyyy-MM-dd hh:mm:ss') {
  if (arguments.length === 0) {
    return null
  }

  if (!time) {
    return time
  }

  let date

  if (isObject(time)) {
    date = time
  } else if (isString(time)) {
    date = new Date(time)
  } else if (isNumber(time)) {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }

  const o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds()
    // millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (!isObject(target)) {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property]
    if (isObject(sourceProperty)) {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

export function debounce(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout

  // Calling debounce returns a new anonymous function
  return function () {
    // reference the context and args for the setTimeout function
    var context = this,
      args = arguments

    // Should the function be called now? If immediate is true
    //   and not already in a timeout then the answer is: Yes
    var callNow = immediate && !timeout

    // This is the basic debounce behaviour where you can call this
    //   function several times, but it will only execute once
    //   [before or after imposing a delay].
    //   Each time the returned function is called, the timer starts over.
    clearTimeout(timeout)

    // Set the new timeout
    timeout = setTimeout(function () {
      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null

      // Check if the function already ran with the immediate flag
      if (!immediate) {
        // Call the original function with apply
        // apply lets you define the 'this' object as well as the arguments
        //    (both captured before setTimeout)
        func.apply(context, args)
      }
    }, wait)

    // Immediate mode and no wait timer? Execute the function..
    if (callNow) func.apply(context, args)
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 */
export function deepClone(item) {
  if (!item) {
    return item
  } // null, undefined values check

  var types = [Number, String, Boolean],
    result

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item)
    }
  })

  if (typeof result == 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = []
      item.forEach(function (child, index, array) {
        result[index] = deepClone(child)
      })
    } else if (typeof item == 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == 'function') {
        result = item.cloneNode(true)
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item)
        } else {
          // it is an object literal
          result = {}
          for (var i in item) {
            result[i] = deepClone(item[i])
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor()
        } else {
          result = item
        }
      }
    } else {
      result = item
    }
  }

  return result
}

export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

export function textToHtml(str) {
  return str.replace(new RegExp(' ', 'gm'), '&nbsp;').replace(/\n|\r\n/g, '<br />')
}

export function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = []
  var i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    // rfc4122, version 4 form
    var r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}
