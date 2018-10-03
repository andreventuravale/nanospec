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
  parse (text, {
    preserveLocation,
    preserveParamLocation
  } = {
      preserveLocation: false,
      preserveParamLocation: true
    }) {
    if (!text) {
      return undefined
    }

    const parser = new Parser(text)

    const metadata = parser.parse()

    if (metadata) {
      if (!preserveLocation || !preserveParamLocation) {
        walkNodes(metadata, node => {
          if (node.type !== 'parameter' && !preserveLocation) {
            delete node.at
          } else if (node.type === 'parameter' && !preserveParamLocation) {
            delete node.at
          }
        })
      }
    }

    return metadata
  }
}
