import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Header.css'

const Header = (props) => {
    const setProblem = props.setProblem
    const navigate = useNavigate()
    return (
        <div className="header">
            <button onClick={() => { setProblem(15) }}>15.스택정렬</button>
            <button onClick={() => { setProblem(16) }}>16.깃발 모으기</button>
            <button onClick={() => { setProblem(17) }}>17.강 건너기</button>
            <button onClick={() => { setProblem(18) }}>18.2등을 찾아라!</button>
            <button onClick={() => { setProblem(19) }}>19.바둑돌게임</button>
            <button onClick={() => { setProblem(20) }}>20.가위바위보</button>
        </div>
    )
}
export default Header