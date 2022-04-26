import { isDisabled } from '@testing-library/user-event/dist/utils'
import {React, useState} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import Canvas from './Canvas/Canvas'
import './Stone.css'

const Stone = () => {
    const [stoneNumber, setStoneNumber] = useState(38)
    const [previous, setPrevious] = useState(0)
    const [result,setResult] = useState(-1)
    const [showPopup, setShowPopup] = useState(false)
    const dp = [[false,false,false],[false,false,false],[false,true,true], [true,false,true], [true,true,true], [true,true,false], [false,false,false],[false,false,false]]
        const changeStone = async (number) => {
        var temp = stoneNumber
        if(temp < number) return
        temp -= number

        if(temp <= 1){
            setStoneNumber(temp)
            setResult(1)
            return
        }
        else if(temp == 2 && number == 2){
            setStoneNumber(temp)
            setResult(1)
            return
        }
        else{
            for(let i = 2; i <= 4; i++){
                console.log(i,dp[(temp - i) % 6][i - 2])
                if(number == i) continue;
                if(temp < i) continue;
                if(dp[(temp - i) % 6][i-2] == false){
                    temp -= i
                    setPrevious(i)
                    setStoneNumber(temp)
                    if(temp <= 1) setResult(0)
                    else if(temp == 2 && i == 2) setResult(0)
                    return
                }
            }
            for(let i = 2; i <= 4; i++){
                if(number == i) continue
                if(temp < i) continue;
                temp -= i
                setPrevious(i)
                setStoneNumber(temp)
                if(temp <= 1) setResult(0)
                else if(temp == 2 && i == 2) setResult(0)
                return
            }
        }
    }
    const reset = () => {
        setStoneNumber(38)
        setResult(-1)
        setPrevious(0)
    }

    const close = () =>{
        setShowPopup(false)
    }
    const submit = () => {
        setShowPopup(true)
    }
    return (
        <div>
            <h1>
                19. 바둑돌 게임 (14점)
            </h1>
            <div className='contents'>
                <p>아래와 같이 항아리 안에 바둑돌이 38개가 있다.
                당신 (A)과 컴퓨터 플레이어 (B)는 다음과 같은 게임을 할 것이다</p>
                <ul>
                    <li>A가 먼저 게임을 시작한다.</li>
                    <li>A와 B는 반갈아서, 한 번에 2개, 3개, 또는 4개의 바둑돌을 가져간다.</li>
                    <li>단, 직전에 앞 사람이 가져간 만큼 다음 사람이 같은 수의 바둑돌을 가져가면 안된다. 예를 들어, 앞
                    사람이 3개를 가져가면, 직후에 그 다음 사람은 2개 혹은 4개만 가져갈 수 있다.</li>
                    <li>자신의 차례가 왔을 때 바둑돌을 가져갈 수 없는 사람이 지고 상대방이 이긴다.</li>
                </ul>
                <p>컴퓨터를 이겨 보자!</p>
                <p>아래에서 직접 게임을 진행할 수 있다. 당신이 몇 개의 바둑돌을 가져갈 지 하단의 버튼을 이용하여 선택하면, 잠시 후 컴퓨터가 바둑돌 몇 개를 가져간다. 당신은 컴퓨터와 턴을 번갈아서 진행하며, 컴퓨터를 이기는 것이 목표이다.</p>
                <p>게임에서 이겼더라도, 그 상태로 제출 버튼을 누르지 않으면 무효화됨에 유의하라</p>
            </div>
            <Canvas
                stoneNumber = {stoneNumber}
                setStoneNumber = {setStoneNumber}
            />
            <p>컴퓨터가 {previous}개 가져갔습니다</p>
            {result == 1 ? (<p>당신이 이겼습니다!</p>): null}
            {result == 0 ? (<p>당신이 졌습니다..</p>):null}
            <div className='div_stone_button'>
                <button onClick={() => changeStone(2)} disabled = {previous == 2}>2개</button>
                <button onClick={() => changeStone(3)} disabled = {previous == 3}>3개</button>
                <button onClick={() => changeStone(4)} disabled = {previous == 4}>4개</button>
                <button onClick={() => reset()}>다시하기</button>
                <button onClick={() => submit()}>제출</button>
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
                        <main>{result == 1 ? '정답입니다' : '오답입니다'}</main>
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

export default Stone