const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Example', () => {
  test('Parses an example with some steps', () => {
    const metadata = parse(`

      Example : Adipisicing cillum fugiat tempor voluptate consectetur officia aliqua adipisicing incididunt

        Given Velit ut id eiusmod cupidatat tempor
        When Pariatur occaecat exercitation excepteur nostrud culpa exercitation
        Then Reprehenderit aliquip cupidatat ut laboris fugiat
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Adipisicing cillum fugiat tempor voluptate consectetur officia aliqua adipisicing incididunt'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Velit ut id eiusmod cupidatat tempor'
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
              'text': 'Pariatur occaecat exercitation excepteur nostrud culpa exercitation'
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
              'text': 'Reprehenderit aliquip cupidatat ut laboris fugiat'
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
          'text': 'Example',
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

  test('Parses an example having a summary', () => {
    const metadata = parse(`

      Example : Quis reprehenderit quis ullamco esse nisi cupidatat est incididunt voluptate eiusmod id non fugiat

          Non sunt sint incididunt cillum cupidatat ipsum culpa id laborum fugiat duis.
          Id nisi mollit voluptate dolore excepteur labore eiusmod veniam ipsum Lorem enim incididunt occaecat proident.

        Given Nulla tempor sit ad officia consequat aliquip commodo exercitation commodo officia
        When Et qui quis nostrud reprehenderit cupidatat commodo sint incididunt
        Then Dolor Lorem adipisicing proident dolor Lorem irure
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Quis reprehenderit quis ullamco esse nisi cupidatat est incididunt voluptate eiusmod id non fugiat'
        },
        {
          'type': 'summary',
          'text': 'Non sunt sint incididunt cillum cupidatat ipsum culpa id laborum fugiat duis.'
        },
        {
          'type': 'summary',
          'text': 'Id nisi mollit voluptate dolore excepteur labore eiusmod veniam ipsum Lorem enim incididunt occaecat proident.'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Nulla tempor sit ad officia consequat aliquip commodo exercitation commodo officia'
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
              'text': 'Et qui quis nostrud reprehenderit cupidatat commodo sint incididunt'
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
              'text': 'Dolor Lorem adipisicing proident dolor Lorem irure'
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
          'text': 'Example',
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
