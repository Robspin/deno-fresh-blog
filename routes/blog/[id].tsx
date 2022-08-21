/** @jsx h */
import { h } from "preact"
import { Handlers, PageProps } from "$fresh/server.ts"
import { tw } from "@twind"
import { loadPost, Post } from "../../utils/posts.ts"

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

    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <p class={tw`text-gray-600 mt-12`}>{post.publishedAt.toLocaleDateString()}</p>
            <h1 class={tw`text-5xl mt-2 font-bold`}>{post.title}</h1>
            <div class={tw`mt-12`}>{post.content}</div>
        </div>
    );
}
