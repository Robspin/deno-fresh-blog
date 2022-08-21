/** @jsx h */
import { h } from "preact"
import { Handlers, PageProps } from "$fresh/server.ts"
import { tw } from "@twind"
import { loadPost, Post } from "../../utils/posts.ts"
import * as gfm from "https://deno.land/x/gfm@0.1.22/mod.ts"

export const handler: Handlers<Post> = {
    async GET(_req, ctx) {
        const { id } = ctx.params
        const post = await loadPost(id)
        if (!post) {
            return new Response("Post | not found", { status: 404 })
        }
        return ctx.render(post)
    }
}

export default function BlogPostPage(props: PageProps) {
    const post = props.data
    // @ts-ignore
    const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' })
    const html = gfm.render(post.content)

    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <p class={tw`text-gray-600 mt-12`}>{dateFormatter.format(post.publishedAt)}</p>
            <h1 class={tw`text-5xl mt-2 font-bold`}>{post.title}</h1>
            <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
            <div class={tw`mt-12` + ' markdown-body'} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
