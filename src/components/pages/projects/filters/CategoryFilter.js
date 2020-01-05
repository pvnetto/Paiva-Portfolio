import React from 'react';
import PropTypes from 'prop-types';

import style from './filter.module.css';
import { categories } from '../info/types';
import Button from '../../../commons/buttons/Button';

const CategoryFilter = ({ setCategoryFilter, activeCategory }) => {

    const CategoryButton = ({ category, children }) => {
        return <Button onClick={() => setCategoryFilter(category)} active={activeCategory === category} className={style.filterBtn}>{children}</Button>
    }

    return (
        <div>
            <p className={style.filterHeader}>Filter by category:</p>
            <div className={style.btnsContainer}>
                <CategoryButton category={categories.ALL}>All</CategoryButton>
                <CategoryButton category={categories.WEB}>Web</CategoryButton>
                <CategoryButton category={categories.GAMES}>Games</CategoryButton>
            </div>
        </div>
    );
};

CategoryFilter.propTypes = {
    setCategoryFilter: PropTypes.func.isRequired,
    activeCategory: PropTypes.oneOf(Object.values(categories)).isRequired
}

export default CategoryFilter;