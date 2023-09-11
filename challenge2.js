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


//Test 4

console.log(" ===== Test 4 ===== ")

const diamondGenerate = 5;
const diamondVoid = " ";

for (let diamondAxis_Y = 1; diamondAxis_Y <= diamondGenerate; diamondAxis_Y++) {
    let diamondValue = "";
    for (let diamondVoid_Axis_Y = diamondGenerate; diamondVoid_Axis_Y > diamondAxis_Y; diamondVoid_Axis_Y--) {
        diamondValue += diamondVoid;
    }
    for (let diamondAxis_X = 1; diamondAxis_X <= diamondAxis_Y * 2 - 1; diamondAxis_X++) {
        diamondValue += "*";
    }
    console.log(diamondValue);
}
for (let i = diamondGenerate - 1; diamondAxis_Y >= 1; diamondAxis_Y--) {
    let diamondValue = "";
    for (let diamondVoid_Axis_Y = diamondGenerate; diamondVoid_Axis_Y > i; diamondVoid_Axis_Y--) {
        diamondValue += diamondVoid;
    }
    for (let diamondAxis_X = 1; diamondAxis_X <= diamondAxis_Y * 2 - 1; diamondAxis_X++) {
        diamondValue += "*";
    }
    console.log(diamondValue);
}

console.log(breakVoid)


//Test 5

console.log(" ===== Test 5 ===== ")

const abominationAxis_Y = 5;

for (let i = 1; i <= abominationAxis_Y; i++) {
    let row = '1';
    for (let j = 2; j <= i; j++) {
        row += `*${j}`;
    }
    console.log(row);
}
