type Person1 = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonOrAddress = Person1 | Address;
type PersonAndAddress = Person1 & Address;

type ComplexData = PersonOrAddress | PersonAndAddress;

// Sử dụng kiểu dữ liệu ComplexData
let item1: ComplexData = {
    name: "Đình Dương",
    age: 20,
};
let item2: ComplexData = {
    street: "Mai Dịch",
    city: "Hà Nội"
};
let item3: ComplexData = {
    name: "Đình Dương",
    age: 20,
    street: "Mai Dịch",
    city: "Hà Nội"
};

console.log("Data 1:", item1);
console.log("Data 2:", item2);
console.log("Data 3:", item3);
