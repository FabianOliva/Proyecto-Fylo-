import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div id="Testimonials_Cont">
      <TestimonialCard
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image="/images/profile-1.jpg"
        name="Satish Patel"
        occupation="Founder & CEO, Huddle"
      />
      <TestimonialCard
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image="/images/profile-2.jpg"
        name="Bruce McKenzie"
        occupation="Founder & CEO, Huddle"
      />
      <TestimonialCard
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image="/images/profile-3.jpg"
        name="Iva Boyd"
        occupation="Founder & CEO, Huddle"
      />
    </div>
  );
};

export default Testimonials;
