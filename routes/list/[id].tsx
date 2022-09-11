import { Handlers } from "$fresh/src/server/types.ts"
import { State } from "../../utils/state.ts"
import { loadList } from "../../utils/lists.ts"
import { asset } from "$fresh/src/runtime/utils.ts"

import Container from "../../components/container.tsx"
import ReadMoreButton from "../../islands/readMoreButton.tsx"


export const handler: Handlers<State> = {
    async GET(_req, ctx) {
        const { id } = ctx.params
        const list = await loadList(id)

        return ctx.render({ list, ...ctx.state })
    }
}

const clampStyles = `.robspin-line-clamp {
                     display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;  
                      overflow: hidden;
                }`

const ListPage = (props) => {
    const { list, theme } = props.data

    return (
        <Container theme={theme}>
            <style dangerouslySetInnerHTML={{__html: clampStyles}}/>
            <h1 className="text-5xl mt-12 font-bold">{list.title}s</h1>
            <div className="pt-16 border-b">
                {list.content.map((l, i) => (
                    <div className="py-8 border-b flex" key={i}>
                        <a href={`https://www.imdb.com/title/${l.link}`} target="_blank" className="min-w-[128px] grow shrink-0">
                            <img width="128" height="200" className="min-w-32 rounded overflow-hidden object-cover" src={asset(`${list.assetPrefix}/${l.name.replaceAll(' ', '-')}.jpg`)} />
                        </a>
                        <div>
                            <div className="flex justify-between mx-2">
                                <h3 className="text-xl">{i + 1}. <span className="font-bold tracking-wide">{l.name}</span></h3>
                                <p>IMDB: <span className="font-bold">{l.score}</span></p>
                            </div>
                            <p id={`description${i}`} className="flex text-secondary mt-2 mx-2 robspin-line-clamp text-gray-400">{l.description}</p>
                            <ReadMoreButton i={i} />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ListPage
