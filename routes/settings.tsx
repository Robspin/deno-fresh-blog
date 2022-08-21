/** @jsx h */
import { h } from 'preact'
import { tw } from "@twind"
import { setCookie } from "$std/http/cookie.ts"
import { Handlers, PageProps } from "$fresh/server.ts"
import { State } from "../utils/state.ts"


export const handler: Handlers<State, State> = {
    async GET(_req, ctx) {
        return ctx.render(ctx.state)
    },

    async POST(req) {
        const form = await req.formData()
        const locale = form.get("locale")
        const headers = new Headers({
            location: "/settings"
        })
        if (typeof locale === "string") {
            const cookie = {
                name: "locale",
                value: locale,
                maxAge: 60 * 60 * 24 * 365
            }
            setCookie(headers, cookie)
        }

        return new Response("", {
            status: 303,
            headers
        })
    }
}

export default function SettingsPage(props: PageProps<State>) {
    const { locales } = props.data


    return (
    <div className={tw`p-4 mx-auto max-w-screen-md`}>
        <h1 className={tw`text-5xl mt-12 font-bold`}>Settings</h1>
        <p class={tw`mt-12`}>Your current locale is <b>{locales[0]}</b></p>
        <form method="post" class={tw`space-x-2 mt-4`}>
            <label htmlFor="locale">Locale: </label>
            <input type="text" name="locale" id="locale" class={tw`border px-2 py-1`} />
            <button type="submit" class={tw`px-2 py-1 bg-blue(500 hover:700 disabled:200) text-white font-medium`}>Save</button>
        </form>
    </div>
    )
}
