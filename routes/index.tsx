/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import { Handlers, PageProps } from "$fresh/server.ts"
import { loadPosts, Post } from "../utils/posts.ts"

export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await loadPosts()
        return ctx.render(posts)
    }
}

export default function Home(props: PageProps<Post[]>) {
    const posts = props.data
    console.log(posts)
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <h1 className={tw`text-5xl mt-12 font-bold`}>Flatcircle blog</h1>
        <ul class={tw`mt-8`}>
            {posts.map((post) => <PostEntry post={post} />)}
        </ul>
    </div>
  )
}

const PostEntry = (props: { post: Post }) => {
    const { title, publishedAt, id, snippet } = props.post

    return (
        <li class={tw`border-t`}>
            <a href={`/blog/${id}`} class={tw`flex py-2 gap-4 group`}>
                <div>{publishedAt.toLocaleDateString()}</div>
                <div>
                    <h2 class={tw`font-bold text-xl group-hover:text-underline`}>{title}</h2>
                    <p class={tw`text-gray-600`}>{snippet}</p>
                </div>
            </a>
        </li>
    )
}
