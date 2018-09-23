const _ = require('lodash')
const { NanoSpecLexer } = require('../lib/parser/NanoSpecLexer')
const { NanoSpecListener } = require('../lib/parser/NanoSpecListener')
const { NanoSpecParser } = require('../lib/parser/NanoSpecParser')
const antlr4 = require('antlr4')

class Listener extends NanoSpecListener {
  enterFeature () {
    this.statements = []
  }

  exitFeature (ctx) {
    const text = ctx.text()
    const summary = ctx.summary && ctx.summary() && _.trim(ctx.summary().getText())
    const tag = ctx.tag && ctx.tag() && _.trim(ctx.tag().getText())

    this.metadata = {}

    _.merge(
      this.metadata,
      {
        type: 'feature',
        title: _.trim(text.getText()),
        nodes: this.statements
      },
      summary ? { summary } : {},
      tag ? { tag } : {}
    )
  }

  enterStatement () {
    this.statement = {}
    this.steps = []
  }

  exitStatement (ctx) {
    let keyword = _.lowerCase(_.trim(ctx.statementKeyword().getText()))
      .replace(/\s+/g, '-')
    const text = ctx.text()
    const summary = ctx.summary && ctx.summary() && _.trim(ctx.summary().getText())
    let modifier

    if (keyword === 'scenario-outline') {
      keyword = 'scenario'
      modifier = 'outline'
    }

    _.merge(
      this.statement,
      {
        type: 'statement',
        statementType: keyword,
        title: _.trim(text.getText()),
        nodes: this.steps
      },
      summary ? { summary } : {},
      modifier ? { modifier } : {}
    )

    this.statements.push(this.statement)
  }

  enterParam () {
  }

  exitParam (ctx) {
    const name = ctx.WORD && _.trim(ctx.WORD().getText())

    if (name) {
      this.step.params = this.step.params || []

      const param = _.find(this.step.params, { name })

      const where = ctx.WORD().symbol.column -
        ctx.WORD().parentCtx.parentCtx.parentCtx.start.column

      if (param) {
        param.at.push(where)
      } else {
        this.step.params.push(
          {
            name,
            at: [where]
          }
        )
      }
    }
  }

  enterStep () {
    this.step = {}
  }

  exitStep (ctx) {
    const stepKeyword = ctx.stepKeyword()
    const text = ctx.text()

    if (text) {
      _.merge(
        this.step,
        {
          type: 'step',
          stepType: stepKeyword && _.lowerCase(stepKeyword.getText()),
          text: text && _.trim(text.getText())
        }
      )

      this.steps.push(this.step)

      if (this.step.params) {
        this.step.params = _.sortBy(this.step.params, 'name')
      }
    }
  }
}

module.exports = class {
  constructor (text) {
    this.text = text
  }

  parse () {
    const input = new antlr4.InputStream(this.text)
    const lexer = new NanoSpecLexer(input)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new NanoSpecParser(tokens)
    parser.buildParseTrees = true
    const ast = parser.startRule()
    console.log('`' + ast.getText() + '`')
    const listener = new Listener()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, ast)
    return listener.metadata
  }
}
