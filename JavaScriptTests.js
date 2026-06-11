 
//Functions 
 const greet = person => {
        return "Hello, " + person + "!";
    }


    function greet1(person){
        return "Hello, " + person + "!";
    }

    console.log(greet("Will"))
    console.log(greet1("Will"))


//If statements
    let age = 18;
    if(age > 18){
        console.log('adult')
    }
    else if(age < 18){
        console.log("minor")
    }
    else{
        console.log('18')
    }

//Arrays and for loops
    let subjects = ['math', 'science', 'history'];
    for (let i = 0; i<subjects.length; i++){
        console.log('I study: ' + subjects[i]);
    }

    console.log('\n\n\n\n\n\n')
    for (let subject of subjects){
        console.log('I study: ' + subject);
    }

//Constant objects
    let student = {
        name: 'William',
        age: 15,
        subjects: ['APUSH', 'AP STATS', 'AP physicis C mechanics', "AP physics C E&M", "AP Chemistry"],
        introduce(){
            console.log("Hi my name is " + this.name)
        }
    };

    console.log(student.name);
    console.log(student.age);
    for(let subject of student.subjects){console.log(subject);}
    student.introduce();
    let key = "age";
    console.log(student[key]);

//Variable objects
    function Student(name, age, subjects) {
    this.name     = name;
    this.age      = age;
    this.subjects = subjects;
    }

    let John = new Student("John", 17, ['Math', 'Art']);

    class Student1 {
    constructor(name, age, subjects) {
        this.name     = name;
        this.age      = age;
        this.subjects = subjects;
    }

    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
    }
    }

    let william = new Student1("William", 17, ["History", "Philosophy"]);
    console.log(william.introduce());

