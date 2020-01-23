import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SceneContext from '../components/scenes/SceneContext';
import AppRoutes from '../components/routes/AppRoutes';
import About from '../components/pages/about';
import Button from '../components/commons/buttons/Button';

const setScene = jest.fn();

it('renders about page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/about']} >
            <SceneContext.Provider value={{ setScene }}>
                <AppRoutes />
            </SceneContext.Provider>
        </MemoryRouter>
    );

    expect(wrapper.find(About)).toHaveLength(1);

    wrapper.unmount();
});

it('renders resume button', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/about']} >
            <SceneContext.Provider value={{ setScene }}>
                <AppRoutes />
            </SceneContext.Provider>
        </MemoryRouter>
    );

    const aboutBtns = wrapper.find(Button);
    expect(aboutBtns).toHaveLength(1);

    wrapper.unmount();
});