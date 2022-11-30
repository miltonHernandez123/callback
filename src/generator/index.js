function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate (["oscar","rosaly","amenlia","maria"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);