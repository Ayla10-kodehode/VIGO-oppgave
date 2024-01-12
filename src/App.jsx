import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { SubPageOne } from "./page/SubPageOne";
import { SubPageTwo} from "./page/subPageTwo";
import { Header } from "./components/navigation/Header";
import { Footer } from "./components/navigation/Footer";
function App() {
  return (
    <>
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageOne" element={<SubPageOne />} />
          <Route path="/subPageTwo" element={<SubPageTwo/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
