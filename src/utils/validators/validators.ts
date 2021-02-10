

export const required = (value: string) => {
    return value.length ? undefined : 'This field is required'
}


export const maxLenghtCreator = (maxLenght: number) => (value: string) => {
    return value.length > maxLenght ? `Error, maximum characters ${maxLenght}` : undefined
}