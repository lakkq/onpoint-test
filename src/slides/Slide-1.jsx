import "../styles/homeslide.css";
import PinkButton from "../PinkButton";
import Context from "../context/Context";
import { useContext } from "react";

import Arrow from '../imgs/arrow.png';
import PinkSperm from '../imgs/pink-sperm.png';
import Microbe from '../imgs/microbe.png';
import Cocci2 from '../imgs/cocci-2.png';
import Cocci3 from '../imgs/cocci-3.png';
import Cocci1 from '../imgs/cocci-1.png';



export default function Slide1() {
  let { setPage } = useContext(Context);
  return (
    <div className="slide">
      <div className="slide__content homepage">
        <p className="homepage__hello mid-title">Привет,</p>
        <h1 className="homepage__title title">
          это <span className="homepage__extra-bold bold">не</span> <br />
          коммерческое <br />
          задание{" "}
          <div className="homepage__button" onClick={() => setPage(2)}>
            <PinkButton icon={Arrow} text={"Что дальше?"}/>
          </div>
        </h1>
      </div>
      <img src={PinkSperm} alt="" className="decorations" id="pink-sperm-1" />
      <img src={PinkSperm} alt="" className="decorations" id="pink-sperm-2" />
      <img src={Microbe} alt="" className="decorations" id="microbe-1" />
      <img src={Cocci2} alt="" className="decorations" id="cocci-2" />
      <img src={Cocci3} alt="" className="decorations" id="cocci-3" />
      <img src={Cocci1} alt="" className="decorations" id="cocci-4" />
      <img src={Cocci1} alt="" className="decorations" id="cocci-5" />
      <img src={Cocci1} alt="" className="decorations" id="cocci-6" />
      <img src={Cocci1} alt="" className="decorations" id="cocci-7" />
    </div>
  );
}
