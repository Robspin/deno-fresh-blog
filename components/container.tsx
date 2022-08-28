/** @jsx h */
import { h } from 'preact'
import { tw } from "@twind"
import { Head as HtmlHead, asset } from '$fresh/runtime.ts'
import { ComponentChildren } from "https://esm.sh/v92/preact@10.10.6/src/index.d.ts"
import DarkModeSwitch from "../islands/darkModeSwitch.tsx"

const Head = () => {
    return (
        <HtmlHead>
        <title>Robin's fresh blog</title>
        <meta content="muh blog and top lists" name="description" />
        <link rel="icon" href="/kaneda.png" />
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
            <div class={tw`dark theme-div font-sans`}>
                <Head />
                <div class={tw`dark:(bg-gray-800 text-white) min-h-screen min-w-screen`}>
                    <div class={tw`p-4 mx-auto max-w-screen-md`}>
                    <Navigation />
                        <div >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Container
