import "./StockButton.css";

const StockButton = (props) => {
  return (
    <>
      <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk" className="Stock_Btn" id={props.id}>
        {props.text}
      </a>
    </>
  );
};

export default StockButton;
