console.log("Hello", "how are tyou", "3rd argument");

let str =
    "To be or not to be, that is the question";

str.includes("To be")
console.log(str.includes('To be', 0));
"ant bat cat".split(" ");

let a = "A man, a plan, a canal, Panama".split(",").reverse();
console.log(a);

for(let i = 0; i < "honey badger".length; i++){
    console.log("honey badger".split("")[i]);
}

console.log(!undefined);

let b = [3,4,10];
let c = b

b.pop()
b.push(100)
c.join("")
console.log(c.join(""), b)

let string = "ZIP code 10118-0110 (the Empire State Building)."

console.log(!!string.match(/\d{5}-\d{4}/))

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
    Or bends with the remover to remove.
    O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
    But bears it out even to the edge of doom.
    If this be error and upon me proved,
    I never writ, nor no man ever loved.`

console.log(sonnet.split(/\n/).length)

