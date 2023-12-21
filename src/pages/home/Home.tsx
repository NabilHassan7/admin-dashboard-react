// importing the components
import BarChartBox from '../../components/barChartBox/BarChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import TopBox from '../../components/topBox/TopBox';

// WHEN NOT USING THE API
// importing the data from data.ts
// import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';

// importing the css file
import './home.scss'

// WHEN USING THE API
// importing from react query
import { useQueries } from "react-query";

const Home = () => {
  
  // IF USING API CALL 
  // const { isLoading, (data : totalUsers) } = useQuery({
  //   queryKey: ["totalUsers"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/totalUsers").then(
  //       (res) => res.json()
  //     ),
  // });

  // IF USING API CALL 
  const [totalUsers, totalProducts, totalRevenue, ratio, totalVisitors, totalProfit] = useQueries(
      [
        {
          queryKey: ["totalUsers"],
          queryFn: () =>
            fetch("http://localhost:5000/totalUsers").then(
              (res) => res.json()
            )
        },
        {
          queryKey: ["totalProducts"],
          queryFn: () =>
            fetch("http://localhost:5000/totalProducts").then(
              (res) => res.json()
            )
        },
        {
          queryKey: ["totalRevenue"],
          queryFn: () =>
            fetch("http://localhost:5000/totalRevenue").then(
              (res) => res.json()
            )
        },
        {
          queryKey: ["ratio"],
          queryFn: () =>
            fetch("http://localhost:5000/ratio").then(
              (res) => res.json()
            )
        },
        {
          queryKey: ["totalVisitors"],
          queryFn: () =>
            fetch("http://localhost:5000/totalVisitors").then(
              (res) => res.json()
            )
        },
        {
          queryKey: ["totalProfit"],
          queryFn: () =>
            fetch("http://localhost:5000/totalProfit").then(
              (res) => res.json()
            )
        },
      ]
    );

    console.log(totalUsers);

    return (
      <div className="home">
        {/* Most recent order */}
        <div className="box box1">
          <TopBox></TopBox>
        </div>
        <div className="box box2">
          {/* <ChartBox {...chartBoxUser}></ChartBox> */}
          <ChartBox {...totalUsers.data}></ChartBox>
        </div>
        <div className="box box3">
          {/* <ChartBox {...chartBoxProduct}></ChartBox> */}
          <ChartBox {...totalProducts.data}></ChartBox>
        </div>
        <div className="box box4">
          <PieChartBox></PieChartBox>
        </div>
        <div className="box box5">
          {/* <ChartBox {...chartBoxRevenue}></ChartBox> */}
          <ChartBox {...totalRevenue.data}></ChartBox>
        </div>
        <div className="box box6">
          {/* <ChartBox {...chartBoxConversion}></ChartBox> */}
          <ChartBox {...ratio.data}></ChartBox>
        </div>
        <div className="box box7">
          <BigChartBox></BigChartBox>
        </div>
        <div className="box box8">
          {/* <BarChartBox {...barChartBoxVisit} /> */}
          <BarChartBox {...totalVisitors.data} />
        </div>
        <div className="box box9">
          {/* <BarChartBox {...barChartBoxRevenue} /> */}
          <BarChartBox {...totalProfit.data} />
        </div>
      </div>
    );
  };

export default Home;