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

const sumHourglass = (arr, i, j) => {
    let sum = 0;
    sum += arr[i][j];
    sum += arr[i][j + 1];
    sum += arr[i][j + 2];
    sum += arr[i + 1][j + 1];
    sum += arr[i + 2][j];
    sum += arr[i + 2][j + 1];
    sum += arr[i + 2][j + 2];

    return sum;
};

const findBiggestHourglass = (arr) => {
    let biggestSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[0].length - 2; j++) {
            const sum = sumHourglass(arr, i, j);
            if (sum > biggestSum) {
                biggestSum = sum;
            }
        }
    }

    console.log(biggestSum);
};

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(" ")
            .map((arrTemp) => parseInt(arrTemp, 10));
    }

    console.log(arr);
    findBiggestHourglass(arr);
}
