import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div>
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi! I am <span className="font-semibold">Ansh</span> 👋
      <br />
      A Web3 developer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Love to make open source projects!"
      link="/about"
      btnText="Learn More" // Fixed btnText
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
