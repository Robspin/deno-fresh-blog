/** @jsx h */
import { h } from "preact"
import { Handlers, PageProps } from "$fresh/server.ts"
import { tw } from "@twind"
import { loadPost, Post } from "../../utils/posts.ts"
import * as gfm from "https://deno.land/x/gfm@0.1.22/mod.ts"
import { State } from "../../utils/state.ts"
import Container from "../../components/container.tsx"

interface Data extends State {
    post: Post
}

export const handler: Handlers<Post, State> = {
    async GET(_req, ctx) {
        const { id } = ctx.params
        const post = await loadPost(id)

        if (!post) {
            return new Response("Post | not found", { status: 404 })
        }
        return ctx.render({ ...ctx.state, post })
    }
}

export default function BlogPostPage(props: PageProps<Data>) {
    const { post, locales } = props.data
    // @ts-ignore
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle: 'full' })
    const html = gfm.render(post.content)

    return (
        <Container>
            <p class={tw`text-gray-600 mt-12`}>{dateFormatter.format(post.publishedAt)}</p>
            <h1 class={tw`text-5xl mt-2 font-bold`}>{post.title}</h1>
            <style dangerouslySetInnerHTML={{ __html: `${gfm.CSS} .markdown-body { color: inherit; background: inherit; }` }} />
            <div class={tw`mt-12` + ' markdown-body'} dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
    );
}
