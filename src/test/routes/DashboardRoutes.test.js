import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
const { mount } = require("enzyme")
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Pruebas en <DashboardRoutes />', () => {
    
    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:true,
            name: 'Pablito'
        }
    }

    test('Debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pablito');

    })
    

})
