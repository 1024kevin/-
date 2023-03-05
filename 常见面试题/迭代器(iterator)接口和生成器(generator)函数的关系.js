class ClassRoom {
    constructor(address, name, students) {
        this.address = address;
        this.name = name;
        this.students = students;
    }

    entry(student) {
        this.students.push(student);
    }

    *[Symbol.iterator]() {
        yield* this.students;
    }

    // [Symbol.iterator]() {
    //   let index = 0;
    //   return {
    //     next: () => {
    //       if (index < this.students.length) {
    //         return { done: false, value: this.students[index++] };
    //       } else {
    //         return { done: true, value: undefined };
    //       }
    //     },
    //     return: () => {
    //       console.log("iterator has early termination");
    //       return { done: true, value: undefined };
    //     },
    //   };
    // }
}

const classOne = new ClassRoom("7-101", "teach-one-room", ["rose", "jack", "lily", "james"]);

for (const stu of classOne) {
    console.log("stu :>> ", stu);
    // stu :>>  rose
    // stu :>>  jack
    // stu :>>  lily
    // stu :>>  james
    // if (stu === "lily") return;
}