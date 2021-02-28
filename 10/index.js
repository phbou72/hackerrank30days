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

function main() {
    const n = parseInt(readLine(), 10);

    const binary = (n >>> 0).toString(2);
    const values = binary.split("0");

    let maxCount = 0;
    values.forEach((value) => {
        if (value.length > maxCount) {
            maxCount = value.length;
        }
    });

    console.log(maxCount);
}
