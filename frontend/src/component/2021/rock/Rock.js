import React, { useState, useEffect } from "react"

import './Rock.css'
const Rock = () => {
    const yong = [2,2,1,2,2,0,1,2,0,2,2,0]
    const word = ['바위','가위','보']
    const [first, setFirst] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const [second, setSecond] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const [firstWin, setFirstWin] = useState(0)
    const [secondWin, setSecondWin] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const [result, setResult] = useState(0)

    const close = () =>{
        setShowPopup(false)
    }
    const click = (index) => {
        console.log(first)
        var temp = [...first]
        temp[index] += 1
        if(temp[index] == 3){
            temp[index] = 0
        } 
        setFirst(temp)
    }
    const clickSecond = (index) => {
        var temp = [...second]
        temp[index] += 1
        if(temp[index] == 3){
            temp[index] = 0
        } 
        setSecond(temp)
    }
    useEffect(() => {
        var temp = 0
        for(let i = 0; i < first.length; i++){
            if(first[i] == 0 && yong[i] == 1) temp += 1
            if(first[i] == 1 && yong[i] == 2) temp += 1
            if(first[i] == 2 && yong[i] == 0) temp += 1
        }
        setFirstWin(temp)
        var temp2 = 0
        for(let i = 0; i < second.length; i++){
            if(second[i] == 0 && yong[i] == 1) temp2 += 1
            if(second[i] == 1 && yong[i] == 2) temp2 += 1
            if(second[i] == 2 && yong[i] == 0) temp2 += 1
        }
        setSecondWin(temp2)
    },[first, second])
    const submit = () => {
        var check1 = false
        if(second.filter(element => 1 === element).length == 7 &&
        second.filter(element => 0 === element).length == 3 &&
        second.filter(element => 2 === element).length == 2){
            if(secondWin == 2) check1 = true
            else check1 = false
        }
        var check2 = false
        if(first.filter(element => 1 === element).length == 7 &&
        first.filter(element => 0 === element).length == 3 &&
        first.filter(element => 2 === element).length == 2){
            if(firstWin == 11) check2 = true
            else check2 = false
        }
        var score = check2 * 14 * 30 / 100 + check1 * 14 * 70 / 100
        setResult(score)
        setShowPopup(true)
    }
    return (
        <div>
            <h1>20. 가위바위보 (14점)</h1>
            <div className="contents">
                <p>철수와 영희가 가위바위보 게임을 12번 한다. 각 차수에 대한 승패의 여부는 전통을 따른다.</p>
                <p>이 게임엔 특이한 룰이 있는데, 각 참가자는 가위, 바위, 보 각 모양에 대해 내어야 하는 횟수가 정해져
                있고, 그 정해진 횟수만큼 각 모양을 내어야 한다. 단, 어떤 모양을 언제 내어야 하는지에 대한 제약은 없다.</p>
                <p>
                철수에게 정해진 횟수는 (가위, 바위, 보) 순서대로 (7번, 3번, 2번), 영희에게 정해진 횟수는 (가위, 바위,
                보) 순서대로 (2번, 3번, 7번)이다.
                </p>
                <p>
                예를 보자. 철수와 영희가 아래 표에서 보인 것 같은 순서대로 손 모양을 내었을 때, 철수 기준으로 이기는지
                (W), 지는지(L) 또는 비기는지(D)를 나타내고 있다.
                </p>
                <table>
                    <thead>
                        <th className="table_title_1">순서</th>
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((value) => (<th>{value}</th>))}
                    </thead>
                    <tr>
                        <th>철수</th>
                        {['보','바위','가위','바위','가위','가위','보','가위','가위','가위','가위','보'].map((data) => (<th>{data}</th>))}
                    </tr>
                    <tr>
                        <th>영희</th>
                        {['바위','보','가위','보','바위','보','가위','보','바위','보','보','보'].map((data) => (<th>{data}</th>))}
                    </tr>
                    <tr>
                        <th>승리여부(철수 기준)</th>
                        {['W','L','D','L','L','W','L','W','L','W','W','L'].map((data) => (<th>{data}</th>))}
                    </tr>
                </table>
                <p>
                이 게임에서<br/>
                1. 철수가 최대로 이길 수 있는 횟수는 몇 번이 되는가?<br/>
                2. 철수가 최소로 이길 수 있는 횟수는 몇 번이 되는가?
                </p>

                <h3>사용법</h3>
                <ul>
                    <li>각 칸을 클릭하여 없음, 가위, 바위, 보 순서로 선택을 바꿀 수 있다.</li>
                    <li>표의 ’정보’ 열에서 각 대결의 승수와, 해당 대결 내에 사용한 가위, 바위, 보의 각 횟수를 확인할 수
                    있고, 정해진 횟수와 일치해야 한다.</li>
                    <li>첫 번째 대결은 철수가 최대로 이기도록, 두 번째 대결은 철수가 최소로 이기도록 배치해보자</li>
                </ul>

                <h3>채점방식</h3>
                <ul>
                    <li>첫 번째 대결에서 철수가 최대 횟수로 이겼다면 전체 배점의 30%를 획득한다</li>
                    <li>두 번째 대결에서 철수가 최소 횟수로 이겼다면 전체 배점의 70%를 획득한다.</li>
                </ul>
            </div>
            <div>
                <table>
                    <thead>
                        <th className="table_title_1">순서</th>
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((data) => (<th>{data}</th>))}
                        <th>정보</th>
                    </thead>
                
                    <tr>
                        <th>영희</th>
                        {yong.map((data) => (<th>{word[data]}</th>))}
                    </tr>
                    <tr>
                        <th>첫 번째 대결</th>
                        {first.map((data,index) => (<th><button className="btn_rock" onClick={() => click(index)}>{word[data]}</button></th>))}
                        <th className="info">승수 : {firstWin} <br/>
                            가위 : {first.filter(element => 1 === element).length} / 7<br/>
                            바위 : {first.filter(element => 0 === element).length} / 3<br/>
                            보 : {first.filter(element => 2 === element).length} / 2<br/>
                        </th>
                    </tr>
                    <tr>
                        <th>두 번째 대결</th>
                        {second.map((data,index) => (<th><button className="btn_rock" onClick={() => clickSecond(index)}>{word[data]}</button></th>))}
                        <th className="info">승수 : {secondWin} <br/>
                            가위 : {second.filter(element => 1 === element).length} / 7<br/>
                            바위 : {second.filter(element => 0 === element).length} / 3<br/>
                            보 : {second.filter(element => 2 === element).length} / 2<br/>
                        </th>
                    </tr>
                </table>
                <button className="submit" onClick = {() => submit()}>제출하기</button>
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
                        <main>{result}점 입니다.</main>
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
export default Rock