import { categories, techs } from '../../info/types';

export const isProjectFilteredOut = (techFilter, categoryFilter, projectInfo) => {
    if (categoryFilter !== categories.ALL && projectInfo.category !== categoryFilter) {
        return true;
    }
    if (techFilter !== techs.ALL && !projectInfo.techs.includes(techFilter)) {
        return true;
    }

    return false;
}