"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const WEIRD = "Weird";
const NOT_WEIRD = "Not Weird";

function main() {
    const n = parseInt(readLine(), 10);

    if (n % 2 === 1) {
        console.log(WEIRD);
    } else if (n % 2 === 0) {
        if (n >= 2 && n <= 5) {
            console.log(NOT_WEIRD);
        }
        if (n >= 6 && n <= 20) {
            console.log(WEIRD);
        }

        if (n > 20) {
            console.log(NOT_WEIRD);
        }
    }
}
