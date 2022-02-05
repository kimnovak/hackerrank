'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getTotalGeneStrandHealth({genes, health, s, first, last, d}) {
    const benefitialGenes = genes.slice(first, last + 1);
    const benefitialGenesHealth = health.slice(first, last + 1);
    
    return benefitialGenes.reduce((prev, current, index) => {
        if (current.length > d.length) {
            return prev;
        }
        
        if (current === d) {
            return prev + benefitialGenesHealth[index];
        }
        
        const regExLookahead = new RegExp(`(?=(${current}))`, "g"); 
        const regEx = new RegExp(current, 'g');
        let numberOfOccurrencies;
        if(current.length > 1) {
            numberOfOccurrencies = (Array.from(d.matchAll(regExLookahead), x => x[1]) || []).length
        } else {
            numberOfOccurrencies = (d.match(regEx) || []).length;
        }


        return prev + numberOfOccurrencies * benefitialGenesHealth[index];
    }, 0);
    
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const genes = readLine().replace(/\s+$/g, '').split(' ');

    const health = readLine().replace(/\s+$/g, '').split(' ').map(healthTemp => parseInt(healthTemp, 10));

    const s = parseInt(readLine().trim(), 10);

    let geneStrandsTotalHealth = [];

    for (let sItr = 0; sItr < s; sItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const first = parseInt(firstMultipleInput[0], 10);

        const last = parseInt(firstMultipleInput[1], 10);

        const d = firstMultipleInput[2];
        
        const totalHealth = getTotalGeneStrandHealth({genes, health, s, first, last, d});
        geneStrandsTotalHealth.push(totalHealth);
    }

    console.log(Math.min(...geneStrandsTotalHealth), Math.max(...geneStrandsTotalHealth));
}
