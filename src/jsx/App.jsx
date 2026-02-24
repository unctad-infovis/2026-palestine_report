import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

function App() {
  const file_path = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2026-palestine_report/' : (window.location.href.includes('localhost:80')) ? './' : 'https://unctad-infovis.github.io/2026-palestine_report/'}assets`;

  useEffect(() => {
  }, []);

  return (
    <div className="app">
      <div className="title_container">
        <div className="text_container">
          <div className="main_title_container">
            <img src="https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg" className="logo" alt="UN Trade and Development logo" width="44" height="44" />
            <div className="title">
              <h3>Power out in Gaza: 75% collapse in economic and human activity</h3>
            </div>
          </div>
          <h4>Night-time luminosity in Gaza</h4>
        </div>
      </div>
      <div className="images_container">
        <div className="image_container">
          <h4>22 September–6 October 2023</h4>
          <img src={`${file_path}/img/2023-09.png`} alt="Luminosity in Gaza in September 2023" />
        </div>
        <div className="image_container">
          <h4>9–10 October 2025</h4>
          <img src={`${file_path}/img/2025-10.png`} alt="Luminosity in Gaza in October 2025" />
        </div>
      </div>
      <div className="caption_container">
        <em>Source:</em>
        {' '}
        UN Trade and Development (UNCTAD) calculations based on PCBS data and data from National Aeronautics and Space Administration, 2025, Land cover characteristics VNP46A1, available at https://ladsweb.modaps.eosdis.nasa.gov/search/order/1/VNP46A1--5200.
        <br />
        <em>Note:</em>
        {' '}
        Night-time luminosity is an indicator of economic activity. Grids of 1 km2; brighter grids indicate more light emanated. Areas with bright yellow have more luminosity and areas with dark blue have less luminosity.
        <br />
      </div>
    </div>
  );
}

export default App;
