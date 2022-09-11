import { Post } from "../utils/posts.ts"


const PostEntry = (props: { post: Post, type: 'blog' | 'list' }) => {
    const { title, publishedAt, id, snippet } = props.post
    const { type } = props
    console.log(id)
    // @ts-ignore
    const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short' })

    return (
        <li className="border-t">
            <a href={`/${type}/${id}`} className="flex py-2 gap-4 group">
                <div>{dateFormatter.format(publishedAt)}</div>
                <div>
                    <h2 className="font-bold text-xl group-hover:text-underline">{title}</h2>
                    <p className="text-gray-600">{snippet}</p>
                </div>
            </a>
        </li>
    )
}

export default PostEntry
