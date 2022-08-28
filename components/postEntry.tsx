/** @jsx h */
import { h } from 'preact'
import { tw } from "@twind"
import { Post } from "../utils/posts.ts"


const PostEntry = (props: { post: Post }) => {
    const { title, publishedAt, id, snippet } = props.post
    // @ts-ignore
    const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' })

    return (
        <li class={tw`border-t`}>
            <a href={`/blog/${id}`} class={tw`flex py-2 gap-4 group`}>
                <div>{dateFormatter.format(publishedAt)}</div>
                <div>
                    <h2 class={tw`font-bold text-xl group-hover:text-underline`}>{title}</h2>
                    <p class={tw`text-gray-600`}>{snippet}</p>
                </div>
            </a>
        </li>
    )
}

export default PostEntry
