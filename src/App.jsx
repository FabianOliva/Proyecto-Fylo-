import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header asset1="Features" asset2="Team" asset3="Sign in"></Header>
      <main>
        <Hero
          title="All your files in one secure location, accessible anywhere."
          text="Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
        />
        <Features />
        <Productive
          title="Stay productive, wherever you are"
          text1="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
          text2="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Testimonials />
        <Signup />
      </main>
      <Footer
        location="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
        phone="+1-543-123-4567"
        email="example@fylo.com"
      />
    </>
  );
}

export default App;
