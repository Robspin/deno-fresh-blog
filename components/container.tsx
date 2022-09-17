import { asset } from '$fresh/runtime.ts'
import { ComponentChildren } from "https://esm.sh/v92/preact@10.10.6/src/index.d.ts"
import DarkModeSwitch from "../islands/darkModeSwitch.tsx"
import GithubLogo from "../islands/githubLogo.tsx"


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
                    <div className="p-4 mx-auto max-w-screen-md flex flex-col min-h-screen min-w-screen">
                    <Navigation />
                        <main data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
                            {children}
                        </main>
                    <footer className="mt-auto pb-10 pt-20 flex justify-between">
                        <ul className="flex flex-col">
                            <li><a className="hover:underline" href="https://www.robinsteeman.com" target="_blank">Portfolio</a></li>
                            <li><a className="hover:underline" href="https://three.robinsteeman.com" target="_blank">ThreeJS modelviewer</a></li>
                        </ul>
                        <ul className="flex flex-col">
                            <li className="hover:underline">
                                <a href="https://fresh.deno.dev" target="_blank" className="flex items-center">
                                    Built with
                                    <img className="ml-2" width="20" height="20" src={asset('/logo.svg')} alt="Made with Fresh" />
                                </a>
                            </li>
                            <li className="ml-auto hover:underline">
                                <a href="https://github.com/Robspin/deno-fresh-blog" target="_blank" className="flex items-center">
                                    Source
                                    <div className="ml-2">
                                        <GithubLogo theme={theme} />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </footer>
                    </div>
                </div>
            </div>
        )
}

export default Container
