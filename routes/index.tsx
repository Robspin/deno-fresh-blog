import { Handlers, PageProps } from "$fresh/server.ts"
import { loadPosts, Post } from "../utils/posts.ts"
import { List, loadLists } from "../utils/lists.ts"
import PostEntry from '../components/postEntry.tsx'
import {State} from "../utils/state.ts"
import Container from "../components/container.tsx"

export const handler: Handlers<{ posts: Post[], lists: List[], theme: string }> = {
    async GET(_req, ctx) {
        const posts = await loadPosts()
        const lists = await loadLists()
        return ctx.render({ posts, lists, theme: ctx.state.theme })
    }
}

export default function Home(props: PageProps<{ posts: Post[], lists: List[], theme: string }>) {
    const { posts, lists, theme } = props.data

      return (
        <Container theme={theme}>
            <h1 className="text-5xl mt-12 font-bold font-sora tracking-wide">Blog</h1>
            <ul className="mt-8">
                {posts.map((post) => <PostEntry post={post} type="blog" />)}
            </ul>
            <h1 className="text-5xl mt-12 font-bold font-sora tracking-wide">Top lists</h1>
            <ul className="mt-8">
                {lists.map((list) => <PostEntry post={list} type="list"/>)}
            </ul>
        </Container>
      )
}
