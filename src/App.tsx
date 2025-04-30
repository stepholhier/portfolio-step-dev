import { Header } from "@components/Header/Header";
import { Home } from "@components/Home/Home";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualização para v6

import GlobalStyles from '../GlobalStyles';

import Squares from './effects/Squares';

export default function App() {
  return (
    <Router>
      <>
        <Squares
          direction="diagonal"
          speed={1}
          borderColor="#444"
          squareSize={40}
          hoverFillColor="#111"
        />

        <GlobalStyles />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}
