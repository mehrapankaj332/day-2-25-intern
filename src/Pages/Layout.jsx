import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         <div>
             <li>
            <Link to="/table1">
              Table1
            </Link>
          </li>
          <li>
            <Link to="/table2">
               Table2
            </Link>
          </li>
         </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;