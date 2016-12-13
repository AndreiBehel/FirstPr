var students = [{name:'Sam', mark:4}, {name:'Tom', mark:1}, {name:'Kate', mark:5}, {name:'Bet', mark:3},
{name:'Nick', mark:3}, {name:'Mike', mark:5}];
var result = [];
var max = 0;
for(var i = 0; i < students.length; i++) {
	console.log(students[i].name + "\t" + students[i].mark);
	if(students[max].mark < students[i].mark) {
		max = students[i].mark;
	}
}
for(var i = 0; i < students.length; i++) {
	if(students[i].mark == max) {
		result.push(students[i]);
	}
}
for(var i = 0; i < result.length; i++) {
	console.log("Max mark has " + result[i].name + " and mark " + result[i].mark);
}
