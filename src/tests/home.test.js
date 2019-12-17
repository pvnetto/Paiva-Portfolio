import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { shallow, render, mount } from 'enzyme';

import Home from '../components/pages/home';
import SceneContext from '../components/scenes/SceneContext';
import AppRoutes from '../components/routes/AppRoutes';

const setScene = jest.fn();

describe("homepage navigation works", () => {
    it('renders homepage', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} >
                <SceneContext.Provider value={{ setScene }}>
                    <AppRoutes />
                </SceneContext.Provider>
            </MemoryRouter>
        );

        expect(wrapper.find(Home)).toHaveLength(1);

        wrapper.unmount();
    });

    it('navigates to contact when button is clicked', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <SceneContext.Provider value={{ setScene }}>
                    <AppRoutes />
                </SceneContext.Provider>);
            </MemoryRouter>
        );

        expect(wrapper.find(Link).at(0).props().to).toBe('/contact');

        wrapper.unmount();
    })

    it('navigates to projects when button is clicked', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <SceneContext.Provider value={{ setScene }}>
                    <AppRoutes />
                </SceneContext.Provider>);
            </MemoryRouter>
        );

        expect(wrapper.find(Link).at(1).props().to).toBe('/projects');

        wrapper.unmount();
    })
});