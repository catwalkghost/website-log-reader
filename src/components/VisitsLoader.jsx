import React, { useEffect, useState } from 'react';
import VisitsTable from './VisitsTable';
import LoadingIndicator from './LoadingIndicator';

import { fetchVisits } from '../utils/utils';
import { LOADING_TEXT } from '../lib/constants';


const VisitsLoader = () => {

    const [visitsCounter, setVisitsCounter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchVisits()
            .then(visitsData => {
                setVisitsCounter(visitsData)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(true)
            });
    }, []);

    return (
        <div className='col-center-center width-100p height-100p'>
            {loading ? <LoadingIndicator errorText={error} loadingText={LOADING_TEXT} /> : <VisitsTable visits={visitsCounter} />}
        </div>
    )
}

export default VisitsLoader;
