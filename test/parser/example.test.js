const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Example', () => {
  test('Parses an example with some steps', () => {
    const metadata = parse(`

      Example: Adipisicing cillum fugiat tempor voluptate consectetur officia aliqua adipisicing incididunt

        Given Velit ut id eiusmod cupidatat tempor
        When Pariatur occaecat exercitation excepteur nostrud culpa exercitation
        Then Reprehenderit aliquip cupidatat ut laboris fugiat
    `)

    expect(metadata).to.deep.eql({
      type: 'statement',
      statementType: 'example',
      title: 'Adipisicing cillum fugiat tempor voluptate consectetur officia aliqua adipisicing incididunt',
      nodes: [
        {
          type: 'step', stepType: 'given', text: 'Velit ut id eiusmod cupidatat tempor', fullText: 'Given Velit ut id eiusmod cupidatat tempor'
        },
        {
          type: 'step', stepType: 'when', text: 'Pariatur occaecat exercitation excepteur nostrud culpa exercitation', fullText: 'When Pariatur occaecat exercitation excepteur nostrud culpa exercitation'
        },
        {
          type: 'step', stepType: 'then', text: 'Reprehenderit aliquip cupidatat ut laboris fugiat', fullText: 'Then Reprehenderit aliquip cupidatat ut laboris fugiat'
        }
      ]
    })
  })

  test('Parses an example having a summary', () => {
    const metadata = parse(`

      Example: Quis reprehenderit quis ullamco esse nisi cupidatat est incididunt voluptate eiusmod id non fugiat

          Non sunt sint incididunt cillum cupidatat ipsum culpa id laborum fugiat duis.
          Id nisi mollit voluptate dolore excepteur labore eiusmod veniam ipsum Lorem enim incididunt occaecat proident.

        Given Nulla tempor sit ad officia consequat aliquip commodo exercitation commodo officia
        When Et qui quis nostrud reprehenderit cupidatat commodo sint incididunt
        Then Dolor Lorem adipisicing proident dolor Lorem irure
    `)

    expect(metadata).to.deep.eql({
      type: 'statement',
      statementType: 'example',
      title: 'Quis reprehenderit quis ullamco esse nisi cupidatat est incididunt voluptate eiusmod id non fugiat',
      summary: [
        { type: 'text', text: 'Non sunt sint incididunt cillum cupidatat ipsum culpa id laborum fugiat duis.' },
        { type: 'text', text: 'Id nisi mollit voluptate dolore excepteur labore eiusmod veniam ipsum Lorem enim incididunt occaecat proident.' }
      ],
      nodes: [
        {
          type: 'step', stepType: 'given', text: 'Nulla tempor sit ad officia consequat aliquip commodo exercitation commodo officia', fullText: 'Given Nulla tempor sit ad officia consequat aliquip commodo exercitation commodo officia'
        },
        {
          type: 'step', stepType: 'when', text: 'Et qui quis nostrud reprehenderit cupidatat commodo sint incididunt', fullText: 'When Et qui quis nostrud reprehenderit cupidatat commodo sint incididunt'
        },
        {
          type: 'step', stepType: 'then', text: 'Dolor Lorem adipisicing proident dolor Lorem irure', fullText: 'Then Dolor Lorem adipisicing proident dolor Lorem irure'
        }
      ]
    })
  })
})
