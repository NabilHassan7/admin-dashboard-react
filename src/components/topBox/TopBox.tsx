
// importing the CSS file
import './topBox.scss'

// WHEN NOT USING API
// importing the data for the recent orders from data.ts
// import { topDealUsers } from '../../data';

// USE WHEN USING API
// importing from react query
import { useQuery } from "react-query";

const TopBox = () => {
    const { isLoading, data } = useQuery({
      queryKey: ["recentorders"],
      queryFn: () =>
        fetch("http://localhost:5000/recentOrders").then(
          (res) => res.json()
        ),
    });

    return (
      <div className="topBox">
        <h1>Recent Orders</h1>
        {/* the data is displayed dynamically */}
        <div className="list">
            {/* WHEN USING API */}
            {isLoading ? (
              "Loading..."
            ) : (
              data?.map((user:any)=>(
                <div className="listItem" key={user.id}>
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
                </div>
                  <span className="amount">৳ {user.amount}</span>
                </div>
              ))
            )}
      
            {/* WHEN NOT USING API */}
            {/* {topDealUsers.map((user:any)=>(
                <div className="listItem" key={user.id}>
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
                </div>
                  <span className="amount">৳ {user.amount}</span>
                </div>
            ))} */}
        </div>
      </div>
    )
  }

export default TopBox;