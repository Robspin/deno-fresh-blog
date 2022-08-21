import { extract } from '$std/encoding/front_matter.ts'

export interface Post {
    id: string
    title: string
    publishedAt: Date
    snippet: string
    content: string
}

export const loadPost = async (id: string): Promise<Post | null> => {
    let text
    try {
        text = await Deno.readTextFile(`./data/posts/${id}.md`)
    } catch (err) {
        if (err instanceof Deno.errors.NotFound) return null
        throw err
    }

    const { attrs, body } = extract(text)
    const params = attrs as Record<string, string>
    const publishedAt = new Date(params.published_at)
    return {
        id,
        title: params.title,
        publishedAt,
        snippet: params.snippet,
        content: body
    }

}

export const loadPosts = async (): Promise<Post[]> => {
    const promises = []

    for await (const entry of Deno.readDir('./data/posts')) {
        const id = entry.name.slice(0, -3)
        promises.push(loadPost(id))
    }

    const posts = await Promise.all(promises) as Post[]
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    return posts
}
