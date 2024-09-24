import { useContext } from 'react';
import Home from './imgs/home.svg'
import Context from './context/Context';

export default function Nav() {
  let { setPage } = useContext(Context);
  return (
    <nav className="nav">
      <div className="nav__row">
        <button className="nav__button" onClick={() => setPage(1)}>
          <img src={Home} alt="HOME" />
        </button>
        <p className="nav__text">Project</p>
      </div>
    </nav>
  );
}
