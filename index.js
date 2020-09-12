/* variable decalaration */
let p = 0,
    allNumbers = [],
    evenNumbers = [],
    sumAllSquareNumber = 0,
    sumAllEvenSquareNumber = 0,
    numberOfErrors = 0,
    resultantArray = [];

/* --------------------------------------- Answer 1 --------------------------------------- */

/* 0 to 100 numbers without using traditional for-loop */
while (p <= 100) {
    allNumbers.push(p);
    p++;
}

console.log("0 to 100 numbers: ", allNumbers);

/* --------------------------------------- Answer 2 --------------------------------------- */

/* Array of only even numbers from the above array */
for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 2 === 0) {
        evenNumbers.push(allNumbers[i]);
    }
}

console.log(" Even Numbers Array: ", evenNumbers);

/* method to get square of only even numbers */
let squareEvenNumber = (a) => {
    return new Promise(function(resolve, reject) {
        try {
            if (a % 2 === 0) {
                resolve(a * a);
            } else {
                numberOfErrors = numberOfErrors + 1;
                throw (" This is an odd number. ");
            }
        } catch (e) {
            reject(e);
        }
    });
}

/* squareEvenNumber() method calling */
squareEvenNumber(22).then(function(result) {
    console.log(" Square of Even Number ", result);
}).
catch(function(exception) {
    console.log(exception);
});

/* --------------------------------------- Answer 3 & 4 --------------------------------------- */

function getSumOfEvenNumberSquare(myNumber) {
    return new Promise(function(resolve, reject) {
        squareEvenNumber(myNumber).then(function(result) {
            if (result % 2 === 0) {
                sumAllEvenSquareNumber = sumAllEvenSquareNumber + result;
            }
            resolve(result);
        }).
        catch(function(exception) {
            reject(exception);
        });
    });
}

for (let i = 0; i < evenNumbers.length; i++) {
    getSumOfEvenNumberSquare(evenNumbers[i]).then(function(res) {
        sumAllSquareNumber = sumAllSquareNumber + res;
        if (i === evenNumbers.length - 1) {
            console.log(" Sum of square of all Even Numbers from 0 to 100: ", sumAllSquareNumber);
            console.log(" Sum of Even Square Numbers from 0 to 100: ", sumAllEvenSquareNumber);
        }
    }).catch(function(excp) {
        console.log(excp);
    });
}

/* --------------------------------------- Answer 5 --------------------------------------- */

for (let i = 0; i < allNumbers.length; i++) {
    getSumOfEvenNumberSquare(allNumbers[i]).then(function(res) {
        resultantArray.push({
            "key": res
        });
        if (i === allNumbers.length - 1) {
            console.log("Total Number of Errors: ", numberOfErrors);
            console.log("Resultant Array: ", resultantArray);
            console.log(" Number of objects in the Resultant Array: ", resultantArray.length);
        }
    }).catch(function(excp) {});
}