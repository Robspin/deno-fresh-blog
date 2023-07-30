export const getViews = async (): Promise<number> => {
    let views = 0
    try {
        const res = await fetch(`${Deno.env.get("DENO_VIEWS_API_URL")}?key=blog`, { method: "GET" })
        views = await res.json()
    } catch (e) {
        console.log('here: ', e)
    }
    return views
}
