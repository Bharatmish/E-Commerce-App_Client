import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our eWaste app, where sustainability meets convenience.
            Developed in collaboration with SRM authorities, our platform
            facilitates the seamless buying and selling of electronic waste
            products, akin to the user-friendly experience of popular e-commerce
            platforms like Flipkart. Join us in our mission to promote
            eco-friendly practices while empowering individuals and institutions
            to responsibly manage electronic waste.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
