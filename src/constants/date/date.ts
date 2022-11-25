export const currentDate = {
    day: new Date().getDate(),
    shortMonthRu: new Date().toLocaleString('ru', {
        month: 'short'
    }),
    longMonthRu: new Date().toLocaleString('ru', {
        month: 'long'
    }),
    shortMonthEng: new Date().toLocaleString('eng', {
        month: 'short'
    }),
    longMonthEng: new Date().toLocaleString('eng', {
        month: 'long'
    }),
    year: new Date().getFullYear(),
}