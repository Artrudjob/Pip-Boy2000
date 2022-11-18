export const currentDate = {
    day: new Date().getDay(),
    shortMonth: new Date().toLocaleString('ru', {
        month: 'short'
    }),
    longMonth: new Date().toLocaleString('ru', {
        month: 'long'
    }),
    year: new Date().getFullYear(),
}