const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Tag', () => {
  test('Parses feature tags', () => {
    const metadata = parse(`
      @foo @bar
      Feature : Ad nisi officia ullamco ex commodo.

        Ex sit irure occaecat et irure Lorem tempor nulla pariatur exercitation.
        Anim non magna pariatur cupidatat ipsum anim.
        Duis consectetur nisi ullamco qui ex.
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'feature',
      'nodes': [
        {
          'type': 'tag',
          'text': '@foo'
        },
        {
          'type': 'tag',
          'text': '@bar'
        },
        {
          'type': 'title',
          'text': 'Ad nisi officia ullamco ex commodo.'
        },
        {
          'type': 'summary',
          'text': 'Ex sit irure occaecat et irure Lorem tempor nulla pariatur exercitation.'
        },
        {
          'type': 'summary',
          'text': 'Anim non magna pariatur cupidatat ipsum anim.'
        },
        {
          'type': 'summary',
          'text': 'Duis consectetur nisi ullamco qui ex.'
        },
        {
          'subtype': 'keyword',
          'text': 'Feature',
          'type': 'token'
        },
        {
          'subtype': 'colon',
          'text': ':',
          'type': 'token'
        }
      ]
    })
  })
})
