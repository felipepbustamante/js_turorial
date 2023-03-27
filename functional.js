let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

function addRute(state) {
    let url = "https://example.com/"
    return url + urlify(state);
}

function imperativeUrls(elements) {
    let urls = [];
    elements.forEach( (element) => {
        urls.push(addRute(element));
    });
    return urls;
}


// console.log(imperativeUrls(states));

let mapped = states.map(state => addRute(state));
// console.log(`mapped: ${mapped}`);

function functionalUrls(elements) {
    return elements.map(element =>
        addRute(element));
}

function imperativeSingles(elements){
    let singles = [];
    elements.forEach(function (element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element)
        }
    });

    return singles;
}

function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

function filterDakotas(states) {
    return states.filter(state => state.toLowerCase().includes("dakota"));
}

function filterDakotasRegex(states) {
    return states.filter(state => state.split(/\s+/).length > 1);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function (n) {
        total += n;
    });

    return total;
}

// console.log(imperativeSum(numbers));

let sum = numbers.reduce((total, n) => {return total += n;});

console.log(sum);

function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function (element) {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));

function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}

console.log(functionalLengths(states));