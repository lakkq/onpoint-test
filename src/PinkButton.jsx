export default function PinkButton(props) {
  return (
    <button className="button">
      <div className="button__row">
        <div className="button__icon-border">
          <div className="button__icon">
            <img src={props.icon} alt="arrow" />
          </div>
        </div>
        <p className="button__text">{props.text}</p>
      </div>
    </button>
  );
}
