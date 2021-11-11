import React from 'react';
import propTypes from 'prop-types';

import { isNonEmptyString } from '../utils/utils';

const LoadingIndicator = ({ loadingText, errorText }) => {
    return (
        <div className='col-center-center gaps-v-2'>
            <div className='pulsating' />
            {!isNonEmptyString(errorText) ?
                <span className='fg-primary'>{loadingText}</span> :
                <span className='fg-error'>{errorText}</span>
            }
        </div>
    )
}

LoadingIndicator.propTypes = {
    loadingText: propTypes.string.isRequired,
    errorText: propTypes.string.isRequired
}

export default LoadingIndicator
