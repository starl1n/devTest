

export const useParseData = ( date: string ) => {

    const parseDate = Date.parse(date);
    const newDate = new Date(parseDate)

    return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()} - ${newDate.getHours()} : ${newDate.getMinutes()}`

}