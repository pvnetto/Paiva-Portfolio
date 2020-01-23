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
        <div id="category-filter">
            <p className={style.filterHeader}>Filter by category:</p>
            <div className={style.btnsContainer}>
                <CategoryButton category={categories.ALL}>{categories.ALL}</CategoryButton>
                <CategoryButton category={categories.WEB}>{categories.WEB}</CategoryButton>
                <CategoryButton category={categories.GAMES}>{categories.GAMES}</CategoryButton>
            </div>
        </div>
    );
};

CategoryFilter.propTypes = {
    setCategoryFilter: PropTypes.func.isRequired,
    activeCategory: PropTypes.oneOf(Object.values(categories)).isRequired
}

export default CategoryFilter;