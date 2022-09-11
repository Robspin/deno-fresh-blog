import { asset } from '$fresh/runtime.ts'
import { ComponentChildren } from "https://esm.sh/v92/preact@10.10.6/src/index.d.ts"
import DarkModeSwitch from "../islands/darkModeSwitch.tsx"


const Navigation = () => {
    return (
    <div className="h-20 flex items-center">
        <a href="/" >
            <img src={asset('/kaneda.png')} className="rounded-full h-14" />
        </a>
        <DarkModeSwitch />
    </div>
    )
}



const Container = ({ children, theme }: { children: ComponentChildren, theme: string }) => {

    return (
            <div className={`${theme} theme-div font-sans`}>
                <div className="dark:(bg-gray-800 text-white) min-h-screen min-w-screen">
                    <div className="p-4 mx-auto max-w-screen-md">
                    <Navigation />
                        <main data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
                            {children}
                        </main>
                    <footer className="mt-20 py-10 flex justify-between">
                        <ul className="flex flex-col">
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">ThreeJS modelviewer</a></li>
                        </ul>
                        <a href="https://fresh.deno.dev" target="_blank" className="flex items-center">
                            Built with
                            <img className="ml-4" width="40" height="40" src={asset('/logo.svg')} alt="Made with Fresh" />
                        </a>
                    </footer>
                    </div>
                </div>
            </div>
        )
}

export default Container
