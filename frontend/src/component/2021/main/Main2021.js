import React, { useState } from "react"
import Header from '../header/Header'
import StackSort from "../stacksort/StackSort"
import FlagProblem from "../flagproblem/FlagProblem"
import River from '../river/River'
import FindSecond from "../findSecond/FindSecond"
import Stone from '../stone/Stone'
import Rock from '../rock/Rock'
import './Main2021.css'

const Main2021 = () => {
    const [problem, setProblem] = useState(0)
    return (
        <div>
            <Header setProblem = {setProblem}></Header>
            <div className="main">
            {problem == 15 ? <StackSort/>: null}
            {problem == 16 ? <FlagProblem/>: null}
            {problem == 17 ? <River/>: null}
            {problem == 18 ? <FindSecond/>: null}
            {problem == 19 ? <Stone/>: null}
            {problem == 20 ? <Rock/> : null}
            </div>
        </div>
    )
}
export default Main2021