import React from 'react';

class Splash extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <main className="splash">
        <div className="splash-image-container">

          <div className="splash-items left">
            <img src="./ku.jpg" className="pic-left" alt=""/>
          </div>

          <div className="splash-items right">
            <img src="./robertakeikokitaharasantana.jpg" className="pics-right" alt=""/>
            <img src="./danielvogel.jpg" className="pics-right" alt=""/>
          </div>
          
        </div>
      </main>
    )
  }
}

export default Splash;