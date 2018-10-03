const _ = require('lodash')
const { inspect } = require('util')
const Parser = require('../../src/Parser')

global.inspect = function (data) {
  console.log(inspect(data, true, 100, true))
}

function walkNodes (parent, action) {
  action(parent)

  _.each(parent.nodes, child => {
    walkNodes(child, action)
  })
}

module.exports = {
  parse (text, { preserveLocation } = { preserveLocation: false }) {
    if (!text) {
      return undefined
    }

    const parser = new Parser(text)

    const metadata = parser.parse()

    if (metadata) {
      if (!preserveLocation) {
        walkNodes(metadata, node => { delete node.at })
      }
    }

    return metadata
  }
}
