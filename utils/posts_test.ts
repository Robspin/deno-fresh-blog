import { loadPost, loadPosts } from "./posts.ts"
import { assert, assertEquals } from "$std/testing/asserts.ts"

Deno.test("load_post", async () => {
    const post = await loadPost('hello')
    assert(post)
    assertEquals(post.id, 'hello')
})

Deno.test("Load non existant post", async () => {
    const post = await loadPost('this post does not exist')
    assertEquals(post, null)
})

Deno.test("List posts", async () => {
    const posts = await loadPosts()
    assert(posts.length >= 1)
    const last = posts.at(-1)
    assert(last)
    assertEquals(last.id, 'hello')
})
