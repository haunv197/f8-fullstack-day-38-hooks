import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import CountDown from "./pages/CountDown";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";

const routes = [
  {
    layout: DefaultLayout,
    children: [
      {
        path: paths.index,
        component: Home,
      },
      {
        path: paths.counter,
        component: Counter,
      },
      {
        path: paths.countDown,
        component: CountDown,
      },
      {
        path: paths.shoppingCart,
        component: ShoppingCart,
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
];

export default routes;
