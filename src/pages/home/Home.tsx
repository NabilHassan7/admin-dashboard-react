// importing the components
import BarChartBox from '../../components/barChartBox/BarChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';

// importing the data from data.ts
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';

// importing the css file
import './home.scss'

const Home = () => {
    return (
      <div className="home">
        {/* Most recent order */}
        <div className="box box1">
          <TopBox></TopBox>
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxUser}></ChartBox>
        </div>
        <div className="box box3">
          <ChartBox {...chartBoxProduct}></ChartBox>
        </div>
        <div className="box box4">
          
        </div>
        <div className="box box5">
          <ChartBox {...chartBoxRevenue}></ChartBox>
        </div>
        <div className="box box6">
          <ChartBox {...chartBoxConversion}></ChartBox>
        </div>
        <div className="box box7">
          
        </div>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    );
  };

export default Home;