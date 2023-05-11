const Feature = (props) => {
  return (
    <div className="feature_cont">
      <img className="feature_icon" src={`${props.image}`} alt="Icon" />
      <h4 className="feature_title">{props.title}</h4>
      <p className="feature_text">{props.text}</p>
    </div>
  );
};

export default Feature;
