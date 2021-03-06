import React from 'react';
import Navigation from './Navigation.js';
import Description from './Description.js';
import CtaButton from './CtaButton.js';
// import SlideShow from './SlideShow.js';

export default function App() {
  return (
    <div className="main_container">
      <div className="main_hero_section">
        <div className="logo">{/* <img src=""/> */}</div>
        <Navigation />
        <Description />
        <CtaButton />
      </div>
      <div className="hero_detail_section">
        <h2> Contrary to popular belief, he knows exactly what he's doing. </h2>
        {/* Image From API Goes Here */}

        {/* <img src=""/> */}
        <h4>Super-Genius Intelligence</h4>
        <p className="hero_detail_strengths">
          Quite apart from the powers granted him by the suit, Tony Stark is far
          more than a mechanical engineering prodigy who graduated from the
          Massachusetts Institute of Technology with honors at the age of 17.
        </p>

        {/* <img src=""/> */}
        <h4>Expert Tactician</h4>
        <p className="hero_detail_strengths">
          He is a brilliant tactician capable of quickly formulating battle
          strategies and new plans if the situation changes, like being able to
          elaborate complex plans in order to defeat different enemies.
        </p>

        {/* <img src=""/> */}
        <h4>Master Engineer</h4>
        <p className="hero_detail_strengths">
          He is an excellent engineer and mechanic capable of fixing almost any,
          if not all machinery.
        </p>

        {/* <img src=""/> */}
        <h4>Master Businessman</h4>
        <p className="hero_detail_strengths">
          Stark is extremely well-respected in the business world, able to
          command people's attentions when he speaks on economic matters. He has
          built up several multi-million dollar companies from virtually
          nothing.
        </p>
      </div>
      <div>{/* <SlideShow /> */}</div>
    </div>
  );
}
