import { useState } from "react"

export default function Tabs() {

    const [activeIndex, setActiveIndex] = useState(1);


    return <>
        <button onClick={() => setActiveIndex(1)}>Profile</button>
        <button onClick={() => setActiveIndex(2)}>Settings</button>
        <button onClick={() => setActiveIndex(3)}>Security</button>
        <button onClick={() => setActiveIndex(4)}>About</button>

        {activeIndex === 1 && <>
            <h1>My Profile</h1>
            <ul>
                <li>Personal Information</li>
                <li>Profile Picture</li>
                <li>Contact Details</li>
                <li>Activity History</li>
                <li>Connected Accounts</li>
            </ul>
        </>}
        {activeIndex === 2 && <>
            <h1>Account Settings</h1>
            <ul>
                <li>General Settings</li>
                <li>Appearance (Theme/Layout)</li>
                <li>Notifications</li>
                <li>Language & Region</li>
                <li>Accessibility</li>
            </ul>
        </>}
        {activeIndex === 3 && <>
            <h1>Security & Privacy</h1>
            <ul>
                <li>Change Password</li>
                <li>Two Factor Authentication</li>
                <li>Login Activity</li>
                <li>Active Sessions</li>
                <li>Authorized Devices</li>
            </ul>
        </>}
        {activeIndex === 4 && <>
            <h1>About This App</h1>
            <ul>
                <li>About The App</li>
                <li>Version Information</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Licenses/Open Source</li>
            </ul>
        </>}
    </>
}