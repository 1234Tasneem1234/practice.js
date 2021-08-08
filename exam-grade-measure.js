// Exam Grade Finder

let marks = 60;

if (marks >= 80 && marks <= 100) {
    console.log("Your Grade is A+ ..Your mark is", marks);
}
else if(marks >= 70 && marks < 80){
    console.log("Your Grade is A ..Your mark is", marks);
}
else if(marks >= 50 && marks < 70){
    console.log("Your Grade is A- ..Your mark is", marks);
}
else if(marks >= 33 && marks < 60){
    console.log("Your Grade is B ..Your mark is", marks);
}

else{
    console.log("You have failed in the exam!! Because your mark is only..", marks);
}
