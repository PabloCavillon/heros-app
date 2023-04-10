import React from 'react';
import { MemoryRouter } from 'react-router-dom';
const { mount } = require("enzyme");
const { PrivateRoute } = require("../../routers/PrivateRoute");


describe('Pruebas en <PrivateReoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    } 

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {

        const wrapper = mount(
            // Es necesario el MemoryRouter si se quiere probar una ruta
            <MemoryRouter> 
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    })

    test('Debe de bloquear el componente si no está autenticado', () => {
        const wrapper = mount(
            // Es necesario el MemoryRouter si se quiere probar una ruta
            <MemoryRouter> 
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    })
})  
