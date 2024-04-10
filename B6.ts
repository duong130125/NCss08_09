function processInput(input: string | string[]) {
    if (typeof input === 'string') {
        console.log(input);
    } else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    } 
}

processInput("Nam"); 
processInput(["Nhất", "Hiếu", "Dương"]); 
