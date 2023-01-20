import light from '../images/light.svg'
import dark from '../images/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Content(){

    const {theme} = useContext(ThemeContext)

    return(
        <main className={theme}>
            <div>
                <h1>Welcome to my website</h1>
                <p>Dark mode workshop</p>
            </div>
            <img src={theme==='dark'?dark:light} alt='logo'/>
        </main>
    )
}

export default Content