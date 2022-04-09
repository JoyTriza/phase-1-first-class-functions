function receivesAFunction (love) {
    love();
}

function returnsANamedFunction() {
    return function fn() {
        console.log("This is a named function");
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("This an anonymous function");
}