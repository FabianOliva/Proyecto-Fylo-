import StockButton from "../StockButton";

const Hero = (props) => {
  return (
    <div id="hero">
      <div className="hero_Img_Cont">
        <img className="hero_Img" src="images\illustration-intro.png" alt="Hero-Illustration" />
      </div>
      <div className="hero_title_Cont">
        <h2 className="hero_title">{props.title}</h2>
        <p className="hero_text">{props.text}</p>
      </div>
      <div className="hero_Btn_Cont">
        <StockButton id="hero_btn" text="Get Started" />
      </div>
    </div>
  );
};

export default Hero;
