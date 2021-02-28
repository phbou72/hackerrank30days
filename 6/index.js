const getLetters = (word, offset) => {
    let letters = [];
    for (let i = offset; i < word.length; i += 2) {
        letters.push(word[i]);
    }
    return letters.join("");
};

const getOddLetters = (word) => getLetters(word, 1);
const getEvenLetters = (word) => getLetters(word, 0);

function processData(input) {
    const [_count, ...words] = input.split("\n");
    words.forEach((word) => {
        console.log(`${getEvenLetters(word)} ${getOddLetters(word)}`);
    });
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
