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

// random(6);
throwDice(2);