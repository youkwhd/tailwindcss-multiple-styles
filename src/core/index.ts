import { stringCompareCharAt } from "../string"

const tailwindcssMultipleClassParse = (strings: TemplateStringsArray, ...values: any[]): string => {
    let twClass: string = ""
    strings.forEach((_str, index) => {
        twClass += _str

        if (values[index])
            twClass += values[index]
    })

    const twClasses = twClass.split(" ")
    for (let i = 0; i < twClasses.length; i++) {
        if (!twClasses[i].includes(":"))
            continue

        let j = i + 1;
        for (; j < twClasses.length && !stringCompareCharAt(twClasses[j - 1], twClasses[j - 1].length - 1, ")"); j++)
            twClasses[i] += ` ${twClasses[j]}`
        twClasses.splice(i + 1, j - 1)
    }

    for (let i = 0; i < twClasses.length; i++) {
        if (!twClasses[i].includes(":"))
            continue

        let [token, values] = twClasses[i].split(":")
        values = values.replace(/[\(\)]/g, "")

        twClasses.splice(i, 1)
        twClasses.splice(i, 0, ...values.split(" ").map((val) => `${token}:${val}`))
    }

    return twClasses.join(" ")
}

export const t = tailwindcssMultipleClassParse

export default {
    t
}
