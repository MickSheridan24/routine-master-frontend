import { VictoryAxis, VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from "victory"
import { currentMonth } from "../../utilities/DateHelpers"



export interface GraphProps{
  lines: 
    {
      color: string
      name: string,
      data:{
        x: number,
        y: number
      }[]
    }[]
  
}

export default function Graph({lines}: GraphProps){

  const getXRange = () => {
    return lines.length && lines[0].data.length ? lines[0].data.length : 10
  }
  const getYRange = () => {
    return lines.reduce((i, m) =>  m.data.length && m.data[m.data.length - 1].y > i ?  m.data[m.data.length - 1].y : i , 0)
  }
  return <div className="chart"> <VictoryChart theme={VictoryTheme.material}>

        <VictoryAxis dependentAxis crossAxis
            domain={[0, getYRange()+ 200]}
            theme={VictoryTheme.material}
          />
           <VictoryAxis crossAxis
            domain={[0, getXRange()]}
            theme={VictoryTheme.material}

          />
        {lines.map(line => <VictoryLine
          style={{
            data: { stroke: line.color },
            parent: { border: "1px solid #ccc"}
          }}
          data={line.data}
        />)}
        <VictoryLegend
          y={0} 
          x={50}
          padding={5}
          
          centerTitle
          orientation="horizontal"
          style={{border: { stroke: "black" }, title: {fontSize: 20 } }}
          data={lines.map(line => {
            return {name: line.name, symbol: {fill: line.color}}
          })}
        />
    </VictoryChart>
  </div>
  
}