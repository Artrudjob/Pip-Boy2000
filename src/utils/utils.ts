export function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() < 10? "0" : ""}${date.getMinutes()}`;
}

export async function printedText(text: string, setValue: (s: string) => void) {
    let res: string[][] | undefined = [];
    for (let i = 0; i < text.length; i++) {
        res.push(Array.from(text[i]));
        setValue(res.join(''));

        await timeout(50);
    }
}