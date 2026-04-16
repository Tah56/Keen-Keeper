import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TimeLine from "../component/TimeLIne/TimeLine";
import FriendDEtails from "../component/FriendDetails/FriendDEtails";
import Stats from "../component/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "timeline",
        Component: TimeLine,
      },
      {
        path:"stats",
        Component: Stats
      },
      {
        path: "friendsdetails/:num",
        loader: async () => {
          const res = await fetch("/friendsData.json");
          const data = await res.json();

          return data;
        },
        Component: FriendDEtails,       
        hydrateFallbackElement: (
            <div className="flex justify-center items-center h-screen">

                <span className="loading loading-spinner loading-xl"></span>
            </div>
    )
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
