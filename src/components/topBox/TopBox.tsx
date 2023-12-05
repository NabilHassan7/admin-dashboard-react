
// importing the CSS file
import './topBox.scss'

// importing the data for the recent orders from data.ts
import { topDealUsers } from '../../data';

const TopBox = () => {
    return (
      <div className="topBox">
        <h1>Recent Orders</h1>
        {/* the data is displayed dynamically */}
        <div className="list">
            
            {topDealUsers.map(user=>(
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
            ))}
        </div>
      </div>
    )
  }

export default TopBox;