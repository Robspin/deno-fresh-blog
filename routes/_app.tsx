/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps, Handlers } from "$fresh/server.ts"
import Container from '../components/container.tsx'
import { State } from "../utils/state.ts"

export const handler: Handlers<State, State> = {
    GET(_req, ctx) {
        console.log(ctx.state)
        return ctx.render(ctx.state)
    }
}

export default function App({ Component }:  AppProps) {

    return (
            <Container theme="dark">
                <Component />
            </Container>
    );
}
