const _ = require('lodash')
const { expect } = require('chai')
const { inspect } = require('util')
const Parser = require('../src/Parser')

function parse (text) {
  const parser = new Parser(text)

  const metadata = parser.parse(text)

  // console.log(JSON.stringify(metadata, 0, 2))

  return metadata
}

function findStep (scenario, stepType) {
  const step = _.find(scenario.nodes, {
    type: 'step',
    stepType
  })

  const found = !_.isUndefined(step)

  return { found, step }
}

function validateHasStep (scenario, stepType, errors) {
  const { found } = findStep(scenario, stepType)

  if (!found) {
    errors.push(`The scenario "${scenario.title}" does not have a "${stepType}" step.`)
  }
}

function validate (metadata) {
  const scenario = _.find(metadata.nodes, {
    type: 'statement',
    statementType: 'scenario'
  })

  const errors = []

  validateHasStep(scenario, 'given', errors)
  validateHasStep(scenario, 'when', errors)
  validateHasStep(scenario, 'then', errors)

  const given = findStep(scenario, 'given')
  const when = findStep(scenario, 'when')
  const then = findStep(scenario, 'then')

  if (errors.length === 0) {
    if (given.step.at.offset > when.step.at.offset) {
      errors.push(
        {
          message: `The scenario "B" has a "when" step appearing before a "given" step at line ${when.step.at.line}.`,
          at: when.step.at
        }
      )
    }

    if (when.step.at.offset > then.step.at.offset) {
      errors.push(
        {
          message: `The scenario "B" has a "then" step appearing before a "when" step at line ${then.step.at.line}.`,
          at: then.step.at
        }
      )
    }
  }

  return errors
}

describe('Validator', () => {
  it('"When" step found before a "given" step', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      When D
      Given C
      Then E
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      {
        message: 'The scenario "B" has a "when" step appearing before a "given" step at line 4.',
        at: {
          line: 4,
          column: 11,
          offset: 49
        }
      }
    ])
  })

  it('"Then" step found before a "when" step', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      Given C
      Then E
      When D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      {
        message: 'The scenario "B" has a "then" step appearing before a "when" step at line 5.',
        at: {
          line: 5,
          column: 11,
          offset: 63
        }
      }
    ])
  })

  it('No "given" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      When C
      Then D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "given" step.'
    ])
  })

  it('No "when" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      Given C
      Then D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "when" step.'
    ])
  })

  it('No "then" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      Given C
      When D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "then" step.'
    ])
  })
})
