import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Prueba de <HeroScreen />', () => {
    
    const history = {
        length: 10,
        replace: jest.fn(),
        goBack: jest.fn()
    }
    
    test('Debe mostrar el componente redirect si no hay argumentos en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('Debe de mostrar un heroe si el parámetro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        
        const history = {
            length: 1,
            replace: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history={history}/>}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.replace).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    })
    
    test('Debe de regresar a la pantalla anterior con GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history={history}/>}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect(history.goBack).toHaveBeenCalled();
        expect(history.replace).toHaveBeenCalledTimes(0);
    })

    test('Debe de llamar el Redirect si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spidersdadsadadadas']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={() => <HeroScreen history={history}/>}
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
    })
    
    

})
