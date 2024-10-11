// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    // Use index signature to allow extra properties like 'contract'
    [key: string]: any;  // This allows any additional attributes to be added
}

// Example of creating a teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
};

console.log(teacher3);
