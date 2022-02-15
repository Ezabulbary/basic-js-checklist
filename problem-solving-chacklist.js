// 1. conversion
// feetToInch

/* const oneFeet = '12 inches';

function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}

var myInches = 45;
const myFeet = feetToInch(myInches);
console.log('my feet is', myFeet); */


// 2. conversion 
// centimeterToMeter

/* const oneCentimeter = '0.01 meter';

function centimeterToMeter(centimeter){
    const meter = centimeter * .01;
    return meter;
}

const myCentimeter = 2000;
const mymeter = centimeterToMeter(myCentimeter);
console.log('my meter is', mymeter); */


// 3. calculetion
// pageRequirements

/* function pageRequirements(book1, book2, book3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const totalBook1Pages = book1 * book1Pages;
    const totalBook2Pages = book2 * book2Pages;
    const totalBook3Pages = book3 * book3Pages;
    
    const allBookPages = totalBook1Pages + totalBook2Pages + totalBook3Pages;
    return allBookPages;
}

const totalBookPages = pageRequirements(10, 14, 15);
console.log('total books pages requirement', totalBookPages); */


// 4. Friends
//  bestFriend


/* function bestFriend(friends){
    let nameMaxLength = friends[0].length;
    let bigLength = friends[0];
    for(let i = 1; i < friends.length; i++){
        let nameMax = friends[i].length;
        if (nameMax > nameMaxLength) {
            bigLength = friends[i];
            nameMaxLength = nameMax;
        }
    }
    return bigLength;
}

const friends = ['salman', 'shibly', 'mehedi', 'sakil', 'sifat', 'sozon', 'sagor'];
const myBestFriend = bestFriend(friends);
console.log(myBestFriend); */


// 5. will stop the loop if the array has any negetive number and return the all positive number before the negetive number.
// onlyPositive


function onlyPositive(num){
    let positiveNumber = [];
    for (const number of num){
        if (number > -1){
            positiveNumber.push(number);
        }
        else if (number < 0){
            break;
        }
    }
    return positiveNumber;
}

const numbers = [12, 25, 14, 58, 56, -12, 65, 85];
const myPositiveNumbers = onlyPositive(numbers);
console.log(myPositiveNumbers);