import "../styles/page-message.css";
import { addScrollbar } from "../scrollbar.js";
import { useEffect,  useContext } from "react";
import PinkSperm from "../imgs/pink-sperm-2.png";
import Context from "../context/Context.jsx";

export default function Slide2() {
  let { page } = useContext(Context);

  useEffect(() => {
    addScrollbar();
  });

  return (
    <div className="slide">
      <div className="slide__content page-message">
        <h2 className="page-message__title mid-title">
          <p>Текст</p>
          <p>Сообщения</p>
        </h2>
        <div className="page-message__content">
          <div id="scrollbar-container">
            <div id="scrollbar"></div>
          </div>
          <div className="page-message__message" id="content">
            <p>
              <span className="strong">Lorem ipsum dolor sit amet</span>,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
              aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
              ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
              sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
              lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
              interdum consectetur libero id. Nec ullamcorper sit amet risus
              nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
              sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
              mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
              tortor condimentum lacinia. Et malesuada fames ac turpis egestas
              integer eget. Elementum pulvinar etiam non quam lacus suspendisse
              faucibus interdum posuere.
            </p>
            <p>
              Amet justo donec enim diam vulputate ut pharetra sit. Risus
              ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
              ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor
              magna eget est lorem ipsum. Etiam dignissim diam quis enim.
              Gravida neque convallis a cras. Ut enim blandit volutpat maecenas
              volutpat. Mauris sit amet massa vitae tortor condimentum lacinia
              quis vel.
            </p>
          </div>
          <div className="page-message__message-overlay"></div>
        </div>
      </div>
      {(page === 2 || page === 3) && <div className="page-message__decor">
        <img src={PinkSperm} alt="" className="decorations decor-slide2" id="pink-sperm-4"/>
        <img src={PinkSperm} alt="" className="decorations decor-slide2" id="pink-sperm-5" />
        <img src={PinkSperm} alt="" className="decorations decor-slide2" id="pink-sperm-6" />
        <img src={PinkSperm} alt="" className="decorations decor-slide2" id="pink-sperm-7" />
        <img src={PinkSperm} alt="" className="decorations decor-slide2" id="pink-sperm-8" />
      </div>}
      
    </div>
  );
}
