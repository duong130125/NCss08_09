// Định nghĩa type Person
type person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonOrAddress = person | Address;
type PersonAndAddress = person & Address;

// Sử dụng kiểu dữ liệu PersonOrAddress
let data1: PersonOrAddress = {
    name: "Đình Dương",
    age: 20,
};
let data2: PersonOrAddress = {
    street: "Mai Dịch",
    city: "Hà Nội"
};

// Sử dụng kiểu dữ liệu PersonAndAddress
let data3: PersonAndAddress = {
    name: "Đình Dương",
    age: 20,
    street: "Mai Dịch",
    city: "Hà Nội"
};

console.log("Data 1:", data1);
console.log("Data 2:", data2);
console.log("Data 3:", data3);