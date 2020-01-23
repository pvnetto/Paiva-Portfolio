import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SceneContext from '../components/scenes/SceneContext';
import AppRoutes from '../components/routes/AppRoutes';
import Projects from '../components/pages/projects';
import ProjectItem from '../components/pages/projects/item/ProjectItem';
import { projectsInfo } from '../components/pages/projects/info';
import Button from '../components/commons/buttons/Button';
import { categories, techs } from '../components/pages/projects/info/types';
import { isProjectFilteredOut } from '../components/pages/projects/filters/utils';

const setScene = jest.fn();

it('renders projects page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/projects']} >
            <SceneContext.Provider value={{ setScene }}>
                <AppRoutes />
            </SceneContext.Provider>
        </MemoryRouter>
    );

    expect(wrapper.find(Projects)).toHaveLength(1);

    wrapper.unmount();
});

describe("project page filters", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter initialEntries={['/projects']} >
                <SceneContext.Provider value={{ setScene }}>
                    <AppRoutes />
                </SceneContext.Provider>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });


    it('renders all projects', () => {
        const projects = wrapper.find(ProjectItem);
        expect(projects).toHaveLength(projectsInfo.length);
    });

    it('renders a filter btn for each tech', () => {
        const techContainer = wrapper.find('#tech-filter');
        expect(techContainer).toHaveLength(1);

        const techBtns = techContainer.find(Button);
        expect(techBtns).toHaveLength(Object.keys(techs).length);

        const techValues = Object.values(techs);
        techBtns.forEach(btn => {
            expect(techValues).toContain(btn.text());
        });
    });

    it('filters projects', () => {
        // Finds filter buttons
        const categoryContainer = wrapper.find('#category-filter');
        const techContainer = wrapper.find('#tech-filter');

        const categoryBtns = categoryContainer.find('button');
        const techBtns = techContainer.find('button');

        // Clicks each filter btn
        for (let i = 0; i < categoryBtns.length; i++) {
            for (let j = 0; j < techBtns.length; j++) {
                const categoryBtn = categoryBtns.at(i);
                const techBtn = techBtns.at(j);
                categoryBtn.simulate('click');
                techBtn.simulate('click');

                // Checks if number of rendered projects is correct
                const hiddenProjects = projectsInfo.filter(project => isProjectFilteredOut(techBtn.text(), categoryBtn.text(), project));
                let projectItems = wrapper.find(ProjectItem);
                projectItems = projectItems.map((item, idx) => projectItems.at(idx));
                const hiddenItems = projectItems.filter((item) => item.props().hidden);

                expect(hiddenItems).toHaveLength(hiddenProjects.length);
            };
        }
    });
});