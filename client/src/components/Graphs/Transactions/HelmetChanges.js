import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Graphy from './graph'

// ...

class HelmetChanges extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <script src={Graphy}></script>
        </Helmet>
      </div>
    );
  }
}

export default HelmetChanges;