import { AppProps } from "$fresh/server.ts"
import { Head as HtmlHead } from "$fresh/src/runtime/head.ts"

const Head = () => {
    return (
        <HtmlHead>
            <title>Robin's fresh blog</title>
            <meta property="og:site_name" content="Robin's fresh blog"/>
            <meta property="og:title" content="Robin's fresh blog"/>
            <meta property="og:description" content="Blog and top lists" />
            <meta property="og:image" itemProp="image"
                  content="https://blog.robinsteeman.com/kaneda.png"/>
            <meta property="og:type" content="website"/>
            <meta property="og:updated_time" content="1670106416090"/>
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
