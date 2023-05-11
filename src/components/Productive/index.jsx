const Productive = (props) => {
  return (
    <div id="Productive_Cont">
      <div id="Productive_Left">
        <img src="images\illustration-stay-productive.png" alt="productiveImg" />
      </div>
      <div id="Productive_Right">
        <h2 className="productive_title">{props.title}</h2>
        <p className="productive_text1">{props.text1}</p>
        <p className="productive_text2">{props.text2}</p>
        <a className="productive_a" href="#">
          See how Fylo works <img className="Productive_a-svg" src="icons\icon-arrow.svg" alt="CircleRight" />
        </a>
      </div>
    </div>
  );
};

export default Productive;
