//  Union Types cho phép một biến hoặc tham số có thể chứa một trong một số kiểu dữ liệu khác nhau.
// Intersection Types cho phép kết hợp nhiều loại dữ liệu lại với nhau để tạo ra một loại dữ liệu mới chứa tất cả các thuộc tính và phương thức của các loại dữ liệu gốc.

// Uniom Types:
let numberOrString: number | string;
numberOrString = 10; 
numberOrString = "Hello"; 

// Intersection Types:
type K = {
    name:string,
    height:number,
}
type L = {
    address:string,
    id:number
}
type P = K&L;
let item:Y = {
    name:"Dương",
    address:"NA",
    id:37,
    height:170
} 
console.log(item);