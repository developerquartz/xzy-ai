import LoremPage from "./components/loremPage";
import Admin from "./pages/AdminPages/Admin/Index";
import SetNewUserPassword from "./pages/AuthPage/setPassword";
import ContactPage from "./pages/MainLayoutPages/ContactUs/Index";
import Home from "./pages/MainLayoutPages/Home/Index";
import PricingPage from "./pages/MainLayoutPages/Pricing/Index";
import ReviewsPage from "./pages/MainLayoutPages/Reviews/Index";
import SettingIndex from "./pages/MainLayoutPages/Setting/Index";
import BuySubscription from "./pages/MainLayoutPages/SubscriptionPurchase/Index";
import ContentPageTab from "./pages/UserPages/ContentPage/Index";
import Dashboard from "./pages/UserPages/Dasboard/Index";
import Generator from "./pages/UserPages/Generator/Index";
import MyPages from "./pages/UserPages/MyPages/Index";
import NewVideo from "./pages/UserPages/MyVideos/Add/Index";
import MyVideos from "./pages/UserPages/MyVideos/Index";
import NewPage from "./pages/UserPages/NewPage/Index";
import AddOrUpdateProduct from "./pages/UserPages/Product/AddOrUpdate/Index";
import VideoEditor from "./pages/UserPages/VideoEditor/Index";
import WebBuilder from "./pages/UserPages/WebBuilder/Index";
import Welcome from "./pages/UserPages/Welcome/Index";
import MyScript from "./pages/UserPages/myScript/Index";
import { authUsers } from "./utils";

/**
 * Description:- This is where we have defined all of our routes. Private routes and public routes
 * @returns {any}
 */

export const privateRoutes = [
  {
    path: "/welcome",
    element: <Welcome />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/set-new-password",
    element: <SetNewUserPassword />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/admin",
    element: <Admin />,
    permission: [authUsers[1], authUsers[2]],
  },
  {
    path: "/web-builder",
    element: <WebBuilder />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/product/add",
    element: <AddOrUpdateProduct />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/product/edit/:id",
    element: <AddOrUpdateProduct />,

    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/new-page",
    element: <NewPage />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/video-editor",
    element: <VideoEditor />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/my-videos",
    element: <MyVideos />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/my-videos/new",
    element: <NewVideo />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/script-generator/:productId",
    element: <Generator />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/my-pages",
    element: <MyPages />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/my-script",
    element: <MyScript />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
  {
    path: "/settings",
    element: <SettingIndex />,
    permission: [authUsers[0], authUsers[1], authUsers[2]],
  },
];

export const publicRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/buy-subscription/:id",
    element: <BuySubscription />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/about_us",
    element: <ContentPageTab />,
  },
  {
    path: "/privacy_policies",
    element: <ContentPageTab />,
  },
  {
    path: "/terms_of_use",
    element: <ContentPageTab />,
  },
  {
    path: "/request_features",
    element: <LoremPage />,
  },
  {
    path: "/affiliate",
    element: <LoremPage />,
  },
];
