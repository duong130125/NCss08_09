type D = {
    name:string,
    height:number,
}
type O = {
    address:string,
    id:number
}
type Y = D&O;
let check:Y = {
    name:"thu",
    address:"HN",
    id:66,
    height:170
} 
console.log(check);