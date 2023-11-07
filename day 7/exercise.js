// pertanyaan 3

class Student {
    constructor(name, email) {
    this.name = name,
    this.email = email
}
}

const students = [
    new Student("Student1", "student1@mail.com"),
    new Student("Student2", "student2@mail.com")
    ]

    console.log(students, new Student("Student3", "student3@mail.com"))