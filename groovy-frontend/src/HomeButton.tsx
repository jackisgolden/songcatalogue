import React from 'react';

const HomeButton: React.FC = () => {
  const handleClick = () => {
    console.log("Home button clicked");
    // Here you can add the actual functionality you want
    // For example, navigate to the home page or reset the view
  };

  return (
    <button className="home-button" onClick={handleClick}>Home</button>
  );
};

export default HomeButton;
