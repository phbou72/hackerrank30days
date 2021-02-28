function processData(input) {
    const [count, ...rows] = input.split("\n");
    let phoneBook = new Map();

    let pointer = 0;
    while (pointer < count) {
        const [name, phoneNumber] = rows[pointer].split(" ");
        phoneBook.set(name, phoneNumber);
        pointer++;
    }

    for (let i = pointer; i < rows.length; i++) {
        const name = rows[i];

        if (phoneBook.has(name)) {
            console.log(`${name}=${phoneBook.get(name)}`);
        } else {
            console.log("Not found");
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
