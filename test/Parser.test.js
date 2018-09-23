
const { expect } = require('chai')
const Parser = require('../lib/Parser')

function parse (text) {
  const parser = new Parser(text)
  const metadata = parser.parse(text)
  return metadata
}

describe('Parser', () => {
  it('Feature description accepts any character', () => {
  })

  it('Ignore comment at begin of file - before feature definition', () => {
    const metadata = parse(`
      
      # comment

      Feature : Lorem ipsum
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
        ]
      }
    )
  })

  it('Parses feature level tag', () => {
    const metadata = parse(`
      @tag
      Feature : Lorem ipsum
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        tag: '@tag',
        nodes: [
        ]
      }
    )
  })

  it('Parses feature and scenario summaries', () => {
    const metadata = parse(`

      Feature : Lorem ipsum
        Sed ut perspiciatis unde omnis
        At vero eos et accusamus

      Scenario : Quis autem vel eum
        Nam libero tempore
        Et harum quidem
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        summary: 'Sed ut perspiciatis unde omnis\n        At vero eos et accusamus',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            title: 'Quis autem vel eum',
            summary: 'Nam libero tempore\n        Et harum quidem',
            nodes: [
            ]
          }
        ]
      }
    )
  })

  it('Parses a basic feature with a single scenario and some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            title: 'Quis autem vel eum',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'taque earum rerum'
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'minus id quod maxime'
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'et expedita distinctio'
              }
            ]
          }
        ]
      }
    )
  })

  it('Parses a background with some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Background : Quis autem vel eum

        Given taque earum rerum
        And minus id quod maxime
        And et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
          {
            type: 'statement',
            statementType: 'background',
            title: 'Quis autem vel eum',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'taque earum rerum'
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'minus id quod maxime'
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'et expedita distinctio'
              }
            ]
          }
        ]
      }
    )
  })

  it('Parses a example with some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Example : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
          {
            type: 'statement',
            statementType: 'example',
            title: 'Quis autem vel eum',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'taque earum rerum'
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'minus id quod maxime'
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'et expedita distinctio'
              }
            ]
          }
        ]
      }
    )
  })

  it('Parses a scenario outline with some steps', () => {
    const metadata = parse(`

      Feature : Ut enim ad minima veniam

      Scenario Outline: Ut enim ad minima veniam

        Given Nemo enim <ipsam> voluptatem
        When Sed quia <non> numquam eius
        Then Ut enim ad <minima> veniam
        And Architecto beatae vitae
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Ut enim ad minima veniam',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            modifier: 'outline',
            title: 'Ut enim ad minima veniam',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'Nemo enim <ipsam> voluptatem',
                params: [
                  {
                    name: 'ipsam',
                    at: [11]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'Sed quia <non> numquam eius',
                params: [
                  {
                    name: 'non',
                    at: [10]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'Ut enim ad <minima> veniam',
                params: [
                  {
                    name: 'minima',
                    at: [12]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'Architecto beatae vitae'
              }
            ]
          }
        ]
      }
    )
  })

  it('Parses many at of same parameter', () => {
    const metadata = parse(`

      Feature : Ut enim ad minima veniam

      Scenario Outline: Ut enim ad minima veniam

        Given Nemo enim <ipsam> voluptatem
        When Sed quia <non> <non> <non> numquam eius
        Then Ut enim ad <minima> veniam
        And Architecto beatae vitae
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Ut enim ad minima veniam',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            modifier: 'outline',
            title: 'Ut enim ad minima veniam',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'Nemo enim <ipsam> voluptatem',
                params: [
                  {
                    name: 'ipsam',
                    at: [11]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'Sed quia <non> <non> <non> numquam eius',
                params: [
                  {
                    name: 'non',
                    at: [10, 16, 22]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'Ut enim ad <minima> veniam',
                params: [
                  {
                    name: 'minima',
                    at: [12]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'Architecto beatae vitae'
              }
            ]
          }
        ]
      }
    )
  })

  it('Scenario outline parameters are sorted by name', () => {
    const metadata = parse(`

      Feature : Ut enim ad minima veniam

      Scenario Outline: Ut enim ad minima veniam

        Given there are <y> + <x> cucumbers
        When Sed quia <non> numquam eius
        Then Ut enim ad <minima> veniam
        And Architecto beatae vitae
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Ut enim ad minima veniam',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            modifier: 'outline',
            title: 'Ut enim ad minima veniam',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'there are <y> + <x> cucumbers',
                params: [
                  {
                    name: 'x',
                    at: [17]
                  },
                  {
                    name: 'y',
                    at: [11]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'Sed quia <non> numquam eius',
                params: [
                  {
                    name: 'non',
                    at: [10]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'Ut enim ad <minima> veniam',
                params: [
                  {
                    name: 'minima',
                    at: [12]
                  }
                ]
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'Architecto beatae vitae'
              }
            ]
          }
        ]
      }
    )
  })
})
