// Generated from NanoSpec.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NanoSpecListener = require('./NanoSpecListener').NanoSpecListener;
var grammarFileName = "NanoSpec.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\24\u00c0\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3",
    "\2\5\2!\n\2\3\2\3\2\3\2\3\2\3\3\7\3(\n\3\f\3\16\3+\13\3\3\3\3\3\5\3",
    "/\n\3\3\3\7\3\62\n\3\f\3\16\3\65\13\3\3\4\7\48\n\4\f\4\16\4;\13\4\3",
    "\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\5\6E\n\6\3\7\7\7H\n\7\f\7\16\7K\13\7",
    "\3\7\3\7\6\7O\n\7\r\7\16\7P\3\7\7\7T\n\7\f\7\16\7W\13\7\3\b\3\b\5\b",
    "[\n\b\3\b\7\b^\n\b\f\b\16\ba\13\b\3\b\3\b\3\b\7\bf\n\b\f\b\16\bi\13",
    "\b\3\b\3\b\3\b\7\bn\n\b\f\b\16\bq\13\b\3\b\5\bt\n\b\3\b\5\bw\n\b\3\t",
    "\3\t\3\t\7\t|\n\t\f\t\16\t\177\13\t\3\t\3\t\3\t\7\t\u0084\n\t\f\t\16",
    "\t\u0087\13\t\3\t\5\t\u008a\n\t\3\t\5\t\u008d\n\t\3\n\3\n\3\13\3\13",
    "\6\13\u0093\n\13\r\13\16\13\u0094\3\13\7\13\u0098\n\13\f\13\16\13\u009b",
    "\13\13\3\f\3\f\6\f\u009f\n\f\r\f\16\f\u00a0\3\f\7\f\u00a4\n\f\f\f\16",
    "\f\u00a7\13\f\3\r\3\r\3\r\7\r\u00ac\n\r\f\r\16\r\u00af\13\r\3\r\3\r",
    "\7\r\u00b3\n\r\f\r\16\r\u00b6\13\r\3\16\3\16\3\17\7\17\u00bb\n\17\f",
    "\17\16\17\u00be\13\17\3\17\2\2\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34",
    "\2\5\3\2\4\7\3\2\b\f\3\2\r\16\u00cb\2\36\3\2\2\2\4)\3\2\2\2\69\3\2\2",
    "\2\b>\3\2\2\2\nD\3\2\2\2\fI\3\2\2\2\16X\3\2\2\2\20x\3\2\2\2\22\u008e",
    "\3\2\2\2\24\u0090\3\2\2\2\26\u009c\3\2\2\2\30\u00a8\3\2\2\2\32\u00b7",
    "\3\2\2\2\34\u00bc\3\2\2\2\36 \5\34\17\2\37!\5\4\3\2 \37\3\2\2\2 !\3",
    "\2\2\2!\"\3\2\2\2\"#\5\16\b\2#$\5\34\17\2$%\7\2\2\3%\3\3\2\2\2&(\7\r",
    "\2\2\'&\3\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*,\3\2\2\2+)\3\2\2\2,",
    ".\7\22\2\2-/\5\f\7\2.-\3\2\2\2./\3\2\2\2/\63\3\2\2\2\60\62\7\16\2\2",
    "\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\5\3\2\2",
    "\2\65\63\3\2\2\2\668\7\r\2\2\67\66\3\2\2\28;\3\2\2\29\67\3\2\2\29:\3",
    "\2\2\2:<\3\2\2\2;9\3\2\2\2<=\7\23\2\2=\7\3\2\2\2>?\7\20\2\2?@\7\24\2",
    "\2@A\7\21\2\2A\t\3\2\2\2BE\7\24\2\2CE\5\b\5\2DB\3\2\2\2DC\3\2\2\2E\13",
    "\3\2\2\2FH\7\r\2\2GF\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JL\3\2\2\2",
    "KI\3\2\2\2LU\5\n\6\2MO\7\r\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2",
    "\2QR\3\2\2\2RT\5\n\6\2SN\3\2\2\2TW\3\2\2\2US\3\2\2\2UV\3\2\2\2V\r\3",
    "\2\2\2WU\3\2\2\2XZ\5\34\17\2Y[\5\6\4\2ZY\3\2\2\2Z[\3\2\2\2[_\3\2\2\2",
    "\\^\7\16\2\2]\\\3\2\2\2^a\3\2\2\2_]\3\2\2\2_`\3\2\2\2`b\3\2\2\2a_\3",
    "\2\2\2bc\5\34\17\2cg\7\3\2\2df\7\r\2\2ed\3\2\2\2fi\3\2\2\2ge\3\2\2\2",
    "gh\3\2\2\2hj\3\2\2\2ig\3\2\2\2jk\7\17\2\2ko\5\f\7\2ln\7\16\2\2ml\3\2",
    "\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2ps\3\2\2\2qo\3\2\2\2rt\5\24\13\2s",
    "r\3\2\2\2st\3\2\2\2tv\3\2\2\2uw\5\20\t\2vu\3\2\2\2vw\3\2\2\2w\17\3\2",
    "\2\2xy\5\34\17\2y}\5\22\n\2z|\7\r\2\2{z\3\2\2\2|\177\3\2\2\2}{\3\2\2",
    "\2}~\3\2\2\2~\u0080\3\2\2\2\177}\3\2\2\2\u0080\u0081\7\17\2\2\u0081",
    "\u0085\5\f\7\2\u0082\u0084\7\16\2\2\u0083\u0082\3\2\2\2\u0084\u0087",
    "\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0089\3\2\2\2",
    "\u0087\u0085\3\2\2\2\u0088\u008a\5\24\13\2\u0089\u0088\3\2\2\2\u0089",
    "\u008a\3\2\2\2\u008a\u008c\3\2\2\2\u008b\u008d\5\26\f\2\u008c\u008b",
    "\3\2\2\2\u008c\u008d\3\2\2\2\u008d\21\3\2\2\2\u008e\u008f\t\2\2\2\u008f",
    "\23\3\2\2\2\u0090\u0099\5\f\7\2\u0091\u0093\7\16\2\2\u0092\u0091\3\2",
    "\2\2\u0093\u0094\3\2\2\2\u0094\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095",
    "\u0096\3\2\2\2\u0096\u0098\5\f\7\2\u0097\u0092\3\2\2\2\u0098\u009b\3",
    "\2\2\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\25\3\2\2\2\u009b",
    "\u0099\3\2\2\2\u009c\u00a5\5\30\r\2\u009d\u009f\7\16\2\2\u009e\u009d",
    "\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u009e\3\2\2\2\u00a0\u00a1\3\2\2\2",
    "\u00a1\u00a2\3\2\2\2\u00a2\u00a4\5\30\r\2\u00a3\u009e\3\2\2\2\u00a4",
    "\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\27\3\2",
    "\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00a9\5\34\17\2\u00a9\u00ad\5\32\16\2",
    "\u00aa\u00ac\7\r\2\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab",
    "\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b0\3\2\2\2\u00af\u00ad\3\2\2\2",
    "\u00b0\u00b4\5\f\7\2\u00b1\u00b3\7\16\2\2\u00b2\u00b1\3\2\2\2\u00b3",
    "\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\31\3\2",
    "\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00b8\t\3\2\2\u00b8\33\3\2\2\2\u00b9",
    "\u00bb\t\4\2\2\u00ba\u00b9\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3",
    "\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\35\3\2\2\2\u00be\u00bc\3\2\2\2\34 ",
    ").\639DIPUZ_gosv}\u0085\u0089\u008c\u0094\u0099\u00a0\u00a5\u00ad\u00b4",
    "\u00bc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', 'null', "' '", 'null', "':'", 
                     "'<'", "'>'", "'#'" ];

var symbolicNames = [ 'null', "FEATURE", "EXAMPLE", "BACKGROUND", "SCENARIO", 
                      "SCENARIO_OUTLINE", "GIVEN", "WHEN", "THEN", "AND", 
                      "BUT", "WS", "NL", "COLON", "LT", "GT", "COMMENT_CHAR", 
                      "TAG", "WORD" ];

var ruleNames =  [ "startRule", "comment", "tag", "param", "primary", "text", 
                   "feature", "statement", "statementKeyword", "summary", 
                   "steps", "step", "stepKeyword", "e" ];

function NanoSpecParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

NanoSpecParser.prototype = Object.create(antlr4.Parser.prototype);
NanoSpecParser.prototype.constructor = NanoSpecParser;

Object.defineProperty(NanoSpecParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

NanoSpecParser.EOF = antlr4.Token.EOF;
NanoSpecParser.FEATURE = 1;
NanoSpecParser.EXAMPLE = 2;
NanoSpecParser.BACKGROUND = 3;
NanoSpecParser.SCENARIO = 4;
NanoSpecParser.SCENARIO_OUTLINE = 5;
NanoSpecParser.GIVEN = 6;
NanoSpecParser.WHEN = 7;
NanoSpecParser.THEN = 8;
NanoSpecParser.AND = 9;
NanoSpecParser.BUT = 10;
NanoSpecParser.WS = 11;
NanoSpecParser.NL = 12;
NanoSpecParser.COLON = 13;
NanoSpecParser.LT = 14;
NanoSpecParser.GT = 15;
NanoSpecParser.COMMENT_CHAR = 16;
NanoSpecParser.TAG = 17;
NanoSpecParser.WORD = 18;

NanoSpecParser.RULE_startRule = 0;
NanoSpecParser.RULE_comment = 1;
NanoSpecParser.RULE_tag = 2;
NanoSpecParser.RULE_param = 3;
NanoSpecParser.RULE_primary = 4;
NanoSpecParser.RULE_text = 5;
NanoSpecParser.RULE_feature = 6;
NanoSpecParser.RULE_statement = 7;
NanoSpecParser.RULE_statementKeyword = 8;
NanoSpecParser.RULE_summary = 9;
NanoSpecParser.RULE_steps = 10;
NanoSpecParser.RULE_step = 11;
NanoSpecParser.RULE_stepKeyword = 12;
NanoSpecParser.RULE_e = 13;

function StartRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_startRule;
    return this;
}

StartRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartRuleContext.prototype.constructor = StartRuleContext;

StartRuleContext.prototype.e = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EContext);
    } else {
        return this.getTypedRuleContext(EContext,i);
    }
};

StartRuleContext.prototype.feature = function() {
    return this.getTypedRuleContext(FeatureContext,0);
};

StartRuleContext.prototype.EOF = function() {
    return this.getToken(NanoSpecParser.EOF, 0);
};

StartRuleContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StartRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterStartRule(this);
	}
};

StartRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitStartRule(this);
	}
};




NanoSpecParser.StartRuleContext = StartRuleContext;

NanoSpecParser.prototype.startRule = function() {

    var localctx = new StartRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NanoSpecParser.RULE_startRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.e();
        this.state = 30;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 29;
            this.comment();

        }
        this.state = 32;
        this.feature();
        this.state = 33;
        this.e();
        this.state = 34;
        this.match(NanoSpecParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT_CHAR = function() {
    return this.getToken(NanoSpecParser.COMMENT_CHAR, 0);
};

CommentContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


CommentContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

CommentContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitComment(this);
	}
};




NanoSpecParser.CommentContext = CommentContext;

NanoSpecParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NanoSpecParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 36;
            this.match(NanoSpecParser.WS);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42;
        this.match(NanoSpecParser.COMMENT_CHAR);
        this.state = 44;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 43;
            this.text();

        }
        this.state = 49;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 46;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 51;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TAG = function() {
    return this.getToken(NanoSpecParser.TAG, 0);
};

TagContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitTag(this);
	}
};




NanoSpecParser.TagContext = TagContext;

NanoSpecParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, NanoSpecParser.RULE_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 52;
            this.match(NanoSpecParser.WS);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
        this.match(NanoSpecParser.TAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.LT = function() {
    return this.getToken(NanoSpecParser.LT, 0);
};

ParamContext.prototype.WORD = function() {
    return this.getToken(NanoSpecParser.WORD, 0);
};

ParamContext.prototype.GT = function() {
    return this.getToken(NanoSpecParser.GT, 0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitParam(this);
	}
};




NanoSpecParser.ParamContext = ParamContext;

NanoSpecParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NanoSpecParser.RULE_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(NanoSpecParser.LT);
        this.state = 61;
        this.match(NanoSpecParser.WORD);
        this.state = 62;
        this.match(NanoSpecParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.WORD = function() {
    return this.getToken(NanoSpecParser.WORD, 0);
};

PrimaryContext.prototype.param = function() {
    return this.getTypedRuleContext(ParamContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitPrimary(this);
	}
};




NanoSpecParser.PrimaryContext = PrimaryContext;

NanoSpecParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, NanoSpecParser.RULE_primary);
    try {
        this.state = 66;
        switch(this._input.LA(1)) {
        case NanoSpecParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.match(NanoSpecParser.WORD);
            break;
        case NanoSpecParser.LT:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.param();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.primary = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimaryContext);
    } else {
        return this.getTypedRuleContext(PrimaryContext,i);
    }
};

TextContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitText(this);
	}
};




NanoSpecParser.TextContext = TextContext;

NanoSpecParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, NanoSpecParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 68;
            this.match(NanoSpecParser.WS);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 74;
        this.primary();
        this.state = 83;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 76; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 75;
                    this.match(NanoSpecParser.WS);
                    this.state = 78; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===NanoSpecParser.WS);
                this.state = 80;
                this.primary(); 
            }
            this.state = 85;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FeatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_feature;
    return this;
}

FeatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatureContext.prototype.constructor = FeatureContext;

FeatureContext.prototype.e = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EContext);
    } else {
        return this.getTypedRuleContext(EContext,i);
    }
};

FeatureContext.prototype.FEATURE = function() {
    return this.getToken(NanoSpecParser.FEATURE, 0);
};

FeatureContext.prototype.COLON = function() {
    return this.getToken(NanoSpecParser.COLON, 0);
};

FeatureContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

FeatureContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

FeatureContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


FeatureContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


FeatureContext.prototype.summary = function() {
    return this.getTypedRuleContext(SummaryContext,0);
};

FeatureContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

FeatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterFeature(this);
	}
};

FeatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitFeature(this);
	}
};




NanoSpecParser.FeatureContext = FeatureContext;

NanoSpecParser.prototype.feature = function() {

    var localctx = new FeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, NanoSpecParser.RULE_feature);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.e();
        this.state = 88;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 87;
            this.tag();

        }
        this.state = 93;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 90;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 95;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

        this.state = 96;
        this.e();
        this.state = 97;
        this.match(NanoSpecParser.FEATURE);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 98;
            this.match(NanoSpecParser.WS);
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 104;
        this.match(NanoSpecParser.COLON);
        this.state = 105;
        this.text();
        this.state = 109;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 106;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 111;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 113;
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 112;
            this.summary();

        }
        this.state = 116;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 115;
            this.statement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

StatementContext.prototype.statementKeyword = function() {
    return this.getTypedRuleContext(StatementKeywordContext,0);
};

StatementContext.prototype.COLON = function() {
    return this.getToken(NanoSpecParser.COLON, 0);
};

StatementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

StatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


StatementContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


StatementContext.prototype.summary = function() {
    return this.getTypedRuleContext(SummaryContext,0);
};

StatementContext.prototype.steps = function() {
    return this.getTypedRuleContext(StepsContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitStatement(this);
	}
};




NanoSpecParser.StatementContext = StatementContext;

NanoSpecParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, NanoSpecParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.e();
        this.state = 119;
        this.statementKeyword();
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 120;
            this.match(NanoSpecParser.WS);
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 126;
        this.match(NanoSpecParser.COLON);
        this.state = 127;
        this.text();
        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 128;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

        this.state = 135;
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 134;
            this.summary();

        }
        this.state = 138;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 137;
            this.steps();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementKeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_statementKeyword;
    return this;
}

StatementKeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementKeywordContext.prototype.constructor = StatementKeywordContext;

StatementKeywordContext.prototype.EXAMPLE = function() {
    return this.getToken(NanoSpecParser.EXAMPLE, 0);
};

StatementKeywordContext.prototype.BACKGROUND = function() {
    return this.getToken(NanoSpecParser.BACKGROUND, 0);
};

StatementKeywordContext.prototype.SCENARIO = function() {
    return this.getToken(NanoSpecParser.SCENARIO, 0);
};

StatementKeywordContext.prototype.SCENARIO_OUTLINE = function() {
    return this.getToken(NanoSpecParser.SCENARIO_OUTLINE, 0);
};

StatementKeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterStatementKeyword(this);
	}
};

StatementKeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitStatementKeyword(this);
	}
};




NanoSpecParser.StatementKeywordContext = StatementKeywordContext;

NanoSpecParser.prototype.statementKeyword = function() {

    var localctx = new StatementKeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NanoSpecParser.RULE_statementKeyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NanoSpecParser.EXAMPLE) | (1 << NanoSpecParser.BACKGROUND) | (1 << NanoSpecParser.SCENARIO) | (1 << NanoSpecParser.SCENARIO_OUTLINE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SummaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_summary;
    return this;
}

SummaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SummaryContext.prototype.constructor = SummaryContext;

SummaryContext.prototype.text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextContext);
    } else {
        return this.getTypedRuleContext(TextContext,i);
    }
};

SummaryContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


SummaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterSummary(this);
	}
};

SummaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitSummary(this);
	}
};




NanoSpecParser.SummaryContext = SummaryContext;

NanoSpecParser.prototype.summary = function() {

    var localctx = new SummaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, NanoSpecParser.RULE_summary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.text();
        this.state = 151;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 144; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 143;
                    this.match(NanoSpecParser.NL);
                    this.state = 146; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===NanoSpecParser.NL);
                this.state = 148;
                this.text(); 
            }
            this.state = 153;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_steps;
    return this;
}

StepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepsContext.prototype.constructor = StepsContext;

StepsContext.prototype.step = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StepContext);
    } else {
        return this.getTypedRuleContext(StepContext,i);
    }
};

StepsContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


StepsContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterSteps(this);
	}
};

StepsContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitSteps(this);
	}
};




NanoSpecParser.StepsContext = StepsContext;

NanoSpecParser.prototype.steps = function() {

    var localctx = new StepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, NanoSpecParser.RULE_steps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.step();
        this.state = 163;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 156; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 155;
                		this.match(NanoSpecParser.NL);
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 158; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                this.state = 160;
                this.step(); 
            }
            this.state = 165;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_step;
    return this;
}

StepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepContext.prototype.constructor = StepContext;

StepContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

StepContext.prototype.stepKeyword = function() {
    return this.getTypedRuleContext(StepKeywordContext,0);
};

StepContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

StepContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


StepContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


StepContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterStep(this);
	}
};

StepContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitStep(this);
	}
};




NanoSpecParser.StepContext = StepContext;

NanoSpecParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NanoSpecParser.RULE_step);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.e();
        this.state = 167;
        this.stepKeyword();
        this.state = 171;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 168;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 173;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

        this.state = 174;
        this.text();
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 175;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 180;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepKeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_stepKeyword;
    return this;
}

StepKeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepKeywordContext.prototype.constructor = StepKeywordContext;

StepKeywordContext.prototype.GIVEN = function() {
    return this.getToken(NanoSpecParser.GIVEN, 0);
};

StepKeywordContext.prototype.WHEN = function() {
    return this.getToken(NanoSpecParser.WHEN, 0);
};

StepKeywordContext.prototype.THEN = function() {
    return this.getToken(NanoSpecParser.THEN, 0);
};

StepKeywordContext.prototype.AND = function() {
    return this.getToken(NanoSpecParser.AND, 0);
};

StepKeywordContext.prototype.BUT = function() {
    return this.getToken(NanoSpecParser.BUT, 0);
};

StepKeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterStepKeyword(this);
	}
};

StepKeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitStepKeyword(this);
	}
};




NanoSpecParser.StepKeywordContext = StepKeywordContext;

NanoSpecParser.prototype.stepKeyword = function() {

    var localctx = new StepKeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NanoSpecParser.RULE_stepKeyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NanoSpecParser.GIVEN) | (1 << NanoSpecParser.WHEN) | (1 << NanoSpecParser.THEN) | (1 << NanoSpecParser.AND) | (1 << NanoSpecParser.BUT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_e;
    return this;
}

EContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EContext.prototype.constructor = EContext;

EContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


EContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


EContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterE(this);
	}
};

EContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitE(this);
	}
};




NanoSpecParser.EContext = EContext;

NanoSpecParser.prototype.e = function() {

    var localctx = new EContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NanoSpecParser.RULE_e);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 183;
                _la = this._input.LA(1);
                if(!(_la===NanoSpecParser.WS || _la===NanoSpecParser.NL)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                } 
            }
            this.state = 188;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.NanoSpecParser = NanoSpecParser;
