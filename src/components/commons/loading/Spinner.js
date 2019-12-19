import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './spinner.module.css';

const Spinner = ({ loading }) => {
    return loading ?
        <div className={style.spinnerContainer}>
            <FontAwesomeIcon className={style.spinner} icon={faSpinner} />
        </div> : null
};

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default Spinner;