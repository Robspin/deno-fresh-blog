import { useState } from "preact/hooks"

// @ts-ignore
const localeNames = new Intl.DisplayNames("en", {type: "language"})
const date = new Date()

export default function LocaleSelector() {
    const [locale, setLocale] = useState("")

    let language: string | undefined = undefined
    let timeSample: string | undefined = undefined

    if (locale) {
        try {
            // @ts-ignore
            const loc = new Intl.Locale(locale)
            language = localeNames.of(loc.language)
            // @ts-ignore
            const dateFmt = new Intl.DateTimeFormat(locale, { dateStyle: "full" })
            timeSample = dateFmt.format(date)
        } catch {
            // ignore error
        }
    }

    return (
        <form method="post" className="space-x-2 mt-4">
            <label htmlFor="locale">Locale: </label>
            <input onInput={(e) => setLocale(e.currentTarget.value)} type="text" name="locale" id="locale" className="border px-2 py-1"/>
            <button type="submit"
                    className="px-2 py-1 bg-blue(500 hover:700 disabled:200)  text-white font-medium">Save
            </button>
            {language &&
                <dl className="mt-4">
                    <dd className="font-bold">Language</dd>
                    <dt>{language}</dt>
                    <dd className="font-bold">Time sample</dd>
                    <dt>{timeSample}</dt>
                </dl>}
        </form>
    )
}
