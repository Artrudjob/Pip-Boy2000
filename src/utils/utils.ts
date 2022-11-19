export function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() < 10? "0" : ""}${date.getMinutes()}`;
}