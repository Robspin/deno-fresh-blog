import { themeSignal } from "../utils/themeSignal.ts"

const DarkModeSwitch = () => {
    const setThemeCookie = (theme: string) => {
        const date = new Date()
        date.setTime(date.getTime()+(180*24*60*60*1000))
        const expires = "; expires="+date.toUTCString()
        document.cookie = "blog.robinsteeman--theme="+ theme + expires+"; path=/"
    }

    const changeTheme = () => {
        const div = document.querySelector('.theme-div') as Element
        if (div.classList.contains('dark')) {
            div.classList.remove('dark')
            setThemeCookie('light')
            themeSignal.value = 'light'
        } else {
            div.classList.add('dark')
            setThemeCookie('dark')
            themeSignal.value = 'dark'
        }
    }

    return <div className="p-2 cursor-pointer ml-auto select-none hover:scale-[115%] transition-transform" onClick={changeTheme}>🦕</div>
}

export default DarkModeSwitch
