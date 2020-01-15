const { expect } = require('chai')
const parse = require('../../src/parse')

suite('Parser / Scenario', () => {
  test('Parses a scenario with some steps', () => {
    const metadata = parse(`

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Quis autem vel eum'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'taque earum rerum'
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
          'subtype': 'when',
          'nodes': [
            {
              'type': 'definition',
              'text': 'minus id quod maxime'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'When'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'then',
          'nodes': [
            {
              'type': 'definition',
              'text': 'et expedita distinctio'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Then'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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

  test('Parses a scenario with a summary and some steps', () => {
    const metadata = parse(`

      Scenario : Quis autem vel eum

        Qui occaecat excepteur sit minim dolor
        ipsum pariatur cupidatat officia aute nisi.

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Quis autem vel eum'
        },
        {
          'type': 'summary',
          'text': 'Qui occaecat excepteur sit minim dolor'
        },
        {
          'type': 'summary',
          'text': 'ipsum pariatur cupidatat officia aute nisi.'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'taque earum rerum'
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
          'subtype': 'when',
          'nodes': [
            {
              'type': 'definition',
              'text': 'minus id quod maxime'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'When'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'then',
          'nodes': [
            {
              'type': 'definition',
              'text': 'et expedita distinctio'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Then'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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

  test('The keyword is not case sensitive', () => {
    const metadata = parse(`
      SCENario : Amet eiusmod ipsum voluptate dolore incididunt.
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Amet eiusmod ipsum voluptate dolore incididunt.'
        },
        {
          'subtype': 'keyword',
          'text': 'SCENario',
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

  test('There is no need of a space between the keyword and the colon', () => {
    const metadata = parse(` Scenario: Qui aliqua elit mollit non irure incididunt veniam ea laborum. `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Qui aliqua elit mollit non irure incididunt veniam ea laborum.'
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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

  test('There is no need of a space in the begin of the input', () => {
    const metadata = parse(`Scenario: Qui aliqua elit mollit non irure incididunt veniam ea laborum. `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Qui aliqua elit mollit non irure incididunt veniam ea laborum.'
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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

  test('There is no need of a space in the end of the input', () => {
    const metadata = parse(` Scenario: Qui aliqua elit mollit non irure incididunt veniam ea laborum.`)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Qui aliqua elit mollit non irure incididunt veniam ea laborum.'
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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

  test('There is no need of a space between the colon and the title', () => {
    const metadata = parse(` Scenario :Qui aliqua elit mollit non irure incididunt veniam ea laborum. `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Qui aliqua elit mollit non irure incididunt veniam ea laborum.'
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
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
