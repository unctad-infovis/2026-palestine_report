import { resolveAsset } from '@unctad-infovis/general-tools/helpers/BasePath.js';

import '@unctad-infovis/general-tools/styles/styles.css';
import '../styles/styles.css';

import ChartHeader from './components/ChartHeader.jsx';
import ChartMeta from './components/ChartMeta.jsx';

function App() {
  return (
    <div className="app">
      <ChartHeader title="Power out in Gaza: 75% collapse in economic and human activity" subtitle="Night-time luminosity in Gaza" />
      <div className="images_container">
        <div className="image_container">
          <h4>22 September–6 October 2023</h4>
          <img src={resolveAsset('assets/img/2023-09.png')} alt="Luminosity in Gaza in September 2023" />
        </div>
        <div className="image_container">
          <h4>9–10 October 2025</h4>
          <img src={resolveAsset('assets/img/2025-10.png')} alt="Luminosity in Gaza in October 2025" />
        </div>
      </div>
      <ChartMeta
        source="UN Trade and Development (UNCTAD) calculations based on PCBS data and data from National Aeronautics and Space Administration, 2025, Land cover characteristics VNP46A1, available at https://ladsweb.modaps.eosdis.nasa.gov/search/order/1/VNP46A1--5200."
        note="Night-time luminosity is an indicator of economic activity. Grids of 1 km2; brighter grids indicate more light emanated. Areas with bright yellow have more luminosity and areas with dark blue have less luminosity."
      />
    </div>
  );
}

export default App;
