
for (c = 1; c <= 100; c++) {
	var output = ""; 
 	if (c % 3 == 0) {
		output += "Fizz";
	} if (c % 5 == 0) {
		output += "Buzz";
	}
	console.log(output || c);
}

/* First, we had to start with 1 because 0%3 = 0, or Fizz.

Next, using Else If only allows for one statement to be true, 
and if the first statement is true (Fizz), then we'll never
get to FizzBuzz. So we can nest multiple "if" statements instead,
allowing us to execute both if both statements are true.

Lastly, double pipes in the log function will return output only
if the output is not null. Output is null for all instances
where c%3 or c%5 != 0, so then it will default to the right side
and output c itself.
*/

function isEven(number){
	function recurseFind(even) {
		if (even == number) {
			return true;
		}
		else if (even > number && number > 0) {
			return false;
		}
		else if (even < number && number < 0) {
			return false;
		}
		else if (number < 0) {
			return recurseFind (even - 2);
		}
		else {
			return recurseFind (even + 2);
		}
	}
	return recurseFind (0);
} 

console.log(isEven(-75));


/* My way of doing things works, but it's not as elegant. Why?
Well, first of all, (most of all, really,) the negative number
instance is solved by switching the direction of the recursive
addition on "even". I could just switch the negative to a positive
in an "else if" */

function countBs (string) {
	var count = 0;
	for (c = 0; c < string.length; c++) {
		if (string.charAt(c) == "B") 
			count ++;
		return count;
	}
}

console.log(countBs("BBBdongBdong"));

/* Why does the presence of absence of these curly brackets make
or break my code? That seems odd to me. Will need to investigate
*/
var journal = [0];

function addEntry(events, amSquirrel) {
	journal.push({
		events: events,
		squirrel: amSquirrel
	});
}



//JOURNAL OF DOOM



var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

//this checks to see if the given event exists in each entry
//by returning the index of that event in the array, and 
//making sure it doesn't equal -1 (the index when a value 
//doesn't exist in an array being queried)

function hasEvent ( event , entry ) {
	return entry . events . indexOf ( event ) != -1;
}

function phi ( table ) {
	return ( table [3] * table [0] - table [2] * table [1]) /
	Math . sqrt (( table [2] + table [3]) *
	( table [0] + table [1]) *
	( table [1] + table [3]) *
	( table [0] + table [2]) ) ;
}

/* Alright. tableFor takes an event and runs a loop through all entries
in JOURNAL looking for that event. table is set at [0,0,0,0], and as
we count up through entries in JOURNAL, hasEvent will check if the
event exists. If it does, it moves control to index[1], the first
spot where event = true. If it doesn't exist, control moves to index[2],
where squirrel status is checked. index[2] is the first spot where
squirrel = true. Finally, if both are true, control moves 3 spots up to
index[3], where squirrel and event are true. 
*/
function tableFor ( event , journal ) {
	var table = [0 , 0 , 0 , 0];
	for ( var i = 0; i < journal . length ; i ++) {
		var entry = journal [ i ] , index = 0;
		if ( hasEvent ( event , entry ) ) index += 1;
		if ( entry . squirrel ) index += 2;
		table [ index ] += 1;
	}
return table ;
}

//adds the correleations for a given event to object phis 
function gatherCorrelations ( journal ) {
	var phis = {};
	for ( var entry = 0; entry < journal . length ; entry ++) {
		var events = journal [ entry ]. events ;
		for ( var i = 0; i < events . length ; i ++) {
			var event = events [ i ];
			if (!( event in phis ) )
				phis [ event ] = phi ( tableFor ( event , journal ) ) ;
			}
		}
	return phis ;
}

var correlations = gatherCorrelations ( JOURNAL ) ;


for ( var event in correlations ) {
	var correlation = correlations [ event ];
	if ( correlation > 0.1 || correlation < -0.1)
		console . log ( event + ": " + correlation ) ;
}

