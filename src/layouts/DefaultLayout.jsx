import Header from "@/components/layouts/header";
import paths from "@/configs/path";
import { Outlet } from "react-router";

function DefaultLayout() {
  const itemsMenu = [
    {
      path: paths.index,
      name: "Home",
    },
    {
      path: paths.counter,
      name: "Counter",
    },
    {
      path: paths.countDown,
      name: "Count Down",
    },
    {
      path: paths.shoppingCart,
      name: "Shopping Cart",
    },
  ];

  return (
    <div>
      <Header menu={itemsMenu} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default DefaultLayout;
