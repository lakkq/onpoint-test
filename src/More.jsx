import "./styles/more.css";
import Arrow from "./imgs/btn_next.png";
import Close from "./imgs/btn_close.png";
import { useEffect, useState } from "react";

export default function More(props) {
  let [page, setPage] = useState(1);

  useEffect(() => {
    
  })

  function clickHandlerBack() {
    page === 1 ? setPage(2) : setPage(p => --p); 
  }

  function clickHandlerForward() {
    page === 2 ? setPage(1) : setPage(p => ++p); 
  }

  return (
    <div className="more">
      <button className="more__close" onClick={() => props.setMore(false)}>
        <img src={Close} alt="" />
      </button>
      <h2 className="more__title mid-title">Преимущества</h2>
      <h1 className="title">
        Brend<span className="bold">XY</span>
      </h1>
      <div className="more__content">
        {page === 1 && (
          <dl className="more__list">
            <dt className="more__list-num">01</dt>
            <dd className="more__list-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </dd>
            <dt className="more__list-num">02</dt>
            <dd className="more__list-item">
              Faucibus pulvinar elementum integer enim
            </dd>
            <dt className="more__list-num">03</dt>
            <dd className="more__list-item">
              Faucibus pulvinar elementum integer enim
            </dd>
          </dl>
        )}

        {page === 2 && (
          <dl className="more__list">
            <dt className="more__list-num">04</dt>
            <dd className="more__list-item">
              Mi bibendum neque egestas congue quisque egestas diam
            </dd>
            <dt className="more__list-num">05</dt>
            <dd className="more__list-item">
              Venenatis lectus magna fringilla urna
            </dd>
            <dt className="more__list-num">06</dt>
            <dd className="more__list-item">
              Venenatis lectus magna fringilla urna
            </dd>
          </dl>
        )}
      </div>
      <div className="more__points">
        <button className="more__points-button" id="button-back" onClick={() => clickHandlerBack()}>
          <img src={Arrow} alt="" />
        </button>
        <div className={`more__points-point ${page === 1 && 'active'}`}></div>
        <div className={`more__points-point ${page === 2 && 'active'}`}></div>
        <button className="more__points-button" id="button-back" onClick={() => clickHandlerForward()}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
