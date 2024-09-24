import { useContext, useEffect, useState } from "react";
import Context from "./context/Context";

export default function SlidesWrapper({ children }) {
  let { page } = useContext(Context);
  let { setPage } = useContext(Context);
  let mouseStart;
  let mouseEnd;

  function movePage() {
    console.log(mouseStart - mouseEnd);
    if (mouseEnd - mouseStart >= 100 && page !== 1) {
      setPage((p) => --p);
    } else if (mouseEnd - mouseStart <= -100 && page !== 3) {
      setPage((p) => ++p);
    }
  }

  useEffect(() => {
    document.addEventListener("touchstart", (e) => {
      mouseStart = e.touches[0].clientX;
    });
    document.addEventListener("touchmove", (e) => {
      mouseEnd = e.touches[0].clientX;
    });
    document.addEventListener("touchend", movePage);

    return () => {
      document.removeEventListener("touchstart", (e) => {
        mouseStart = e.touches[0].clientX;
      });
      document.removeEventListener("touchmove", (e) => {
        mouseEnd = e.touches[0].clientX;
      });
      document.removeEventListener("touchend", movePage);
    };
  });

  function changePage() {
    switch (page) {
      case 1:
        return 0;
      case 2:
        return -1024;
      case 3:
        return -1024 * 2;
    }
  }

  return (
    <div
      className="slider"
      style={{ transform: `translate(${changePage()}px, 0)` }}
    >
      {children}
    </div>
  );
}
