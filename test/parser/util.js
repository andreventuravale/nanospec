const parse = require('../../src/parse')

module.exports = {
  parse (text) {
    if (!text) {
      return undefined
    }

    const ast = parse(text)

    return ast
  }
}
