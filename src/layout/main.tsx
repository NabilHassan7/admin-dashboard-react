// importing the outlet
import { Outlet } from "react-router-dom";

// importing the components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

// importing from react Query
import { QueryClientProvider, QueryClient } from "react-query";


// initializing react query
const queryClient = new QueryClient();

const Main = () => {
    const Layout = () => {
        return (
          <div className="main">
            <Navbar></Navbar>
            <div className="container">
              <div className="menuContainer">
                <Menu></Menu>
              </div>
              <div className="contentContainer">
                {/* react query wrapper */}
                <QueryClientProvider client={queryClient}>
                  {/* dynamically changes */}
                  <Outlet></Outlet>
                </QueryClientProvider>
              </div>
            </div>
            <Footer></Footer>
          </div>
        );
      };
    return (
        <div>
            <Layout></Layout>
        </div>
    );
};

export default Main;