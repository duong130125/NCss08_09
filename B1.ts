function parseInput(test:number|string|boolean|null|undefined){
    console.log(Object.prototype.toString.call(test));
}

parseInput(5)
parseInput("hoa")
parseInput(true)
parseInput(null)
parseInput(undefined)