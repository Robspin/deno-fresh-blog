/** @jsx h */
import { h } from "preact"
import { useState } from "preact/hooks"
import { tw } from "twind"

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
        <form method="post" className={tw`space-x-2 mt-4`}>
            <label htmlFor="locale">Locale: </label>
            <input onInput={(e) => setLocale(e.currentTarget.value)} type="text" name="locale" id="locale" className={tw`border px-2 py-1`}/>
            <button type="submit"
                    className={tw`px-2 py-1 bg-blue(500 hover:700 disabled:200)  text-white font-medium`}>Save
            </button>
            {language &&
                <dl class={tw`mt-4`}>
                    <dd class={tw`font-bold`}>Language</dd>
                    <dt>{language}</dt>
                    <dd class={tw`font-bold`}>Time sample</dd>
                    <dt>{timeSample}</dt>
                </dl>}
        </form>
    )
}
