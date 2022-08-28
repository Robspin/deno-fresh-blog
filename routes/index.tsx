/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import { Handlers, PageProps } from "$fresh/server.ts"
import { loadPosts, Post } from "../utils/posts.ts"
import { List, loadLists } from "../utils/lists.ts"
import Container from "../components/container.tsx"
import PostEntry from '../components/postEntry.tsx'

export const handler: Handlers<{ posts: Post[], lists: List[] }> = {
    async GET(_req, ctx) {
        const posts = await loadPosts()
        const lists = await loadLists()
        return ctx.render({ posts, lists})
    }
}

export default function Home(props: PageProps<{ posts: Post[], lists: List[] }>) {
    const { posts, lists} = props.data

  return (
    <Container>
        <h1 class={tw`text-5xl mt-12 font-bold font-sora`}>Blog</h1>
        <ul class={tw`mt-8`}>
            {posts.map((post) => <PostEntry post={post} type="blog" />)}
        </ul>
        <h1 className={tw`text-5xl mt-12 font-bold font-sora`}>Top lists</h1>
        <ul className={tw`mt-8`}>
            {lists.map((list) => <PostEntry post={list} type="list"/>)}
        </ul>
    </Container>
  )
}
