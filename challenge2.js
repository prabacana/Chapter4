let breakVoid = " "

//Test 1

console.log(" ===== Test 1 ===== ")

for (let numberEven = 0; numberEven <= 20; numberEven += 2) {
    console.log(numberEven);
}

console.log(breakVoid)


//Test 2

console.log(" ===== Test 2 ===== ")

let numberTotal = 0;

for (let numberAddition = 1; numberAddition <= 100; numberAddition++) {
    numberTotal += numberAddition;
    console.log(numberTotal);
}

console.log(breakVoid)


//Test 3

console.log(" ===== Test 3 ===== ")

let triangleAxis_Y = 5

for (let triangleSequence = 1; triangleSequence <= triangleAxis_Y; triangleSequence++) {
    let triangleRow = '';
    for (let triangleAxis_X = 1; triangleAxis_X <= triangleSequence; triangleAxis_X++) {
        triangleRow += 'X ';
    }
console.log(triangleRow);
}

console.log(breakVoid)

