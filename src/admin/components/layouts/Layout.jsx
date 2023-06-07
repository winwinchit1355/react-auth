import { Outlet } from "react-router";

const Layout = () => {
    return ( 
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-8">
                <Outlet></Outlet>
            </div>
        </div>
     );
}
 
export default Layout;