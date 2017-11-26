// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?
console.log(scores.length);
function gradeAnalysis() {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var fail = [];
    for (var i = 0; i < scores.length; i++) {
        var currentScore = scores[i];
        if (currentScore >= 50 && currentScore <= 60) {
            fail = [fail, (fail.push(currentScore))];
            var totalFails = fail.length;
        }
        else if (currentScore >= 61 && currentScore <= 70) {
            d = [d, (d.push(currentScore))];
            var totalDs = d.length;
        }
        else if (currentScore >= 71 && currentScore <= 80) {
            c.push(currentScore);
            var totalCs = c.length;
        }
        else if (currentScore >= 81 && currentScore <= 90) {
            b.push(currentScore);
            var totalBs = b.length;
        }
        else if (currentScore >= 91 && currentScore <= 100) {
            a = ["", (a.push(currentScore))];
            var totalAs = a.length;
        };
        // console.log(fail.length);    
    } 
    // closing loop 
    console.log("Total F's:" + " " + totalFails);
    console.log("Total D's:" + " " + totalDs);
    console.log("Total C's:" + " " + totalCs);
    console.log("Total B's:" + " " + totalBs);
    console.log("Total A's:" + " " + totalAs);

};
// closing function
gradeAnalysis(scores);

var maxScore = Math.max(...scores); 
console.log("The highest score was" + " " + maxScore);
var minScore = Math.min(...scores) 
console.log("The lowest score was" + " " + minScore);