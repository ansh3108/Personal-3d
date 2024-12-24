import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

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
      btnText="Learn More" 
    />
  ),
  3: (
    <div>
      <p className="font-medium sm:text-xl text-center">
        My Tech Stack 🚀
      </p>
      <ul className="list-disc mt-2 ml-8 text-gray-600">
        <li>Blockchain: Solidity, Ethers.js</li>
        <li>Frontend: React.js, TailwindCSS</li>
        <li>Cybersecurity: Penetration Testing, Network Security</li>
        <li>Version Control: Git, GitHub</li>
      </ul>
    </div>
  ),  
  
  4: (
    <InfoBox
      text="Let's collaborate on open-source projects!"
      link="/contact"
      btnText="Get in Touch"
    />
  ),  
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
