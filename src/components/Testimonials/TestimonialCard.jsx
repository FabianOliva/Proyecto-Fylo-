const TestimonialCard = (props) => {
  return (
    <div className="testimonial_card_Cont">
      <div className="testimonial_text_Cont">
        <p className="testimonial_text">{props.text}</p>
      </div>
      <div className="testimonial_user_Cont">
        <div className="testimonial_img_Cont">
          <img className="testimonial_img" src={`${props.image}`} alt="TestimonialImg" />
        </div>
        <div className="testimonial_name_Cont">
          <span className="testimonial_name">{props.name}</span>
          <span className="testimonial_occupation">{props.occupation}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
