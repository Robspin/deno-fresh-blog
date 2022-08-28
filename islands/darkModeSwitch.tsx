/** @jsx h */
import { h } from "preact"
import { tw } from "twind"


const DarkModeSwitch = () => {
    const changeTheme = () => {
        const div = document.querySelector('.theme-div') as Element
        if (div.classList.contains('dark')) {
            div.classList.remove('dark')
        } else {
            div.classList.add('dark')
        }
    }

    return <div class={tw`p-2 cursor-pointer ml-auto select-none hover:scale-125 transition-transform`} onClick={changeTheme}>🦕</div>
}

export default DarkModeSwitch
