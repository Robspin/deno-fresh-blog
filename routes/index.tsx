/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import { Handlers, PageProps } from "$fresh/server.ts"
import { loadPosts, Post } from "../utils/posts.ts"
import Container from "../components/container.tsx"
import PostEntry from '../components/postEntry.tsx'

export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await loadPosts()
        return ctx.render(posts)
    }
}

export default function Home(props: PageProps<Post[]>) {
    const posts = props.data

  return (
    <Container>
        <h1 class={tw`text-5xl mt-12 font-bold`}>Flatcircle blog</h1>
        <ul class={tw`mt-8`}>
            {posts.map((post) => <PostEntry post={post} />)}
        </ul>
    </Container>
  )
}
