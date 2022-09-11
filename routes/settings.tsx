import { setCookie } from "$std/http/cookie.ts"
import { Handlers, PageProps } from "$fresh/server.ts"
import { State } from "../utils/state.ts"
import LocaleSelector from "../islands/LocaleSelector.tsx"
import Container from "../components/container.tsx"


export const handler: Handlers<State, State> = {
    GET(_req, ctx) {
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
    const { locales, theme } = props.data


    return (
    <Container theme={theme}>
        <h1 className="text-5xl mt-12 font-bold">Settings</h1>
        <p className="mt-12">Your current locale is <b>{locales[0]}</b></p>
        <LocaleSelector />
    </Container>
    )
}
