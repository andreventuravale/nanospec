const { inspect } = require('util')

const { parse } = require('../../src/parse')

global.inspect = function (data) {
  console.log(inspect(data, true, 100, true))
}

function walkNodes (parent, action) {
  action(parent)

  parent.nodes.forEach(child => {
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

    const metadata = parse(text)

    // if (metadata) {
    //   if (!preserveLocation || !preserveParamLocation) {
    //     walkNodes(metadata, node => {
    //       if (node.type !== 'parameter' && !preserveLocation) {
    //         delete node.at
    //       } else if (node.type === 'parameter' && !preserveParamLocation) {
    //         delete node.at
    //       }
    //     })
    //   }
    // }

    return metadata
  }
}
