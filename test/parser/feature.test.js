const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Feature', () => {
  test('Parses a feature with only a title', () => {
    const metadata = parse(`

      Feature : Esse laborum sunt ut consequat cupidatat ad cillum tempor in velit labore ullamco occaecat incididunt.

    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'feature',
      'nodes': [
        {
          'type': 'title',
          'text': 'Esse laborum sunt ut consequat cupidatat ad cillum tempor in velit labore ullamco occaecat incididunt.'
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

  test('Parses a feature with a summary', () => {
    const metadata = parse(`

      Feature : Est aute non in aute elit pariatur cillum enim ex aliqua aute exercitation.

        Culpa tempor eiusmod eu commodo incididunt.
        Occaecat tempor ex laborum incididunt.
        Culpa deserunt est elit veniam.
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'feature',
      'nodes': [
        {
          'type': 'title',
          'text': 'Est aute non in aute elit pariatur cillum enim ex aliqua aute exercitation.'
        },
        {
          'type': 'summary',
          'text': 'Culpa tempor eiusmod eu commodo incididunt.'
        },
        {
          'type': 'summary',
          'text': 'Occaecat tempor ex laborum incididunt.'
        },
        {
          'type': 'summary',
          'text': 'Culpa deserunt est elit veniam.'
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
