interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}

let employee: Employee = {
    name: "Oanh",
    age: 19,
    employeeId: "LHoanh0912"
};
console.log(employee);

