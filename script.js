//complete this code
class Person {
   constructor(name,age){
	   this.name = name;
	   this.age = age;
   }

	get name(){
		return this.name;
	}
	set age(age){
		return this.age;
	}

	
}

class Student extends Person {

  study(){
	  console.log(`${this.name} is studing`);
  }

	
}

class Teacher extends Person {

    teach(){
		console.log(`${this.name} is teaching`);
	}

}

let person1 = new Person("Abhi",45);
console.log(name);
person1.age = 47;
console.log(person1.age);

let student = new Student("Amay",25);
student.study();

let teacher = new Teacher("tina",28);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
