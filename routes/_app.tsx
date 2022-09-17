import { AppProps } from "$fresh/server.ts"
import { Head as HtmlHead } from "$fresh/src/runtime/head.ts"

const Head = () => {
    return (
        <HtmlHead>
            <title>Robin's fresh blog</title>
            <meta content="Blog and top lists" name="description" />
            <link rel="icon" href="/kaneda.png" />
        </HtmlHead>
    )
}

export default function App({ Component }:  AppProps) {
    return (
        <div>
        <Head />
            <body>
                <Component />
            </body>
        </div>
    );
}
