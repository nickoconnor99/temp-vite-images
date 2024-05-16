import { useGlobalContext } from "./context";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

function ThemeToggle() {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext();

    console.log(isDarkTheme)
    return ( <div className="theme">
        <button className="theme_button" onClick={toggleDarkTheme}>
        {isDarkTheme ?<BsFillMoonFill></BsFillMoonFill> :   <BsFillSunFill></BsFillSunFill>}
      </button>
        </div> );
}

export default ThemeToggle;