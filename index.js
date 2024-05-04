var totalMarks = 300;
var urduMarks = 80;
var englishMarks = 74;
var mathsMarks = 88;

var ObtainedMarks = urduMarks + englishMarks + mathsMarks;
var result = (ObtainedMarks * 100) / totalMarks;

var grade = 'A+';

console.log("Congratulations! Your Grade is : "+ grade + " and Percentage is " + result);