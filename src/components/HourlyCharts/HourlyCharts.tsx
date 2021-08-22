import { IOneCallData } from "../../types/oneCallData"
import moment from "moment"
import { XAxis, YAxis, Line, Bar, ResponsiveContainer, Tooltip, BarChart, LineChart } from "recharts"

import "./HourlyCharts.css"

interface HourlyChartsProps {
  mapData: IOneCallData
}

const HourlyCharts = ({ mapData }: HourlyChartsProps) => {
  const formatData = () => {
    return mapData.hourly.map(item => ({
      time: moment(item.dt * 1000).format("h a"),
      temp: Math.round(item.temp),
      pop: Math.round(item.pop),
    }))
  }

  return (
    <div className="HourlyCharts">
      <h3 className="text-center">Temperature</h3>
      <div className="chart-bg">
        <ResponsiveContainer width="90%" height={250}>
          <LineChart data={formatData()}>
            <XAxis dataKey="time" />
            <YAxis dataKey="temp" />
            <Tooltip />
            <Line dataKey="temp" name="°C" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h3 className="text-center">% of rain</h3>
      <div className="chart-bg">
        <ResponsiveContainer width="90%" height={250}>
          <BarChart data={formatData()}>
            <XAxis dataKey="time" />
            <YAxis dataKey="pop" />
            <Tooltip />
            <Bar dataKey="pop" name="%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default HourlyCharts
