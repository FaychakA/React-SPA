import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <PuffLoader />
        </div>
    );
};

export default Spinner;
