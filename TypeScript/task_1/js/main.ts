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

// Task 2: Directors interface extending Teacher
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
