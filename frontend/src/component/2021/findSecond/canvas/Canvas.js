import React, { useState, useRef, useEffect } from "react"
import './Canvas.css'
import { Stage, Layer, Text, Circle, Arrow } from 'react-konva';

const location = [[280,450],[250,50],[250,250],[400,280],[130,400],[450,80],[50,280],[80,80]]
const graph = [
  [[5,8],[3,1],[4,2]],
  [[5,8],[3,1],[4,2],[3,8],[2,7],[3,2],[3,6]],
  [[5,8],[3,1],[4,2],[3,8],[2,7],[3,2],[3,6],[4,3],[4,6],[4,5]],
  [[5,8],[3,1],[4,2],[3,8],[2,7],[3,2],[3,6],[4,3],[4,6],[4,5],[3,5],[3,7],[4,1]]
]
const radius = 30


const Canvas  = (props) => {
    function generateShapes() {
        return [...Array(8)].map((_, i) => ({
          id: i.toString(),
          x: location[i][0],
          y: location[i][1],
          rotation: Math.random() * 180,
          isClick: props.answer[props.problem][i]
        }));
    }
    const INITIAL_STATE = generateShapes();

    useEffect(() => {
      setCircle(
        circle.map((circle) => {
            return {
              ...circle,
              isClick: props.answer[props.problem][circle.id],
            };
        })
      );
      return 
    },[props.problem])

    const [circle, setCircle] = React.useState(INITIAL_STATE);

    
    const handleClick = (e) => {
        const id = e.target.attrs.id
        const ans = [...props.answer]
        ans[props.problem][id] = !ans[props.problem][id]
        props.setAnswer(ans)
        console.log(props.answer)

        setCircle(
          circle.map((circle) => {
              return {
                ...circle,
                isClick: props.answer[props.problem][circle.id],
              };
          })
        );
    }

    return (
        <Stage width={500} height={500}>
            <Layer>
            {circle.map((circle) => (
                <Circle
                    id = {circle.id}
                    radius={radius}
                    fill = {circle.isClick === true ? 'red': 'rgb(92, 92, 255)'}
                    stroke={'black'}
                    strokeWidth={5}
                    x = {circle.x}
                    y = {circle.y}
                    onClick = {handleClick}    
                />
            ))}
            {location.map((data,index) => (
              <Text text = {index + 1} 
              fontSize={25}
              x = {data[0]-7}
              y = {data[1]-10}
              stroke = 'white'
              id = {index}
              onClick={handleClick}
              />
            ))}
            {graph[props.problem-1].map((data) => {
              var x = location[data[1]-1][0] - location[data[0]-1][0]
              var y = location[data[1]-1][1] - location[data[0]-1][1]
              var unit_x = x / Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
              var unit_y = y / Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
              return (
                <Arrow
                  x= {0}
                  y= {0}
                  points= {[location[data[0]-1][0] + unit_x * radius, location[data[0]-1][1] + unit_y * radius, location[data[1]-1][0] - unit_x * radius, location[data[1]-1][1] - unit_y * radius]}
                  pointerLength= {20}
                  pointerWidth= {20}
                  fill= {'white'}
                  stroke= {'white'}
                  strokeWidth= {4}
                />
              )
            })}
            </Layer>
        </Stage>
    );
}
export default Canvas