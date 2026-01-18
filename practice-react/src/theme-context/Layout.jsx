import { useContext } from 'react'
import { ThemeTwoContext } from './ThemeTwoContext'
import './style.css'

export default function Layout() {

    const theme = useContext(ThemeTwoContext)

    return <h1 style={{ backgroundColor: theme }}>Layout</h1>
}