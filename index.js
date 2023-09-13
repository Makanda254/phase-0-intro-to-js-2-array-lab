// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    return appendCat=[...cats,name];
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function prependCat(name){
    return prependCat=[name,...cats];
}

function removeLastCat(){
    return removeLastCat=cats.slice(0,cats.length - 1);
}

function removeFirstCat(name){
    return name=cats.slice(1);
}

