import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Body from "./components/Body";
import Image from "./components/Image";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/image",
        element: <Image />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <div className="App">{appRouter}</div>;
}

export default App;
