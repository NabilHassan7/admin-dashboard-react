
// importing the CSS file
import './barChartBox.scss'

//imporing from recharts
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

// TS Data Type
type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
};

// passing the data as prop
const BarChartBox = (props: Props) => {
    return (
      <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={150}>
            <BarChart data={props.chartData}>
            {/* to show data on hover  */}
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                // used to prevent hover effect
                cursor={{fill:"none"}}
              />
              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default BarChartBox;