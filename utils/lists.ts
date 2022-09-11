export interface List {
    id: string
    title: string
    publishedAt: Date
    snippet: string
    content: any[]
}

export const loadLists = async (): Promise<List[]> => {
    const JSONList = await Deno.readTextFile('./data/lists.json')
    const lists = JSON.parse(JSONList).lists

    lists.forEach((list: List) => {
        list.id = list.title.replaceAll(' ', '-')
        list.publishedAt = new Date(list.publishedAt)
    })

    lists.sort((a: List, b: List) => b.publishedAt.getTime() - a.publishedAt.getTime())
    return lists
}

export const loadList = async (id: string): Promise<List> => {
    const JSONList = await Deno.readTextFile('./data/lists.json')
    const lists = JSON.parse(JSONList).lists
    const index = lists.findIndex((l: List) => l.title === id.replaceAll('-', ' '))
    return lists[index]
}
