import { Header } from "@components/Header/Header";
import { Home } from "@components/Home/Home";
import GlobalStyles from '../GlobalStyles';
import  Squares  from './effects/Squares'

export default function App() {
  return (
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

    <Home />
    </>
  );
}