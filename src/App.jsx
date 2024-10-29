import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Details from "./components/Details";
// import
function NotFound() {
  return <div>Error 404. Page not found.</div>;
}
function Landing() {
  const navigate = useNavigate();

  const location = useLocation();
  if (location.pathname === "/") {
    window.location.href = "/form";
  }
  // if (location.pathname === "/app") {
  //   // useNavigate("/")
  //   useEffect(() => {
  //     navigate("/app/form", { replace: true });
  //   }, []);
  //   return;
  // }
  // if (window.location.href == "/app") {
  //   // useNavigate("/")
  //   navigate("/form", { replace: true });
  //   return;
  // }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            {/* <Route path="/" element={}/> */}
            <Route path="form" element={<Form />}></Route>
            <Route path="details" element={<Details />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
