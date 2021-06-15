
function frequency(str){
    let frequency = {};
    for(let n in str){
        if(frequency[str[n]] == undefined) {
            frequency[str[n]] = 1;
        } else {
            frequency[str[n]] = frequency[str[n]] + 1
        }
    }
    return frequency;
}

function sortFrequency(freqs){
    let sorted = [];
    
    for(let i in freqs) {
        sorted.push([freqs[i],i]);
    }

    return sorted.sort();
}
   
// console.log(sorted_char)

function buildTree(sorted){
    while(sorted.length > 1) {
        let leastTwo = [sorted[0][1], sorted[1][1]];
        let theRest = sorted.slice(2, sorted.length);
        let combFreq = sorted[0][0] + sorted[1][0];
        sorted = theRest
        let pair = [combFreq, leastTwo];
        sorted.push(pair)
        sorted.sort()
    }
    return sorted[0][1]
}

//let tree = buildTree(sortFrequency(frequency(text)))
//console.log(typeof build)
//console.log("tree: " + tree)

let code = {};
let pat = '';

function assignCode(node, pat) {
    if(typeof(node) == typeof("")) {
        code[node] = pat;
    } else {
        assignCode(node[0], pat+'0');
        assignCode(node[1], pat+'1');
    }
}
//let assign = assignCode(tree, pat);
//console.log(code)

function encode(string) {
    let output = '';
    for (let i in string) {
        output += code[string[i]];
    }
    return output
}

//let encoded = encode(text)
//console.log("encoded: " + encoded)

function decode(tree, encoded) {
    let output = "" ;
    let p = tree;
    for (let bit in encoded) {
        if(encoded[bit] == '0') {
            p = p[0];
        } else {
            p = p[1];
        }

        if(typeof(p) == typeof('')){
            output += p;
            p = tree;
        }
    }
    return output
}

export let tree;

export function toEncode(string){

    let first = frequency(string);
    console.log(first)
    let second = sortFrequency(first);
    console.log(second)
    tree = buildTree(second);
    console.log(tree)
    assignCode(tree, pat);
    console.log(code)
    let encoded = encode(string);
    return encoded;
}

console.log(toEncode("hello"));

export function toDecode(tree, string){
    let decoded = decode(tree, string)
    return decoded;
}
