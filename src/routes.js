import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import CountDown from "./pages/CountDown";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

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
    ],
  },
];

export default routes;
