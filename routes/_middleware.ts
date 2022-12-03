import { MiddlewareHandlerContext } from "$fresh/server.ts"
import { parse } from "https://esm.sh/accept-language-parser@1.5.0"
import { getCookies } from "$std/http/cookie.ts"
import { State } from "../utils/state.ts"
import { themeSignal } from "../utils/themeSignal.ts"

export function handler(req: Request, ctx: MiddlewareHandlerContext<State>) {
    ctx.state.locales = []
    ctx.state.theme = 'dark'

    const cookies = getCookies(req.headers)
    const themeCookie = cookies['blog.robinsteeman--theme']
    if (themeCookie) {
        ctx.state.theme = themeCookie
        themeSignal.value = themeCookie
    }

    if (cookies.locale) ctx.state.locales.push(cookies.locale)

    const locales = parse(req.headers.get("accept-language") || undefined)
    for (const lang of locales) {
        let locale = lang.code
        if (lang.region) {
            locale = `${lang.code}-${lang.region}`
        }
        ctx.state.locales.push(locale)
    }
    if (ctx.state.locales.length === 0) ctx.state.locales.push("en")
    return ctx.next()
}
