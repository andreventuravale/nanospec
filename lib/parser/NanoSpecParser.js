// Generated from NanoSpec.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NanoSpecListener = require('./NanoSpecListener').NanoSpecListener;
var grammarFileName = "NanoSpec.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\24\u0137\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3",
    "\2\3\2\5\2/\n\2\3\2\5\2\62\n\2\3\2\3\2\3\2\3\3\7\38\n\3\f\3\16\3;\13",
    "\3\3\3\3\3\5\3?\n\3\3\3\7\3B\n\3\f\3\16\3E\13\3\3\4\7\4H\n\4\f\4\16",
    "\4K\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\5\6U\n\6\3\7\7\7X\n\7\f\7\16",
    "\7[\13\7\3\7\3\7\6\7_\n\7\r\7\16\7`\3\7\7\7d\n\7\f\7\16\7g\13\7\3\b",
    "\3\b\5\bk\n\b\3\b\7\bn\n\b\f\b\16\bq\13\b\3\b\3\b\3\b\7\bv\n\b\f\b\16",
    "\by\13\b\3\b\3\b\3\b\7\b~\n\b\f\b\16\b\u0081\13\b\3\b\5\b\u0084\n\b",
    "\3\b\5\b\u0087\n\b\3\t\3\t\3\t\7\t\u008c\n\t\f\t\16\t\u008f\13\t\3\t",
    "\3\t\3\t\7\t\u0094\n\t\f\t\16\t\u0097\13\t\3\t\5\t\u009a\n\t\3\t\5\t",
    "\u009d\n\t\3\n\3\n\3\13\3\13\6\13\u00a3\n\13\r\13\16\13\u00a4\3\13\7",
    "\13\u00a8\n\13\f\13\16\13\u00ab\13\13\3\f\3\f\3\f\3\f\3\r\3\r\6\r\u00b3",
    "\n\r\r\r\16\r\u00b4\3\r\5\r\u00b8\n\r\3\r\7\r\u00bb\n\r\f\r\16\r\u00be",
    "\13\r\5\r\u00c0\n\r\3\16\3\16\6\16\u00c4\n\16\r\16\16\16\u00c5\3\16",
    "\5\16\u00c9\n\16\3\16\7\16\u00cc\n\16\f\16\16\16\u00cf\13\16\5\16\u00d1",
    "\n\16\3\17\3\17\6\17\u00d5\n\17\r\17\16\17\u00d6\3\17\5\17\u00da\n\17",
    "\3\17\7\17\u00dd\n\17\f\17\16\17\u00e0\13\17\5\17\u00e2\n\17\3\20\3",
    "\20\3\20\7\20\u00e7\n\20\f\20\16\20\u00ea\13\20\3\20\3\20\7\20\u00ee",
    "\n\20\f\20\16\20\u00f1\13\20\3\21\3\21\3\21\7\21\u00f6\n\21\f\21\16",
    "\21\u00f9\13\21\3\21\3\21\7\21\u00fd\n\21\f\21\16\21\u0100\13\21\3\22",
    "\3\22\3\22\7\22\u0105\n\22\f\22\16\22\u0108\13\22\3\22\3\22\7\22\u010c",
    "\n\22\f\22\16\22\u010f\13\22\3\23\3\23\3\23\7\23\u0114\n\23\f\23\16",
    "\23\u0117\13\23\3\23\3\23\7\23\u011b\n\23\f\23\16\23\u011e\13\23\3\24",
    "\3\24\3\24\7\24\u0123\n\24\f\24\16\24\u0126\13\24\3\24\3\24\7\24\u012a",
    "\n\24\f\24\16\24\u012d\13\24\3\25\3\25\3\26\7\26\u0132\n\26\f\26\16",
    "\26\u0135\13\26\3\26\2\2\27\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 ",
    "\"$&(*\2\5\3\2\4\7\3\2\b\f\3\2\r\16\u014e\2,\3\2\2\2\49\3\2\2\2\6I\3",
    "\2\2\2\bN\3\2\2\2\nT\3\2\2\2\fY\3\2\2\2\16h\3\2\2\2\20\u0088\3\2\2\2",
    "\22\u009e\3\2\2\2\24\u00a0\3\2\2\2\26\u00ac\3\2\2\2\30\u00b0\3\2\2\2",
    "\32\u00c1\3\2\2\2\34\u00d2\3\2\2\2\36\u00e3\3\2\2\2 \u00f2\3\2\2\2\"",
    "\u0101\3\2\2\2$\u0110\3\2\2\2&\u011f\3\2\2\2(\u012e\3\2\2\2*\u0133\3",
    "\2\2\2,.\5*\26\2-/\5\4\3\2.-\3\2\2\2./\3\2\2\2/\61\3\2\2\2\60\62\5\16",
    "\b\2\61\60\3\2\2\2\61\62\3\2\2\2\62\63\3\2\2\2\63\64\5*\26\2\64\65\7",
    "\2\2\3\65\3\3\2\2\2\668\7\r\2\2\67\66\3\2\2\28;\3\2\2\29\67\3\2\2\2",
    "9:\3\2\2\2:<\3\2\2\2;9\3\2\2\2<>\7\22\2\2=?\5\f\7\2>=\3\2\2\2>?\3\2",
    "\2\2?C\3\2\2\2@B\7\16\2\2A@\3\2\2\2BE\3\2\2\2CA\3\2\2\2CD\3\2\2\2D\5",
    "\3\2\2\2EC\3\2\2\2FH\7\r\2\2GF\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2",
    "JL\3\2\2\2KI\3\2\2\2LM\7\23\2\2M\7\3\2\2\2NO\7\20\2\2OP\7\24\2\2PQ\7",
    "\21\2\2Q\t\3\2\2\2RU\7\24\2\2SU\5\b\5\2TR\3\2\2\2TS\3\2\2\2U\13\3\2",
    "\2\2VX\7\r\2\2WV\3\2\2\2X[\3\2\2\2YW\3\2\2\2YZ\3\2\2\2Z\\\3\2\2\2[Y",
    "\3\2\2\2\\e\5\n\6\2]_\7\r\2\2^]\3\2\2\2_`\3\2\2\2`^\3\2\2\2`a\3\2\2",
    "\2ab\3\2\2\2bd\5\n\6\2c^\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2f\r\3",
    "\2\2\2ge\3\2\2\2hj\5*\26\2ik\5\6\4\2ji\3\2\2\2jk\3\2\2\2ko\3\2\2\2l",
    "n\7\16\2\2ml\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2pr\3\2\2\2qo\3\2\2",
    "\2rs\5*\26\2sw\7\3\2\2tv\7\r\2\2ut\3\2\2\2vy\3\2\2\2wu\3\2\2\2wx\3\2",
    "\2\2xz\3\2\2\2yw\3\2\2\2z{\7\17\2\2{\177\5\f\7\2|~\7\16\2\2}|\3\2\2",
    "\2~\u0081\3\2\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080\u0083\3\2\2\2",
    "\u0081\177\3\2\2\2\u0082\u0084\5\24\13\2\u0083\u0082\3\2\2\2\u0083\u0084",
    "\3\2\2\2\u0084\u0086\3\2\2\2\u0085\u0087\5\20\t\2\u0086\u0085\3\2\2",
    "\2\u0086\u0087\3\2\2\2\u0087\17\3\2\2\2\u0088\u0089\5*\26\2\u0089\u008d",
    "\5\22\n\2\u008a\u008c\7\r\2\2\u008b\u008a\3\2\2\2\u008c\u008f\3\2\2",
    "\2\u008d\u008b\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u0090\3\2\2\2\u008f",
    "\u008d\3\2\2\2\u0090\u0091\7\17\2\2\u0091\u0095\5\f\7\2\u0092\u0094",
    "\7\16\2\2\u0093\u0092\3\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3\2\2",
    "\2\u0095\u0096\3\2\2\2\u0096\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0098",
    "\u009a\5\24\13\2\u0099\u0098\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009c",
    "\3\2\2\2\u009b\u009d\5\26\f\2\u009c\u009b\3\2\2\2\u009c\u009d\3\2\2",
    "\2\u009d\21\3\2\2\2\u009e\u009f\t\2\2\2\u009f\23\3\2\2\2\u00a0\u00a9",
    "\5\f\7\2\u00a1\u00a3\7\16\2\2\u00a2\u00a1\3\2\2\2\u00a3\u00a4\3\2\2",
    "\2\u00a4\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6",
    "\u00a8\5\f\7\2\u00a7\u00a2\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3",
    "\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\25\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac",
    "\u00ad\5\30\r\2\u00ad\u00ae\5\32\16\2\u00ae\u00af\5\34\17\2\u00af\27",
    "\3\2\2\2\u00b0\u00bf\5\36\20\2\u00b1\u00b3\5$\23\2\u00b2\u00b1\3\2\2",
    "\2\u00b3\u00b4\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5",
    "\u00b7\3\2\2\2\u00b6\u00b8\5&\24\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8\3",
    "\2\2\2\u00b8\u00c0\3\2\2\2\u00b9\u00bb\5$\23\2\u00ba\u00b9\3\2\2\2\u00bb",
    "\u00be\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00c0\3",
    "\2\2\2\u00be\u00bc\3\2\2\2\u00bf\u00b2\3\2\2\2\u00bf\u00bc\3\2\2\2\u00c0",
    "\31\3\2\2\2\u00c1\u00d0\5 \21\2\u00c2\u00c4\5$\23\2\u00c3\u00c2\3\2",
    "\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6",
    "\u00c8\3\2\2\2\u00c7\u00c9\5&\24\2\u00c8\u00c7\3\2\2\2\u00c8\u00c9\3",
    "\2\2\2\u00c9\u00d1\3\2\2\2\u00ca\u00cc\5$\23\2\u00cb\u00ca\3\2\2\2\u00cc",
    "\u00cf\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d1\3",
    "\2\2\2\u00cf\u00cd\3\2\2\2\u00d0\u00c3\3\2\2\2\u00d0\u00cd\3\2\2\2\u00d1",
    "\33\3\2\2\2\u00d2\u00e1\5\"\22\2\u00d3\u00d5\5$\23\2\u00d4\u00d3\3\2",
    "\2\2\u00d5\u00d6\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7",
    "\u00d9\3\2\2\2\u00d8\u00da\5&\24\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3",
    "\2\2\2\u00da\u00e2\3\2\2\2\u00db\u00dd\5$\23\2\u00dc\u00db\3\2\2\2\u00dd",
    "\u00e0\3\2\2\2\u00de\u00dc\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e2\3",
    "\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u00d4\3\2\2\2\u00e1\u00de\3\2\2\2\u00e2",
    "\35\3\2\2\2\u00e3\u00e4\5*\26\2\u00e4\u00e8\7\b\2\2\u00e5\u00e7\7\r",
    "\2\2\u00e6\u00e5\3\2\2\2\u00e7\u00ea\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e8",
    "\u00e9\3\2\2\2\u00e9\u00eb\3\2\2\2\u00ea\u00e8\3\2\2\2\u00eb\u00ef\5",
    "\f\7\2\u00ec\u00ee\7\16\2\2\u00ed\u00ec\3\2\2\2\u00ee\u00f1\3\2\2\2",
    "\u00ef\u00ed\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\37\3\2\2\2\u00f1\u00ef",
    "\3\2\2\2\u00f2\u00f3\5*\26\2\u00f3\u00f7\7\t\2\2\u00f4\u00f6\7\r\2\2",
    "\u00f5\u00f4\3\2\2\2\u00f6\u00f9\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8",
    "\3\2\2\2\u00f8\u00fa\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa\u00fe\5\f\7\2",
    "\u00fb\u00fd\7\16\2\2\u00fc\u00fb\3\2\2\2\u00fd\u0100\3\2\2\2\u00fe",
    "\u00fc\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff!\3\2\2\2\u0100\u00fe\3\2\2",
    "\2\u0101\u0102\5*\26\2\u0102\u0106\7\n\2\2\u0103\u0105\7\r\2\2\u0104",
    "\u0103\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0106\u0107\3",
    "\2\2\2\u0107\u0109\3\2\2\2\u0108\u0106\3\2\2\2\u0109\u010d\5\f\7\2\u010a",
    "\u010c\7\16\2\2\u010b\u010a\3\2\2\2\u010c\u010f\3\2\2\2\u010d\u010b",
    "\3\2\2\2\u010d\u010e\3\2\2\2\u010e#\3\2\2\2\u010f\u010d\3\2\2\2\u0110",
    "\u0111\5*\26\2\u0111\u0115\7\13\2\2\u0112\u0114\7\r\2\2\u0113\u0112",
    "\3\2\2\2\u0114\u0117\3\2\2\2\u0115\u0113\3\2\2\2\u0115\u0116\3\2\2\2",
    "\u0116\u0118\3\2\2\2\u0117\u0115\3\2\2\2\u0118\u011c\5\f\7\2\u0119\u011b",
    "\7\16\2\2\u011a\u0119\3\2\2\2\u011b\u011e\3\2\2\2\u011c\u011a\3\2\2",
    "\2\u011c\u011d\3\2\2\2\u011d%\3\2\2\2\u011e\u011c\3\2\2\2\u011f\u0120",
    "\5*\26\2\u0120\u0124\7\f\2\2\u0121\u0123\7\r\2\2\u0122\u0121\3\2\2\2",
    "\u0123\u0126\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0127",
    "\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u012b\5\f\7\2\u0128\u012a\7\16\2",
    "\2\u0129\u0128\3\2\2\2\u012a\u012d\3\2\2\2\u012b\u0129\3\2\2\2\u012b",
    "\u012c\3\2\2\2\u012c\'\3\2\2\2\u012d\u012b\3\2\2\2\u012e\u012f\t\3\2",
    "\2\u012f)\3\2\2\2\u0130\u0132\t\4\2\2\u0131\u0130\3\2\2\2\u0132\u0135",
    "\3\2\2\2\u0133\u0131\3\2\2\2\u0133\u0134\3\2\2\2\u0134+\3\2\2\2\u0135",
    "\u0133\3\2\2\2/.\619>CITY`ejow\177\u0083\u0086\u008d\u0095\u0099\u009c",
    "\u00a4\u00a9\u00b4\u00b7\u00bc\u00bf\u00c5\u00c8\u00cd\u00d0\u00d6\u00d9",
    "\u00de\u00e1\u00e8\u00ef\u00f7\u00fe\u0106\u010d\u0115\u011c\u0124\u012b",
    "\u0133"].join("");


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
                   "steps", "givenSteps", "whenSteps", "thenSteps", "given", 
                   "when", "then", "and", "but", "stepKeyword", "e" ];

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
NanoSpecParser.RULE_givenSteps = 11;
NanoSpecParser.RULE_whenSteps = 12;
NanoSpecParser.RULE_thenSteps = 13;
NanoSpecParser.RULE_given = 14;
NanoSpecParser.RULE_when = 15;
NanoSpecParser.RULE_then = 16;
NanoSpecParser.RULE_and = 17;
NanoSpecParser.RULE_but = 18;
NanoSpecParser.RULE_stepKeyword = 19;
NanoSpecParser.RULE_e = 20;

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

StartRuleContext.prototype.EOF = function() {
    return this.getToken(NanoSpecParser.EOF, 0);
};

StartRuleContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StartRuleContext.prototype.feature = function() {
    return this.getTypedRuleContext(FeatureContext,0);
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
        this.state = 42;
        this.e();
        this.state = 44;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 43;
            this.comment();

        }
        this.state = 47;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 46;
            this.feature();

        }
        this.state = 49;
        this.e();
        this.state = 50;
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
        this.match(NanoSpecParser.COMMENT_CHAR);
        this.state = 60;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 59;
            this.text();

        }
        this.state = 65;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 62;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 67;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
        this.state = 76;
        this.match(NanoSpecParser.LT);
        this.state = 77;
        this.match(NanoSpecParser.WORD);
        this.state = 78;
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
        this.state = 82;
        switch(this._input.LA(1)) {
        case NanoSpecParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(NanoSpecParser.WORD);
            break;
        case NanoSpecParser.LT:
            this.enterOuterAlt(localctx, 2);
            this.state = 81;
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
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 84;
            this.match(NanoSpecParser.WS);
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 90;
        this.primary();
        this.state = 99;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 91;
                    this.match(NanoSpecParser.WS);
                    this.state = 94; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===NanoSpecParser.WS);
                this.state = 96;
                this.primary(); 
            }
            this.state = 101;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
        this.state = 102;
        this.e();
        this.state = 104;
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 103;
            this.tag();

        }
        this.state = 109;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 106;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 111;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 112;
        this.e();
        this.state = 113;
        this.match(NanoSpecParser.FEATURE);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 114;
            this.match(NanoSpecParser.WS);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.match(NanoSpecParser.COLON);
        this.state = 121;
        this.text();
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 122;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 129;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 128;
            this.summary();

        }
        this.state = 132;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 131;
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
        this.state = 134;
        this.e();
        this.state = 135;
        this.statementKeyword();
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NanoSpecParser.WS) {
            this.state = 136;
            this.match(NanoSpecParser.WS);
            this.state = 141;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 142;
        this.match(NanoSpecParser.COLON);
        this.state = 143;
        this.text();
        this.state = 147;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 144;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 149;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

        this.state = 151;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 150;
            this.summary();

        }
        this.state = 154;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 153;
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
        this.state = 156;
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
        this.state = 158;
        this.text();
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 160; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 159;
                    this.match(NanoSpecParser.NL);
                    this.state = 162; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===NanoSpecParser.NL);
                this.state = 164;
                this.text(); 
            }
            this.state = 169;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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

StepsContext.prototype.givenSteps = function() {
    return this.getTypedRuleContext(GivenStepsContext,0);
};

StepsContext.prototype.whenSteps = function() {
    return this.getTypedRuleContext(WhenStepsContext,0);
};

StepsContext.prototype.thenSteps = function() {
    return this.getTypedRuleContext(ThenStepsContext,0);
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
        this.state = 170;
        this.givenSteps();
        this.state = 171;
        this.whenSteps();
        this.state = 172;
        this.thenSteps();
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

function GivenStepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_givenSteps;
    return this;
}

GivenStepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GivenStepsContext.prototype.constructor = GivenStepsContext;

GivenStepsContext.prototype.given = function() {
    return this.getTypedRuleContext(GivenContext,0);
};

GivenStepsContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

GivenStepsContext.prototype.but = function() {
    return this.getTypedRuleContext(ButContext,0);
};

GivenStepsContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterGivenSteps(this);
	}
};

GivenStepsContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitGivenSteps(this);
	}
};




NanoSpecParser.GivenStepsContext = GivenStepsContext;

NanoSpecParser.prototype.givenSteps = function() {

    var localctx = new GivenStepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NanoSpecParser.RULE_givenSteps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.given();
        this.state = 189;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 176; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 175;
            		this.and();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 178; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 181;
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            if(la_===1) {
                this.state = 180;
                this.but();

            }
            break;

        case 2:
            this.state = 186;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 183;
                    this.and(); 
                }
                this.state = 188;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            break;

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

function WhenStepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_whenSteps;
    return this;
}

WhenStepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhenStepsContext.prototype.constructor = WhenStepsContext;

WhenStepsContext.prototype.when = function() {
    return this.getTypedRuleContext(WhenContext,0);
};

WhenStepsContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

WhenStepsContext.prototype.but = function() {
    return this.getTypedRuleContext(ButContext,0);
};

WhenStepsContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterWhenSteps(this);
	}
};

WhenStepsContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitWhenSteps(this);
	}
};




NanoSpecParser.WhenStepsContext = WhenStepsContext;

NanoSpecParser.prototype.whenSteps = function() {

    var localctx = new WhenStepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NanoSpecParser.RULE_whenSteps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.when();
        this.state = 206;
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.state = 193; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 192;
            		this.and();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 195; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,26, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 198;
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            if(la_===1) {
                this.state = 197;
                this.but();

            }
            break;

        case 2:
            this.state = 203;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 200;
                    this.and(); 
                }
                this.state = 205;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
            }

            break;

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

function ThenStepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_thenSteps;
    return this;
}

ThenStepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThenStepsContext.prototype.constructor = ThenStepsContext;

ThenStepsContext.prototype.then = function() {
    return this.getTypedRuleContext(ThenContext,0);
};

ThenStepsContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

ThenStepsContext.prototype.but = function() {
    return this.getTypedRuleContext(ButContext,0);
};

ThenStepsContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterThenSteps(this);
	}
};

ThenStepsContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitThenSteps(this);
	}
};




NanoSpecParser.ThenStepsContext = ThenStepsContext;

NanoSpecParser.prototype.thenSteps = function() {

    var localctx = new ThenStepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NanoSpecParser.RULE_thenSteps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.then();
        this.state = 223;
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.state = 210; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 209;
            		this.and();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 212; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 215;
            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
            if(la_===1) {
                this.state = 214;
                this.but();

            }
            break;

        case 2:
            this.state = 220;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 217;
                    this.and(); 
                }
                this.state = 222;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
            }

            break;

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

function GivenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_given;
    return this;
}

GivenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GivenContext.prototype.constructor = GivenContext;

GivenContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

GivenContext.prototype.GIVEN = function() {
    return this.getToken(NanoSpecParser.GIVEN, 0);
};

GivenContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

GivenContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


GivenContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


GivenContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterGiven(this);
	}
};

GivenContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitGiven(this);
	}
};




NanoSpecParser.GivenContext = GivenContext;

NanoSpecParser.prototype.given = function() {

    var localctx = new GivenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, NanoSpecParser.RULE_given);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.e();
        this.state = 226;
        this.match(NanoSpecParser.GIVEN);
        this.state = 230;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 227;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 232;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
        }

        this.state = 233;
        this.text();
        this.state = 237;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 234;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 239;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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

function WhenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_when;
    return this;
}

WhenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhenContext.prototype.constructor = WhenContext;

WhenContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

WhenContext.prototype.WHEN = function() {
    return this.getToken(NanoSpecParser.WHEN, 0);
};

WhenContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

WhenContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


WhenContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


WhenContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterWhen(this);
	}
};

WhenContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitWhen(this);
	}
};




NanoSpecParser.WhenContext = WhenContext;

NanoSpecParser.prototype.when = function() {

    var localctx = new WhenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, NanoSpecParser.RULE_when);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.e();
        this.state = 241;
        this.match(NanoSpecParser.WHEN);
        this.state = 245;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 242;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 247;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
        }

        this.state = 248;
        this.text();
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 249;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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

function ThenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_then;
    return this;
}

ThenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThenContext.prototype.constructor = ThenContext;

ThenContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

ThenContext.prototype.THEN = function() {
    return this.getToken(NanoSpecParser.THEN, 0);
};

ThenContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ThenContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


ThenContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


ThenContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterThen(this);
	}
};

ThenContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitThen(this);
	}
};




NanoSpecParser.ThenContext = ThenContext;

NanoSpecParser.prototype.then = function() {

    var localctx = new ThenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, NanoSpecParser.RULE_then);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.e();
        this.state = 256;
        this.match(NanoSpecParser.THEN);
        this.state = 260;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 257;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 262;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

        this.state = 263;
        this.text();
        this.state = 267;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 264;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 269;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;

AndContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

AndContext.prototype.AND = function() {
    return this.getToken(NanoSpecParser.AND, 0);
};

AndContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

AndContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


AndContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitAnd(this);
	}
};




NanoSpecParser.AndContext = AndContext;

NanoSpecParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, NanoSpecParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.e();
        this.state = 271;
        this.match(NanoSpecParser.AND);
        this.state = 275;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 272;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 277;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

        this.state = 278;
        this.text();
        this.state = 282;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 279;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 284;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
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

function ButContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NanoSpecParser.RULE_but;
    return this;
}

ButContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ButContext.prototype.constructor = ButContext;

ButContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

ButContext.prototype.BUT = function() {
    return this.getToken(NanoSpecParser.BUT, 0);
};

ButContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ButContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.WS);
    } else {
        return this.getToken(NanoSpecParser.WS, i);
    }
};


ButContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NanoSpecParser.NL);
    } else {
        return this.getToken(NanoSpecParser.NL, i);
    }
};


ButContext.prototype.enterRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.enterBut(this);
	}
};

ButContext.prototype.exitRule = function(listener) {
    if(listener instanceof NanoSpecListener ) {
        listener.exitBut(this);
	}
};




NanoSpecParser.ButContext = ButContext;

NanoSpecParser.prototype.but = function() {

    var localctx = new ButContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, NanoSpecParser.RULE_but);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.e();
        this.state = 286;
        this.match(NanoSpecParser.BUT);
        this.state = 290;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 287;
                this.match(NanoSpecParser.WS); 
            }
            this.state = 292;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
        }

        this.state = 293;
        this.text();
        this.state = 297;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 294;
                this.match(NanoSpecParser.NL); 
            }
            this.state = 299;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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
    this.enterRule(localctx, 38, NanoSpecParser.RULE_stepKeyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
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
    this.enterRule(localctx, 40, NanoSpecParser.RULE_e);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 302;
                _la = this._input.LA(1);
                if(!(_la===NanoSpecParser.WS || _la===NanoSpecParser.NL)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                } 
            }
            this.state = 307;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
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
