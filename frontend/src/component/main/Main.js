import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Main = () => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li><button onClick={() => {navigate('/2021')}}>2021</button></li>
            </ul>
        </div>
    )
}
export default Main