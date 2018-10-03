grammar NanoSpec;

startRule: e comment? feature? e EOF;

comment: WS* COMMENT_CHAR text? NL*;

tag: WS* TAG;

param: LT WORD GT;
primary: WORD | param;
text: WS* primary (WS+ primary)*;

feature:
	e tag? NL* e FEATURE WS* COLON text NL* summary? statement?;

statement:
	e statementKeyword WS* COLON text NL* summary? steps?;

statementKeyword: (
		EXAMPLE
		| BACKGROUND
		| SCENARIO
		| SCENARIO_OUTLINE
	);

summary: text (NL+ text)*;

steps: givenSteps whenSteps thenSteps;

givenSteps: given ( and+ but? | and*);

whenSteps: when ( and+ but? | and*);

thenSteps: then ( and+ but? | and*);

given: e GIVEN WS* text NL*;
when: e WHEN WS* text NL*;
then: e THEN WS* text NL*;
and: e AND WS* text NL*;
but: e BUT WS* text NL*;

stepKeyword: (GIVEN | WHEN | THEN | AND | BUT);

e: (WS | NL)*;

fragment A: ('A' | 'a');
fragment B: ('B' | 'b');
fragment C: ('C' | 'c');
fragment D: ('D' | 'd');
fragment E: ('E' | 'e');
fragment F: ('F' | 'f');
fragment G: ('G' | 'g');
fragment H: ('H' | 'h');
fragment I: ('I' | 'i');
fragment J: ('J' | 'j');
fragment K: ('K' | 'k');
fragment L: ('L' | 'l');
fragment M: ('M' | 'm');
fragment N: ('N' | 'n');
fragment O: ('O' | 'o');
fragment P: ('P' | 'p');
fragment Q: ('Q' | 'q');
fragment R: ('R' | 'r');
fragment S: ('S' | 's');
fragment T: ('T' | 't');
fragment U: ('U' | 'u');
fragment V: ('V' | 'v');
fragment W: ('W' | 'w');
fragment X: ('X' | 'x');
fragment Y: ('Y' | 'y');
fragment Z: ('Z' | 'z');

fragment ID: ('A' ..'Z' | 'a' ..'z' | '_');

FEATURE: F E A T U R E;
EXAMPLE: E X A M P L E;
BACKGROUND: B A C K G R O U N D;
SCENARIO: S C E N A R I O;
SCENARIO_OUTLINE: S C E N A R I O WS+ O U T L I N E;
GIVEN: G I V E N;
WHEN: W H E N;
THEN: T H E N;
AND: A N D;
BUT: B U T;

WS: ' ';
NL: '\r'? '\n';
COLON: ':';
LT: '<';
GT: '>';
COMMENT_CHAR: '#';
TAG: '@' ID+;
WORD:	[!"#$%&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]+;