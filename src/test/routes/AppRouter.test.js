import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
const { mount } = require("enzyme");
const { AppRouter } = require("../../routers/AppRouter");

describe('Pruebas en <AppRputer/>', () => {
    
    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    test('Debe de mostrar el login si NO está autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el componente marvel si está autenticado', () => {
        
        const contextValue = {
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'Pablo'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })
    
})
