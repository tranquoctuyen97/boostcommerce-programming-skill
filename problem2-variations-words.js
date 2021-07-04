'use strict';

function main() {
    const input = 'Products t5t43t45 are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options';

    const detectNumbersAndCharacters = (input) => {
        return input.match(/[0-9]+[a-zA-z]+[0-9a-zA-Z]*|[a-zA-z]+[0-9][0-9a-zA-Z]*/gm);
    }

    const createVariations = (matchedWords) => {
        const newVariations = [];
        for (const word of matchedWords) {
            let txt = word.replace(/([0-9]+)/g, '-$1-');
            txt = txt.replace(/^-|-$/, '');
            newVariations.push(txt);
        }

        return newVariations;
    }

    const matchedWords = detectNumbersAndCharacters(input);
    const variations = createVariations(matchedWords);
    console.log(`Input: '${input}'`)
    console.log(`Matched Words: '${matchedWords.join(', ')}'`);
    console.log(`Variations with '-' character: '${variations.join(', ')}'`);
}

main();