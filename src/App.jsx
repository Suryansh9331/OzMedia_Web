import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routing";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
