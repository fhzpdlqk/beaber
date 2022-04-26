import React, { useState, useRef, useEffect } from "react"
import './FindSecond.css'
import Canvas from './canvas/Canvas'

const FindSecond = () => {
    const [problem, setProblem] = useState(1)
    const [answer, setAnswer] = useState([[],
        [false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false]])
    const [score, setScore] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const close = () =>{
        setShowPopup(false)
    }

    const onClickProblem = (number) => {
        setProblem(number)
    }
    const result = [[],
        [true,true,true,true,true,true,true,true],
        [true,false,true,true,true,true,false,false],
        [false,false,true,false,true,false,false,false],
        [false,false,true,false,false,false,false,false]
    ]
    const submit = () => {
        console.log(answer)
        var tempscore = 0
        for(let i = 1; i < answer.length; i++){
            var check = true
            for(let j = 0; j < answer[i].length; j++){
                if(answer[i][j] != result[i][j]) check = false
            }
            if(check == true) tempscore += 13 / 4
        }
        setScore(tempscore)
        setShowPopup(true)
    }
    return (
        <div>
            <h1>
                18. 2등을 찾아라! (13점)
            </h1>
            <div className='contents'>
                <p>KOI학교에 다니는 8명의 학생들은 4일 동안 팔씨름 경기를 치뤘다. 각 학생들의 팔씨름 실력은 서로 다른
                고정되어 있는 값이며, 두 학생간의 팔씨름 경기에서는 반드시 실력이 더 높은 학생이 승리했다. 유감스럽게
                도, 우리는 각 학생의 팔씨름 실력이 정확히 얼마인지는 모른다.</p>
                <p> 여러분에게는 </p>
                <ul>
                    <li>1일차까지 있었던 경기들의 결과</li>
                    <li>2일차까지 있었던 경기들의 결과</li>
                    <li>3일차까지 있었던 경기들의 결과</li>
                    <li>4일차까지 있었던 경기들의 결과</li>
                </ul>
                <p>
                    가 차례로 주어진다. 여러분은 4가지 시점(1, 2, 3, 4일차가 종료된 시점) 각각에 대해 해당 시점까지의
                    정보를 바탕으로 실력이 두 번째로 높은 학생이 될 수 있는 사람을 전부 구해야 한다. (즉, 여러분은 4개의
                    부분문제를 해결하는 것이라 볼 수 있다.)
                </p>
                <p>
                    입력은 방향 그래프의 형태로 주어지며, 실제로 발생 가능한 경우만 주어진다. (예를 들어, 1번 학생이 2번
                    학생을 이기고, 2번 학생이 1번 학생이 이긴 경우는 주어지지 않는다.) 정점에는 1부터 8까지의 번호가 붙어
                    있으며, 정점 x에서 y로의 간선이 있음은 학생 x가 학생 y를 이겼음을 의미한다.
                </p>
                <p>
                    어떤 학생을 선택하기 위해서는 해당되는 번호의 정점을 클릭하면 된다. 이미 선택된 학생과 대응되는
                    정점을 다시 클릭하면 선택이 해제된다. 선택이 되었으면 정점이 실선으로, 선택이 되지 않았으면 정점이
                    점선으로 표시됨을 참고하라. 제출을 하지 않으면 무효화됨에 유의하라. "다시 하기" 버튼을 누르면 어떤
                    순간이라도 문제들을 처음 부터 다시 해결할 수 있다.
                </p>
                <h3> 채점방식 </h3>
                <p>
                    각 부분문제는 모두 (문제의 전체 배점의 25%)를 지닌다. 즉, 1, 2, 3, 4일차가 종료된 시점 각각에 대해
                    실력이 두 번째로 높은 학생이 될 수 있는 사람을 올바르게 전부 구할 때 마다 (문제 배점의 25%)를 획득하게
                    된다.
                </p>
            </div>
            <div className="div_canvas">
                <Canvas 
                    setProblem = {setProblem} 
                    problem = {problem}
                    answer = {answer}
                    setAnswer = {setAnswer}
                />
                <div className="div_button">
                    <button className="button" onClick={() => onClickProblem(1)}> 1 일차 </button>
                    <button className="button" onClick={() => onClickProblem(2)}> 2 일차 </button>
                    <button className="button" onClick={() => onClickProblem(3)}> 3 일차 </button>
                    <button className="button" onClick={() => onClickProblem(4)}> 4 일차 </button>
                    <button className="button" onClick={() => submit()}>제출</button>
                </div>
            </div>

            {showPopup ? (
                <div className="modal">
                    <section>
                        <header>
                            결과
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>{score}점 입니다.</main>
                        <footer>
                            <button className="close" onClick={close}>
                                close
                            </button>
                        </footer>
                    </section>
                </div>
            ) : null}
        </div>
    )
}
export default FindSecond