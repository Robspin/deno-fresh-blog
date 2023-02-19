import { Handlers, PageProps } from "$fresh/server.ts"
import { updateAndGetViews } from "../utils/views.ts"
import { loadPosts, Post } from "../utils/posts.ts"
import { List, loadLists } from "../utils/lists.ts"
import PostEntry from '../components/postEntry.tsx'
import Container from "../components/container.tsx"

export const handler: Handlers<{ posts: Post[], lists: List[], views: number, theme: string }> = {
    async GET(_req, ctx) {
        const posts = await loadPosts()
        const lists = await loadLists()
        const views = await updateAndGetViews()

        return ctx.render({ posts, lists, views, theme: String(ctx.state.theme) })
    }
}

export default function Home(props: PageProps<{ posts: Post[], lists: List[], views: number, theme: string }>) {
    const { posts, lists, theme, views } = props.data

      return (
        <Container theme={theme} views={views}>
            <h1 className="text-5xl mt-12 font-bold font-sora tracking-wide">Blog</h1>
            <ul className="mt-8">
                {posts.map((post) => <PostEntry post={post} type="post" />)}
            </ul>
            <h1 className="text-5xl mt-12 font-bold font-sora tracking-wide">Top lists</h1>
            <ul className="mt-8">
                {lists.map((list) => <PostEntry post={list} type="list"/>)}
            </ul>
        </Container>
      )
}
