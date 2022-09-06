import { HandlerContext } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts"

export const handler = {
    async POST(req) {
        const url = new URL(req.url)
        const theme = url.searchParams.get('theme')
        const headers = new Headers()

        const cookie = {
            name: "theme",
            value: theme,
            maxAge: 60 * 60 * 24 * 365
        }
        setCookie(headers, cookie)


        return new Response("", {
            status: 303,
            headers
        })
    }
};
