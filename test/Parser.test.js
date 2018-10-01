const _ = require('lodash')
const { expect } = require('chai')
const { inspect } = require('util')
const Parser = require('../src/Parser')

global.log = function (data) {
  console.log(inspect(data, true, 100, true))
}

function walkNodes (parent, action) {
  action(parent)
  _.each(parent.nodes, child => {
    walkNodes(child, action)
  })
}

function parse (text, { preserveLocation } = { preserveLocation: false }) {
  const parser = new Parser(text)
  const metadata = parser.parse(text)
  console.log(inspect(metadata))
  if (!preserveLocation) {
    walkNodes(metadata, node => { delete node.at })
  }
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
              { type: 'step', stepType: 'given', text: 'taque earum rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })

  it('Parses "given" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'given', text: 'taque earum rerum' },
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })

  it('Parses "when" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'given', text: 'taque earum rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })

  it('Parses "then" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'given', text: 'taque earum rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' },
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' }
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

    log(metadata)

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

  it('Parses many parameters having same name', () => {
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
