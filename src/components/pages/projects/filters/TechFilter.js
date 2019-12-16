import React from 'react';
import PropTypes from 'prop-types';

import style from './filter.module.css';
import Button from '../../../commons/buttons/Button';
import { techs } from '../info';

const TechFilter = ({ setTechFilter, activeTech }) => {

    const TechButton = ({ tech, children }) => {
        return <Button onClick={() => setTechFilter(tech)} active={activeTech === tech} className={style.filterBtn}>{children}</Button>
    }

    return (
        <div>
            <p className={style.filterHeader}>Filter by tech:</p>
            <div className={style.btnsContainer}>
                <TechButton tech={techs.ALL}>All</TechButton>
                <TechButton tech={techs.JAVASCRIPT}>JavaScript</TechButton>
                <TechButton tech={techs.PYTHON}>Python</TechButton>
                <TechButton tech={techs.REACT}>React</TechButton>
                <TechButton tech={techs.UNITY3D}>Unity3D</TechButton>
            </div>
        </div>
    );
};

TechFilter.propTypes = {
    setTechFilter: PropTypes.func.isRequired,
    activeTech: PropTypes.oneOf(Object.values(techs)).isRequired,
}

export default TechFilter;