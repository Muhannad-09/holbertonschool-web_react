// Task 1 & 2: Teacher and Directors
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  yearsOfExperience: 5,
  contract: false
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "New York",
  contract: true
};

console.log(teacher1);
console.log(teacher2);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
};

console.log(director1);

// Task 3: printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Jane", "Smith")); // J. Smith

// Task 4: StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: "Alice", lastName: "Johnson" });
console.log(student.displayName());
console.log(student.workOnHomework());
