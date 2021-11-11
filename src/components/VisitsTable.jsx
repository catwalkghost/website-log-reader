import React from 'react';
import propTypes from 'prop-types';
import { map } from 'fpx';

import { isNonEmptyString } from '../utils/utils';
import { COL_1_TITLE, COL_2_TITLE } from '../lib/constants';

const VisitsTable = ({ visits }) => {
    return (
        <div className='table-container'>
            <TableHeader />
            {map(visits, visit => {
                const { page, count } = visit;
                if (isNonEmptyString(page)) {
                    return (
                        <div key={page} className='table-row table-content font-h3'>
                            <span>{page}</span>
                            <span>{count}</span>
                        </div> )
                } return null
            })}
        </div>
    )
}

const TableHeader = () => {
    return (
        <div className='table-header'>
            <span>{ COL_1_TITLE }</span>
            <span >{ COL_2_TITLE }</span>
        </div>
    )
}

VisitsTable.propTypes = {
    visits: propTypes.arrayOf(
        propTypes.shape({
            page: propTypes.string,
            count: propTypes.number
        })
    ).isRequired
}

export default VisitsTable
