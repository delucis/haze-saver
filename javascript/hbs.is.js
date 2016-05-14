/*
	~ hbs.is.js ~
	test if input is of a certain type

	Chris Swithinbank <swithinbank@gmail.com> http://www.chrisswithinbank.net
 */

 // dev settings
 autowatch = 1;

// global code
inlets = 1;
outlets = 1;
setinletassist(0,"data type to be tested");
setoutletassist(0,"boolean result of test: 1 = matches type; 0 = doesn’t match");

// arguments
var target = jsarguments[1] || 'bang';

function bang()
{
	test(['bang','b']);
}
bang.immediate = 1;

function msg_int(v)
{
	test(['integer','int','i']);
}
msg_int.immediate = 1;

function msg_float(v)
{
	test(['float','f']);
}
msg_float.immediate = 1;

function list()
{
	test(['list','l']);
}
list.immediate = 1;

function signal()
{
	test(['signal','sig','~']);
}

// this must be symbol
function anything()
{
	test(['symbol','sym','s']);
}
anything.immediate = 1;

// generic test function
function test(types)
{
	for (var i = 0; i < types.length; i++) {
		if (types[i] === target) {
			outlet(0, 1);
			return;
		}
	}
	outlet(0, 0);
}
test.local = 1;
test.immediate = 1;
