import { Handlers } from "$fresh/src/server/types.ts"
import { State } from "../../utils/state.ts"
import { loadList } from "../../utils/lists.ts"
import Container from "../../components/container.tsx"


export const handler: Handlers<State> = {
    async GET(_req, ctx) {
        const { id } = ctx.params
        const list = await loadList(id)

        return ctx.render({ list, ...ctx.state })
    }
}

const ListPage = (props) => {
    const { list, theme } = props.data

    return (
        <Container theme={theme}>
            {list.content.map((l) => <div>{l.name}</div>)}
        </Container>
    )
}

export default ListPage
