import Icon2 from "../imgs/icon2.png";
import Icon1 from "../imgs/icon1.png";
import Plus from "../imgs/plus.svg";
import Bottle from "../imgs/bottle.png";
import BubblePink1 from '../imgs/bubble-pink-1.png';
import BubblePink2 from '../imgs/bubble-pink-2.png';
import BubblePink3 from '../imgs/bubble-pink-3.png';
import BubbleBlue1 from '../imgs/bubble-blue-1.png';
import BubbleBlue2 from '../imgs/bubble-blue-2.png';
import BubbleBlue3 from '../imgs/bubble-blue-3.png';
import BubbleBlue4 from '../imgs/bubble-blue-4.png';
import BubbleBlue5 from '../imgs/bubble-blue-5.png';
import PinkButton from "../PinkButton";
import More from "../More";
import { useState } from "react";
import "../styles/last-slide.css";

export default function Slide3() {
  let [more, setMore] = useState(false);

  return (
    <div className="slide">
      <div className="slide__content last-slide">
        <h2 className="last-slide__title mid-title">Ключевое сообщение</h2>
        <h1 className="title">
          Brend<span className="bold">XY</span>
        </h1>
        <div className="last-slide__content brand">
          <div className="brand__big-block">
            <div className="brand__big-block-backlay"></div>
            <img src={Icon2} alt="icon" />
            <p className="brand__text">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>
          <div className="brand__small-block">
            <img src={Icon1} alt="icon" />
            <p className="brand__text">
              A arcu <br />
              cursus vitae
            </p>
          </div>
          <div
            className="brand__button"
            onClick={() => {
              setMore(true);
            }}
          >
            <PinkButton icon={Plus} text={"Подробнее"} />
          </div>
        </div>
      </div>
      {more && <div className="underlay"></div>}
      {more && <More setMore={setMore} />}
      <div className="last-slide__decor">
        <img src={Bottle} alt="" className="decorations" id="bottle" />
        <img src={BubblePink1} alt="" className="decorations" id="bubble-pink-1" />
        <img src={BubblePink2} alt="" className="decorations" id="bubble-pink-2" />
        <img src={BubblePink3} alt="" className="decorations" id="bubble-pink-3" />
        <img src={BubbleBlue1} alt="" className="decorations" id="bubble-blue-1" />
        <img src={BubbleBlue2} alt="" className="decorations" id="bubble-blue-2" />
        <img src={BubbleBlue3} alt="" className="decorations" id="bubble-blue-3" />
        <img src={BubbleBlue4} alt="" className="decorations" id="bubble-blue-4" />
        <img src={BubbleBlue5} alt="" className="decorations" id="bubble-blue-5" />
      </div>
    </div>
  );
}
