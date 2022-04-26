import './River.css'
import React, { useState } from "react"

const River = () => {
    const [array_left, setArrayLeft] = useState([9,12,7,8,15,3])
    const [array_boat, setArrayBoat] = useState([])
    const [array_right, setArrayRight] = useState([])
    const [direct, setDirect] = useState(['left'])
    const [cost, setCost] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const [result, setResult] = useState(false)
    const close = () =>{
        setShowPopup(false)
    }
    const push_leftHuman = (index) => {
        if(array_boat.length < 2 && direct == 'left'){
            var temp_left = [...array_left]
            var temp_boat = [...array_boat]
            temp_boat.push(temp_left[index])
            temp_left.splice(index,1)
            setArrayLeft(temp_left)
            setArrayBoat(temp_boat)
        }
    }
    const push_rightHuman = (index) => {
        if(array_boat.length < 2 && direct == 'right'){
            var temp_right = [...array_right]
            var temp_boat = [...array_boat]
            temp_boat.push(temp_right[index])
            temp_right.splice(index,1)
            setArrayRight(temp_right)
            setArrayBoat(temp_boat)
        }
    }
    const push_left = () => {
        if(array_boat.length > 0){
            setDirect('left')
            var c = cost + Math.max.apply(null, array_boat)
            setCost(c)
        }
    }
    const push_right = () => {
        if(array_boat.length > 0){
            setDirect('right')
            var c = cost + Math.max.apply(null, array_boat)
            setCost(c)
        }
    }
    const push_boat = (index) => {
        if(direct == 'left'){
            var temp_left = [...array_left]
            var temp_boat = [...array_boat]
            temp_left.push(temp_boat[index])
            temp_boat.splice(index,1)
            setArrayLeft(temp_left)
            setArrayBoat(temp_boat)
        }
        else if(direct == 'right'){
            var temp_right = [...array_right]
            var temp_boat = [...array_boat]
            temp_right.push(temp_boat[index])
            temp_boat.splice(index,1)
            setArrayRight(temp_right)
            setArrayBoat(temp_boat)
        }
    }
    const push_submit = () => {
        if(array_left.length == 0 && array_boat.length == 0 && array_right.length == 6){
            if(cost <= 62){
                setResult(true)
                setShowPopup(true)
                return
            }
        }
        setResult(false)
        setShowPopup(true)
    }
    const restart = () => {
        var temp_left = [9,12,7,8,15,3]
        var temp_right = []
        var temp_boat = []
        var temp_cost = 0
        setArrayBoat(temp_boat)
        setArrayLeft(temp_left)
        setArrayRight(temp_right)
        setCost(temp_cost)
        setDirect('left')
    }
    return (
        <div>
            <h1>
               17. 강 건너기 (12점)
            </h1>
            <div className='contents'>
                <p>
                    동길이와 친구 5명, 총 6명의 일행이 자연 체험 여행을 떠났다. 
                    어떤 지역에 이르러 강을 건너야 할 상황이 되었는데, 
                    그 곳에는 보트가 한 척 있으며, 그 보트에는 최대 두 명이 탈 수 있다. 
                    6명이 모두 강을 건너기 위해선 우측 그림에서 보듯이 강 이편과 저편 사이로 보트를 여러 번 왔다갔다 해야 한다.            
                </p>
                <p>
                    이들이 모두 강을 건넌 후, 보트는 강 반대편에 두어도 된다.
                </p>
                <p>
                    보트 사용료는 특이하게도 보트를 사용하는 사람의 몸무게에 비례하여 지불해야 한다.
                    단, 두 사람이 탈 경우 몸무게가 무거운 사람의 비용을 지불하면 다른 사람은 공짜로 탈 수 있다.
                </p>
                <p>
                    6명 몸무게가 각각 (9,12,7,8,15,3)라고 할 때, 최소 비용으로 모두 강을 건널 경우 그 비용은 얼마인가?
                </p>
                <h3>사용법</h3>
                <ul>
                    <li>사람은 각 몸무게가 적힌 동그라미로 표현되어 있다.</li>
                    <li>보트가 위치하는 쪽 강가와 보트 위의 사람을 클릭하여 보트에 타거나 내리가 할 수 있다.</li>
                    <li>보트에 사람이 1명 이상 있을 때 빨간 색 화살표를 눌러 위에서 언급된 보트 사용료를 지불하고 보트를 반대 방향으로 이동시킬 수 있다.</li>
                    <li>모든 사람이 강을 건너고 보트에서 내리면 '완료!' 문구가 나타나고, 제출할 수 있는 상태가 된다.</li>
                </ul>
            </div>
            <div>
                <p>현재 비용 : {cost} <button className='submit' disabled= {array_right.length != 6} onClick={() => push_submit()}>제출하기</button>  <button className='submit' onClick={() => restart()}>다시하기</button>
                </p>
                <div className='div_left'>
                    {array_left.map((data,index) => {return (<button className='human' onClick = {() => push_leftHuman(index)}>{data}</button>)})}
                </div>
                <div className='div_middle'>
                    <div className='div_middle_human'>
                        {array_boat.map((data, index) => {return (<button className='boat_human' onClick = {() => push_boat(index)}>{data}</button>)})}
                    </div>
                    <div>
                        {direct == 'right' ? <button className = 'direct_left' onClick = {() => push_left()}></button> : null}
                        <img className='boat_img' alt="boat" src='/img/boat.png'></img>
                        {direct == 'left' ? <button className = 'direct_right' onClick={() => push_right()}></button>:null}
                    </div>
                </div>
                <div className='div_right'>
                    {array_right.map((data, index) => {return (<button className='human' onClick = {() => push_rightHuman(index)}>{data}</button>)})}
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
                        <main>{result ? '정답입니다' : '오답입니다'}</main>
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

export default River;