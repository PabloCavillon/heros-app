const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");


describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({logged:false}, {});

        expect(state).toEqual({logged:false});

    });

    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Laura'
            }
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            name: 'Laura'
        }) 

    });

    test('Debe de borrar el name del usuario y poner en false el logged', () => {
        const action = {
            type: types.logout
        }

        const state = authReducer({logged: true, name:'Pablo'}, action);

        expect(state).toEqual({
            logged: false
        }) 
    });
});