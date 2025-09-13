interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Creating multiple Teacher objects
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'Paris',
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// Printing all teachers to console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
