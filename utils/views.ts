export const updateAndGetViews = async (): Promise<number> => {
    let views = 0
    try {
        const res = await fetch(`${Deno.env.get("DENO_PRISMA_AKIRA_API_URL")}/pageviews/BLOG_ROBINSTEEMAN`, { method: "PUT" })
        const data = await res.json()
        views = data.data.views
    } catch (e) {
        console.log(e)
    }
    return views
}
