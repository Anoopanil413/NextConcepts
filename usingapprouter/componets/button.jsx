"use client"
import { useState } from 'react';

export default function Buttonfun(){
    const [isActive, setActive] = useState(false);

    return(
        <>
        <button className="bg-indigo-500 ..." onClick={() => setActive(!isActive)}>
  Save changes
</button>
{isActive && <p>Component is active!</p>}

        </>
    )
}

