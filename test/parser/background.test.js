const { expect } = require('chai')
const parse = require('../../src/parse')

suite('Parser / Background', () => {
  test('Parses a background with a title', () => {
    const metadata = parse(`

      Background : Ex laborum duis sint ut.
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'background',
      'nodes': [
        {
          'type': 'title',
          'text': 'Ex laborum duis sint ut.'
        },
        {
          'type': 'token',
          'subtype': 'keyword',
          'text': 'Background'
        },
        {
          'type': 'token',
          'subtype': 'colon',
          'text': ':'
        }
      ]
    })
  })

  test('Parses a background with some steps', () => {
    const metadata = parse(`

      Background :

        Given Voluptate consectetur irure pariatur laboris ex Lorem ipsum excepteur
        And Consectetur do anim velit sit nisi anim laboris officia culpa consequat ex ea
        And Occaecat aliquip nisi ex ipsum ullamco amet id eu nisi nulla sit id ea occaecat
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'background',
      'nodes': [
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Voluptate consectetur irure pariatur laboris ex Lorem ipsum excepteur'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Consectetur do anim velit sit nisi anim laboris officia culpa consequat ex ea'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Occaecat aliquip nisi ex ipsum ullamco amet id eu nisi nulla sit id ea occaecat'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Background',
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
