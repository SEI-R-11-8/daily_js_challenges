const {
  sayHello,
  addOne,
  addTwoNumbers,
  sumNumbers,
  addList,
  computeRemainder,
  range,
  reverseUpcaseString,
  removeEnds,
  charCount,
  formatWithPadding
} = require('../challenges')

describe('00-sayHello', function () {
  it("returns 'Hello!'", function () {
    expect(sayHello()).toBe('Hello!')
  })
})


describe('01-addOne', function () {
  it('works with negative numbers', function () {
    expect(addOne(-5)).toBe(-4)
  })
  it('works with positive numbers', function () {
    expect(addOne(1)).toBe(2)
  })
})


describe('02-addTwoNumbers', function () {
  it('adds 5 and 10', function () {
    expect(addTwoNumbers(5, 10)).toBe(15)
  })
  it('adds 10 and negative 2', function () {
    expect(addTwoNumbers(10, -2)).toBe(8)
  })
  it('adds 0 and 0', function () {
    expect(addTwoNumbers(0, 0)).toBe(0)
  })
  it('returns NaN appropriately', function () {
    expect(addTwoNumbers('Hello', 5)).toBeNaN()
  })
})


describe('03-sumNumbers', function () {
  it('sums array of one num', function () {
    expect(sumNumbers([10])).toBe(10)
  })
  it('sums array of two nums', function () {
    expect(sumNumbers([5, 10])).toBe(15)
  })
  it('sums_array_of_three_nums', function () {
    expect(sumNumbers([2, 10, -5])).toBe(7)
  })
  it('sums_empty_array', function () {
    expect(sumNumbers([])).toBe(0)
  })
})

describe('04-addList', function () {
  it('returns 0 with no args', function () {
    expect(addList()).toBe(0)
  })
  it('adds list of numbers', function () {
    expect(addList(2, 7)).toBe(9)
    expect(addList(0, 7, -1)).toBe(6)
  })
})




describe('05-computeRemainder', function () {
  it('returns infinity', function () {
    expect(computeRemainder(4, 0)).toBe(Infinity)
  })
  it('computes remainder', function () {
    expect(computeRemainder(10, 2)).toBe(0)
    expect(computeRemainder(10, 3)).toBe(1)
    expect(computeRemainder(10.5, 3)).toBe(1.5)
  })
})

function computeRemainder(n1, n2) {
  if (n2 === 0) return Infinity
  return n1 - Math.floor(n1 / n2) * n2
}



describe('06-range', function () {
  it('returns msg if first arg not smaller', function () {
    expect(range(5, 2)).toBe('First argument must be less than second')
  })
  it('returns appropriate array of nums', function () {
    expect(range(1, 4)).toEqual([1, 2, 3])
    expect(range(1, 1)).toEqual([])
    expect(range(-2, 3)).toEqual([-2, -1, 0, 1, 2])
  })
})

function range(start, finish) {
  if (start > finish) return 'First argument must be less than second'

  var range = []
  for (var n = start; n < finish; n++) {
    range.push(n)
  }

  return range
}

describe('07-reverseUpcaseString', function () {
  it('returns string reversed and upcased', function () {
    expect(reverseUpcaseString('SEI Rocks!')).toBe('!SKCOR IES')
  })
})

function reverseUpcaseString(str) {
  var results = ''
  for (var i = 0; i < str.length; i++) {
    // can use square brackets to access chars in a string
    // but using the charAt() method is preferred
    results = str.charAt(i).toUpperCase() + results
  }
  return results
}


describe('08-removeEnds', function () {
  it('returns empty string when length less than 3', function () {
    expect(removeEnds('a')).toBe('')
  })
  it('removes the ends', function () {
    expect(removeEnds('abc')).toBe('b')
    expect(removeEnds('123456789')).toBe('2345678')
  })
})

function removeEnds(str) {
  if (str.length < 3) return ''
  var result = ''
  for (var i = 1; i < str.length - 1; i++) {
    result += str.charAt(i)
  }
  return result
}


describe('09-charCount', function () {
  it('returns an object', function () {
    expect(typeof charCount('abc')).toBe('object')
  })
  it('properly counts the chars', function () {
    expect(charCount('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 })
    expect(charCount('Today is fantastic!')).toEqual({
      T: 1,
      o: 1,
      d: 1,
      a: 3,
      y: 1,
      ' ': 2,
      i: 2,
      s: 2,
      f: 1,
      n: 1,
      t: 2,
      c: 1,
      '!': 1
    })
  })
})

function charCount(str) {
  var result = {}
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    // already seen this char?
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}

describe('10-formatWithPadding', function () {
  it('pads only if not min lenth', function () {
    expect(formatWithPadding(1234, '*', 3)).toBe('1234')
  })
  it('pads integer with char specified', function () {
    expect(formatWithPadding(123, '0', 5)).toBe('00123')
    expect(formatWithPadding(42, '*', 10)).toBe('********42')
  })
})

function formatWithPadding(int, char, length) {
  var result = int.toFixed(0)
  while (result.length < length) {
    result = char + result
  }
  return result
}

