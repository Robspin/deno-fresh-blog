import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts"
const env = await load()

export const updateAndGetViews = async (): Promise<number> => {
    let views = 0
    try {
        console.log('env:', env)
        const res = await fetch(`${env.DENO_PRISMA_AKIRA_API_URL}/pageviews/BLOG_ROBINSTEEMAN`, { method: "PUT" })
        const data = await res.json()
        views = data.data.views
    } catch (e) {
        console.log(e)
    }
    return views
}
