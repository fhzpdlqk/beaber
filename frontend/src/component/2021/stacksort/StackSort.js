import React, { useState } from "react"
import './StackSort.css'
const StackSort = () => {
    const [array_A, setArray_A] = useState([8, 5, 6, 1, 4, 2, 3, 7, 10, 9])
    const [array_B, setArray_B] = useState([])
    const [stack, setStack] = useState([])
    const [is_delete, setDelete] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [result, setResult] = useState(true)
    const insert = () => {
        var arrayA = [...array_A]
        var stk = [...stack]
        let temp = arrayA.shift()
        if (temp == undefined) return
        stk.unshift(temp)
        setStack(stk)
        setArray_A(arrayA)
    }
    const pop = () => {
        var stk = [...stack]
        var arrayB = [...array_B]
        let temp = stk.shift()
        if (temp == undefined) return
        arrayB.push(temp)
        setStack(stk)
        setArray_B(arrayB)
    }
    const del = () => {
        var arrayA = [...array_A]
        if (is_delete == false && arrayA.length > 0) {
            arrayA.shift()
            setArray_A(arrayA)
            setDelete(true)
        }
    }
    const replay = () => {
        setArray_A([8, 5, 6, 1, 4, 2, 3, 7, 10, 9])
        setArray_B([])
        setStack([])
        setDelete(false)
    }
    const submit = () => {
        if (array_A.length == 0 && stack.length == 0) {
            var check = true
            for (let i = 1; i < array_B.length; i++) {
                if (array_B[i] < array_B[i - 1]) {
                    check = false
                    break
                }
            }
            if (check) {
                setResult(true)
            } else {
                setResult(false)
            }
        }
        else {
            setResult(false)
        }
        setShowPopup(true)
    }
    const close = () =>{
        setShowPopup(false)
    }
    return (
        <div>
            <h1>
                15. 스택 정렬 (9점)
            </h1>
            <div className='contents'>
                <p>아래와 같이 배열 A에 10개의 수가 들어있다. 초기에 스택과 배열 B는 비어있는 상태이다.</p>
                <p>당신에게 아래의 세 가지 연산이 주어진다.</p>
                <ul>
                    <li>넣기 : 배열 A에서 가장 왼쪽에 위치한 수를 꺼내어 스택에 넣는다.</li>
                    <li>뽑기 :  스택에서 수를 뽑아서 배열 B의 가장 왼쪽에 위치한 빈 칸에 넣는다.</li>
                    <li>제거하기 : 배열 A에서 가장 왼쪽에 위치한 수를 제거한다. 이 연산은 많아야 한 번만 수행할 수 있다.</li>
                </ul>
                <p>당신은 주어진 세 가지 연산을 적절히 수행하여 정렬된 상태를 만들고자 한다. 다시 말하면, 최종상태는
                1. 배열 A와 스택은 비어있는 상태이고 2. 배열 B의 수는 오름차순으로 정렬된 상태라야 한다.</p>
                <p>정렬된 상태를 만들었더라도, 그 상태로 제출 버튼을 누르지 않으면 무효화됨에 유의하라.</p>
            </div>

            <table className="stack_table">
                <tr>
                    <td width='100px' className="table_title"> array_A</td>
                    {
                        array_A.map((data) => { return (<td>{data}</td>)})
                    }
                    {
                        Array.apply(null,new Array(10-array_A.length)).map((data) => { return (<td></td>)})
                    }
                </tr>
                <tr>
                    <td width='100px'  className="table_title"> stack </td>
                    {stack.map((data) => { return (<td>{data}</td>) })}
                    {
                        Array.apply(null,new Array(10-stack.length)).map((data) => { return (<td></td>)})
                    }
                </tr>
                <tr>
                    <td width='100px'  className="table_title"> array_B </td>
                    {array_B.map((data) => { return (<td>{data}</td>) })}
                    {
                        Array.apply(null,new Array(10-array_B.length)).map((data) => { return (<td></td>)})
                    }
                </tr>
            </table>
            <div className="button_div">
                <button onClick={insert} className="stack_btn">넣기</button>
                <button onClick={pop} className="stack_btn">뽑기</button>
                <button onClick={del} disabled={is_delete} className="stack_btn">제거하기</button>
                <button onClick={replay} className="stack_btn">다시하기</button>
                <button className="stack_btn" onClick={submit}>제출</button>
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
export default StackSort