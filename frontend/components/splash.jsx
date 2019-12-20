import React from 'react';

const Splash = () => {
  window.scrollTo(0, 0);

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

export default Splash;