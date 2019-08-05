const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Feature', () => {
  test.only('Parses a feature with only a title', () => {
    const metadata = parse(`

      Feature : Esse laborum sunt ut consequat cupidatat ad cillum tempor in velit labore ullamco occaecat incididunt.

    `)

    expect(metadata).to.deep.eql({
      type: 'feature',
      title: 'Esse laborum sunt ut consequat cupidatat ad cillum tempor in velit labore ullamco occaecat incididunt.'
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
      type: 'feature',
      title: 'Est aute non in aute elit pariatur cillum enim ex aliqua aute exercitation.',
      summary: [
        { type: 'text', text: 'Culpa tempor eiusmod eu commodo incididunt.' },
        { type: 'text', text: 'Occaecat tempor ex laborum incididunt.' },
        { type: 'text', text: 'Culpa deserunt est elit veniam.' }
      ]
    })
  })
})
