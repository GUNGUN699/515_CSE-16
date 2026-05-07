function calculateResult(){

    let subject = Number(document.getElementById("subject").value);
    let total=0;

    for(let i=1; i<=subjects; i++){
        let marks = Number(prompt("Enter marks for subject" +i));
        total +=marks;
    }

    let average=total / subject;

    let grade;
    let result;

    if(average >= 90){
        grade= "A";
        result= "Pass";
    }
    else if(average >=75){
        grade= "B";
        result= "Pass";
    }
    else(average >=55);
        grade= "C";
        result= "";

    document.getElementById("output").innerHTML=
    "Total marks:"+ total + "<br" +
    "Average marks:" + average + "<br>" +
    "Grade:" + grade + "<br>" +
    "Result:" + result;
}