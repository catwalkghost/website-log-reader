import React from 'react';

import './scss/global.scss';
import VisitsLoader from './components/VisitsLoader';

function App() {
    return (
        // Note: Layout can be abstracted into a separate component for better scalability
        <div className="layout-container">
            <VisitsLoader />
        </div>
    );
}

export default App;
