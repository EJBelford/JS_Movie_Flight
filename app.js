function random(rng) {
    // console.log(`rng: ${rng}`)
    let rnd = Math.floor(Math.random() * rng) + 1;
    // console.log(`Random: ${rnd}`);
    return rnd;
}

function rollDie(numSides) {
    let roll = random(numSides); 
    // console.log(`Rolled: ${roll}`);
    return roll;
}

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        // console.log(`i: ${i}`);
        let roll = rollDie(6);
        console.log(`Rolled: ${roll}`);
    }
} 

function isValidPassword(pwd, userId) { 
    if (pwd.length < 8) {
        return false;
    }
    else if (pwd.includes(" ")) {
        return false;
    } 
    else if (pwd.includes(userId)) {
        return false; 
    }
    return true;
} 

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function pick(arr) {
    return arr[random(arr.length)];
}

function avg(nums) {
    let avg = 0;
    for (let num of nums) {
        avg += num; 
    }
    return avg/nums.length;
}

function getCard() { 
    const cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

    return { card: pick(cards), suit: pick(suits) };
}

console.log(getCard());
sleep(50);
console.log(getCard());
sleep(50);
console.log(getCard());
sleep(50);
console.log(getCard());
sleep(50);
console.log(getCard());

/* let avgNum = avg([1, 2]);
console.log(avgNum);
avgNum = avg([1, 2, 3]);
console.log(avgNum);
avgNum = avg([1, 2, -6]);
console.log(avgNum);
avgNum = avg([]); 
console.log(avgNum); */

/* console.log(isValidPassword('pass', 'EJBelford')); 
console.log(isValidPassword('password', 'EJBelford')); 
console.log(isValidPassword('pass word', 'EJBelford')); 
console.log(isValidPassword('password', 'EJBelford')); 
console.log(isValidPassword('password', 'Password')); 
console.log(isValidPassword('password', 'EJBelford'));
console.log(isValidPassword('password', 'password'));   */

// random(6);
// throwDice(2);