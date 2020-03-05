import React from 'react';
import JT from '../../images/Team/JT.png';
import DeVante from '../../images/Team/DeVante.png';
import Sile from '../../images/Team/Sile.png';
import Cory from '../../images/Team/Cory.png';

function TheTeam() {
    return (
    <div className="tile is-ancestor">
    <div className="tile is vertical is-10 is-clearfix columns" id="tile">
    <div className="column is-one-quarter">
        <a href="https://github.com/javierturner" id="github" target="_blank" rel="noopener noreferrer">
          <img src={JT} alt="Sile" />
          <p className="subtitle has-text-centered" id="team"><br/>JT</p>
        </a>
        <p className="has-text-centered">Lead Product Developer</p>
      </div>
      <div className="column is-one-quarter">
        <a href="https://github.com/Sile-Kiman" id="github" target="_blank" rel="noopener noreferrer">
          <img src={Sile} alt="Sile" />
          <p className="subtitle has-text-centered" id="team"><br/>Sile</p>
        </a>
        <p className="has-text-centered">Lead Database Developer</p>
      </div>
      <div className="column is-one-quarter">
        <a href="https://github.com/DrBailey13" id="github" target="_blank" rel="noopener noreferrer">
          <img src={DeVante} alt="DeVante" />
          <p className="subtitle has-text-centered" id="team"><br/>DeVante</p>
        </a>
        <p className="has-text-centered">Lead API Developer</p>
      </div>
      <div className="column is-one-quarter">
        <a href="https://github.com/cmarshman" id="github" target="_blank" rel="noopener noreferrer">
          <img src={Cory} alt="Cory" />
          <p className="subtitle has-text-centered" id="team"><br/>Cory</p>
        </a>
        <p className="has-text-centered">Lead UI/UX Designer</p>
      </div>
    </div>
  </div>

    );
}

export default TheTeam;