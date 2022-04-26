import {React, useEffect, useState} from 'react'
import './Canvas.css'
import { Stage, Layer, Text, Circle, Arrow } from 'react-konva';

const Canvas = (props) => {
    const stoneNumber = props.stoneNumber
    const setStoneNumber = props.setStoneNumber
    const [array, setArray] = useState(Array.from({length: stoneNumber}, () => 0))
    useEffect(() => {
        var arr = Array.from({length: stoneNumber}, () => 0)
        setArray(arr)
    }, [stoneNumber])
    return (
        <div>
            <Stage width={500} height = {350} >
                <Layer>
                <Text text = "가져갈 돌 개수를 선택해주세요" 
                    fontSize={20}
                    x = {100}
                    y = {50}
                    stroke = 'white'
                />
                {array.map((data,index) => (
                    <Circle
                        x = {Math.floor(index / 5) * 50 + 60}
                        y = {index % 5 * 50 + 100}
                        radius = {20}
                        fill = {'gray'}
                        stroke={'black'}
                        strokeWidth={5}
                    />
                ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default Canvas