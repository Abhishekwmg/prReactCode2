import { useState } from "react"

export default function Settings() {

    const [isChecked, setIsChecked] = useState(false);


    return <>
        <label>Advanced Settings</label>
        <input checked={isChecked} type="checkbox" onChange={e => setIsChecked(e.target.checked)} />
        {
            isChecked && <>
                <button>Save</button>
                <button>Edit</button>
                <button>Delete</button>
            </>
        }
    </>
}