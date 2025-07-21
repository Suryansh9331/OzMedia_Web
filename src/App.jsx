import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routing";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import ScrollToTop from "./components/common/Scrolltotop.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
         <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
