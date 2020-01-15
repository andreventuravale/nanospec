const { expect } = require('chai')
const parse = require('../../src/parse')

suite('Parser / Data Tables', () => {
  test('Parses a step with a data table', () => {
    const metadata = parse(`

      Scenario : Tables

        Given a table
          | name | alias |
          | foo  | bar   |
          | qux  | waldo |
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Tables'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'a table'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            },
            {
              'type': 'table',
              'nodes': [
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': 'name'
                    },
                    {
                      'type': 'cell',
                      'text': 'alias'
                    }
                  ]
                },
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': 'foo'
                    },
                    {
                      'type': 'cell',
                      'text': 'bar'
                    }
                  ]
                },
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': 'qux'
                    },
                    {
                      'type': 'cell',
                      'text': 'waldo'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'type': 'token',
          'subtype': 'keyword',
          'text': 'Scenario'
        },
        {
          'type': 'token',
          'subtype': 'colon',
          'text': ':'
        }
      ]
    })
  })

  test('Parses a step with empty cells', () => {
    const source = `
      Scenario : Tables

        Given a table
          | name | alias |
          | foo  |       |
          |      | waldo |
    `

    const metadata = parse(source)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Tables'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'a table'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            },
            {
              'type': 'table',
              'nodes': [
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': 'name'
                    },
                    {
                      'type': 'cell',
                      'text': 'alias'
                    }
                  ]
                },
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': 'foo'
                    },
                    {
                      'type': 'cell',
                      'text': ''
                    }
                  ]
                },
                {
                  'type': 'row',
                  'nodes': [
                    {
                      'type': 'cell',
                      'text': ''
                    },
                    {
                      'type': 'cell',
                      'text': 'waldo'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'type': 'token',
          'subtype': 'keyword',
          'text': 'Scenario'
        },
        {
          'type': 'token',
          'subtype': 'colon',
          'text': ':'
        }
      ]
    })
  })
})
