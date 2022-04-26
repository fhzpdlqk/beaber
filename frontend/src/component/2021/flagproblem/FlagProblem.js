import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './FlagProblem.css'

const FlagProblem = () => {
    const [ProblemNumber, setProblemNumber] = useState(1)
    const [Answer, setAnswer] = useState([[],[],[],[],[],[]])
    const [Score, setScore] = useState(0)
    const [showPopup, setShowPopup] = useState(false)

    const problemArray = ['C','E', 'B','D','A','E','C','D','E','D','E','D','E','C','C','A','D','A','B','E']
    const problemContent = () => {
        var temp = Answer[ProblemNumber].length == 0 ? (<p>시작점과 끝점 모두 선택하지 않으셨습니다.</p>):
            Answer[ProblemNumber] == 1 ? (<p>끝점을 선택하지 않으셨습니다.</p>):null
        if(ProblemNumber == 0) return (<div className="problem_content"></div>)
        else if(Answer[ProblemNumber].length == 2){
            return (
                <div className="problem_content">
                    <p>문제 {ProblemNumber}. 시작과 끝점을 모두 선택하였습니다.</p>
                </div>
            )
        }
        else if(ProblemNumber == 1){
            return (
                <div className="problem_content">
                    <p>문제 1. 4번째 깃발을 포함하는 구간의 {Answer[ProblemNumber].length == 0 ? '시작': '끝'}을 선택하십시오</p>
                    {temp}
                </div>
            )
        }
        else if(ProblemNumber == 2){
            return (
                <div className="problem_content">
                    <p>문제 2. 11번째 깃발을 포함하는 구간의 {Answer[ProblemNumber].length == 0 ? '시작': '끝'}을 선택하십시오</p>
                    {temp}
                </div>
            )
        }
        else if(ProblemNumber == 3){
            return (
                <div className="problem_content">
                    <p>문제 3. 18번째 깃발을 포함하는 구간의 {Answer[ProblemNumber].length == 0 ? '시작': '끝'}을 선택하십시오</p>
                    {temp}
                </div>
            )
        }
        else if(ProblemNumber == 4){
            return (
                <div className="problem_content">
                    <p>문제 4. 9번째 깃발을 포함하는 구간의 {Answer[ProblemNumber].length == 0 ? '시작': '끝'}을 선택하십시오</p>
                    {temp}
                </div>
            )
        }
        else if(ProblemNumber == 5){
            return (
                <div className="problem_content">
                    <p>문제 5. 13번째 깃발을 포함하는 구간의 {Answer[ProblemNumber].length == 0 ? '시작': '끝'}을 선택하십시오</p>
                    {temp}
                </div>
            )
        }
    }
    const solveAnswer = (index) => {
        var tempAnswer = [...Answer]
        if(tempAnswer[ProblemNumber].length < 2){
            tempAnswer[ProblemNumber].push(index)
            setAnswer(tempAnswer)
        }
    }
    const resetOne = () => {
        var temp = [...Answer]
        temp[ProblemNumber] = []
        setAnswer(temp)
    }
    const resetAll = () => {
        setAnswer([[],[],[],[],[],[]])
    }
    const isSetColor = (index) => {
        if(Answer[ProblemNumber].length == 1){
            if(index == Answer[ProblemNumber][0]){
                return true
            }
            return false
        }
        else if(Answer[ProblemNumber].length == 2){
            if((Answer[ProblemNumber][0] <= index && index <= Answer[ProblemNumber][1]) || (Answer[ProblemNumber][1] <= index && index <= Answer[ProblemNumber][0])){
                return true
            }
        }
        return false
    }
    const submit = () => {
        var answer = [0,4,8,5,6,6]
        var check = [0,4,11,18,9,13]
        var score = 0
        for(let i = 1; i <= 5; i++){
            var st = Math.min(Answer[i][0],Answer[i][1])
            var ed = Math.max(Answer[i][0],Answer[i][1])
            var checkflag = [false,false,false,false,false]
            for(let j = st; j<= ed; j++){
                checkflag[problemArray[j].codePointAt(0) - 'A'.codePointAt(0)] = true
            }
            var cnt = 0
            for(let j = 0; j < 5; j++){
                if(checkflag[j]) cnt+=1
            }
            if(ed - st == answer[i] && st <= check[i]-1 && check[i]-1 <= ed && cnt == 5){
                score += 2.4
            }
        }
        setScore(Math.round(score*10)/10)
        setShowPopup(true)
    }
    const close = () =>{
        setShowPopup(false)
    }
    return (
        <div>
            <h1>
                16. 깃발 모으기 (12점)
            </h1>
            <div className='contents'>
                <p>다섯 종류(종류 A,B,C,D,E)의 깃발 20개가 아래와 같이 일렬로 서 있다. 각 깃발에는 해당 깃발의 종류를 나타내는 문자가 써있다.<br/></p>
                <p>여러분에게 총 5개의 부분문제가 주어질 것이다. 각 부분문제는 다음과 같다:</p>
                <ul>
                    <li>
                        주어지는 지정된 깃발에 대해 그 깃발의 위치를 포함하고, 모든 종류의 깃발을 다 모을 수 있는 최소 개수의 연속된 깃발을 선택해야 한다.
                    </li>
                </ul>
                <p>깃발의 선택은 시작점과 끝점을 차례로 클릭하여 할 수 있다. 예를 들어, 3,4,5,6,7번째 깃발을 선택하기 위해서는 3번째 깃발과 7번째 깃발을 차례로 클릭하면 된다.<br/></p>
                <p>제출을 하지 않으면 무효화됨에 유의하라. "전체 다시 하기" 버튼을 누르면 어떤 순간이라도 모든 부분 문제들을 처음 부터 다시 해결할 수 있다.<br/></p>
                <p>어떤 부분 문제에 대해 선택한 답안을 초기화 하고자 한다면, "이 문제 다시 하기" 버튼을 누르면 된다.<br/></p>
                <h3>채점 방식</h3>
                제출한 답안의 점수는 (최소 개수의 연속된 깃발을 선택하여 해결한 문제의 수)와 (전체 배점의 20%)의 곱으로 계산된다.
            </div>
            <div className="problem">
                <div className="problem_btn">
                    <div className="problem_list">
                        <button onClick = {() => setProblemNumber(1)}>1번문제{Answer[1].length ==2 ? "(V)" : "(X)"}</button>
                        <button onClick = {() => setProblemNumber(2)}>2번문제{Answer[2].length ==2 ? "(V)" : "(X)"}</button>
                        <button onClick = {() => setProblemNumber(3)}>3번문제{Answer[3].length ==2 ? "(V)" : "(X)"}</button>
                        <button onClick = {() => setProblemNumber(4)}>4번문제{Answer[4].length ==2 ? "(V)" : "(X)"}</button>
                        <button onClick = {() => setProblemNumber(5)}>5번문제{Answer[5].length ==2 ? "(V)" : "(X)"}</button>
                    </div>
                    <div className="feature_btn">
                        <button onClick = {() => resetOne()}>이 문제 다시하기</button>
                        <button onClick = {() => resetAll()}>전체 다시하기</button>
                        <button onClick = {() => submit()}> 채점하기 </button>
                    </div>
                </div>
                {problemContent()}
                <div className="flag">
                    {problemArray.map((data, index) => {return (<button className={isSetColor(index) ? 'flag_btn':'flag_btn2'} onClick={() => {solveAnswer(index)}}>{data}</button>)})}
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
                        <main>{Score}점 입니다.</main>
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
export default FlagProblem