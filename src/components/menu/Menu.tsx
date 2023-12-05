// importing CSS file
import './menu.scss'

// importing from react router dom
import { Link } from "react-router-dom";

// importing the menu data from data.ts
import { menu } from '../../data';

const Menu = () => {
    return (
      <div className="menu">
        {/* mapping the menu items from the data.ts file */}
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Menu;