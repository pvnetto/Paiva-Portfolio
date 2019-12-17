import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SceneContext from '../components/scenes/SceneContext';
import AppRoutes from '../components/routes/AppRoutes';
import Projects from '../components/pages/projects';


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

describe("project filters", () => {
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
});