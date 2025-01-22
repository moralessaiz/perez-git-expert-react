import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory /> ', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} }/> );
        //screen.debug();
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe('Saitama');

        //screen.debug()

    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        
        const functionOnNewCategory = jest.fn(); 

        render( <AddCategory onNewCategory={ functionOnNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();

        expect( input.value ).toBe( '' );

        expect( functionOnNewCategory ).toHaveBeenCalled();
        expect( functionOnNewCategory ).toHaveBeenCalledTimes(1);
        expect( functionOnNewCategory ).toHaveBeenCalledWith( inputValue );

    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {


        const functionOnNewCategory = jest.fn(); 

        render( <AddCategory onNewCategory={ functionOnNewCategory }/> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );
    
        expect( functionOnNewCategory ).toHaveBeenCalledTimes(0);
        expect( functionOnNewCategory ).not.toHaveBeenCalled();

    })
})