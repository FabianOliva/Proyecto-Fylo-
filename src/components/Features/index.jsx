import Feature from "./feature";

const Features = () => {
  return (
    <div className="features_Cont">
      <Feature
        className="features_feature"
        image="icons\icon-access-anywhere.svg"
        title="Access your files, anywhere"
        text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."></Feature>
      <Feature
        image="icons/icon-security.svg"
        title="Security you can trust"
        text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."></Feature>
      <Feature
        image="icons/icon-collaboration.svg"
        title="Real-time collaboration"
        text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required."></Feature>
      <Feature
        image="icons/icon-any-file.svg"
        title="Store any type of file"
        text="Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."></Feature>
    </div>
  );
};

export default Features;
