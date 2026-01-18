import Layout from "./Layout"
import Sidebar from "./Sidebar"
import { ThemeTwoContext } from "./ThemeTwoContext.js"
import './style.css'

export default function MainTheme() {
    return <div className="parent">
        <ThemeTwoContext.Provider value="red">
            <Layout />
            <Sidebar />
        </ThemeTwoContext.Provider>
    </div >
}