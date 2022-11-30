#!/usr/bin/env node
export function roll(sides, dice, numRolls){
    var outcomes = [];
    for (let i = 0; i < numRolls; i++){
        var sum = 0;
        for (let j = 0; j < dice; j++){
            sum += 1 + Math.floor(Math.random() * sides);
        }
        outcomes[i] = sum;
    }
    var result = {
            sides: sides,
            dice: dice,
            rolls: numRolls,
            results: outcomes,
    };
    return result;
}