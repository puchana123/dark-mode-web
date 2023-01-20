import { useContext} from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

function Title(){

    const {theme,setTheme} = useContext(ThemeContext)

    function toggleSwitch(){
        setTheme(
            theme === 'light'?'dark':'light'
        )
    }

    return(
        <header className={theme}>
            <span>{theme==='light'?'Light':'Dark'} Mode </span>
            <Switch 
            onChange={toggleSwitch} 
            checked={theme==='dark'}
            uncheckedIcon={false}
            checkedIcon={false}    
            onColor='#FF8B13'
            />
        </header>
    )
}

export default Title