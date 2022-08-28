/** @jsx h */
import { h } from 'preact'
import { tw } from "@twind"
import { Head as HtmlHead, asset } from '$fresh/runtime.ts'
import { PageProps } from "$fresh/src/server/types.ts"
import { ComponentChildren } from "https://esm.sh/v92/preact@10.10.6/src/index.d.ts"
import DarkModeSwitch from "../islands/darkModeSwitch.tsx"

const Head = () => {
    return (
        <HtmlHead>
        <title>Robin's fresh blog</title>
        <meta content="muh blog and top lists" name="description" />
        <link rel="icon" href="/favicon.ico" />
        </HtmlHead>
    )
}

const Navigation = () => {
    return (
    <div class={tw`h-20 flex items-center`}>
        <a href="/" >
            <img src={asset('/kaneda.png')} class={tw`rounded-full h-14`} />
        </a>
        <DarkModeSwitch />
    </div>
    )
}

const Container = ({ children }: { children: ComponentChildren }) => {

    return (
            <div class={tw`dark theme-div`}>
                <Head />
                <div class={tw`p-4 mx-auto max-w-screen-md dark:(bg-black text-white) min-h-screen`}>
                <Navigation />
                    <div class={tw`dark:(bg-black text-white)`}>
                        {children}
                    </div>
                </div>
            </div>
        )
}

export default Container
