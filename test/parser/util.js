const { inspect } = require('util')
const { parse } = require('../../src/parse')

global.inspect = function (data) {
  console.log(inspect(data, true, 100, true))
}

module.exports = {
  parse (text) {
    if (!text) {
      return undefined
    }

    const ast = parse(text)

    return ast
  }
}
