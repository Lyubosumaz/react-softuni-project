export function numberGenerator() {
    return Math.random().toString().substr(2, 6);
}

export function indexGenerator() {
    return '_id' + '__' + numberGenerator() + '__' + numberGenerator();
}
