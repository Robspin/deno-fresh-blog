import { useState, useEffect } from "preact/hooks"

const ReadMoreButton = ({ i }: { i: number }) => {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const p = document.getElementById(`description${i}`)
        const btn = document.getElementById(`readMore${i}`)
        if (!p || !btn) return
        console.log(p.innerText.length < 190)
        if (p.innerText.length > 190) btn.classList.remove('hidden')
    }, [])

    const readMore = () => {
        const p = document.getElementById(`description${i}`)
        if (!p) return
        console.log(p.innerText.length)
        p.classList.toggle('robspin-line-clamp')
        setExpanded(prev => !prev)
    }

    return <button id={`readMore${i}`} className="hover:underline m-2 hidden focus:outline-none" onClick={readMore}>Read {!expanded ? 'more' : 'less'}</button>
}

export default ReadMoreButton
