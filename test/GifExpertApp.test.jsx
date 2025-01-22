import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'


describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de hacer match con el snapshot', () => {

        const container = render( <GifExpertApp/> );
        //screen.debug();

        expect( container ).toMatchSnapshot();

    })

    // Debe agregar categorias nuevas

    const newCategory = 'Goku'

    test('Que pasa con onAddCategory si se postea el formulario?', () => {
        
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
    
        // Disparar eventos para agregar 4 categorias nuevas
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); // Agrega: Goku

        fireEvent.input(input, { target: { value: newCategory + '2' } });
        fireEvent.submit(form); // Agrega: Goku1

        fireEvent.input(input, { target: { value: newCategory + '3'} });
        fireEvent.submit(form); // Agrega: Goku2

        fireEvent.input(input, { target: { value: newCategory + '4'} });
        fireEvent.submit(form); // Agrega: Goku3
        screen.debug()

        // Se supone que se debieron agregar 4 categorias cuyos nombres deben aparecer en etiquetas h3

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4);
    })

    test('Que pasa si vuelvo a enviar la misma categoria', () => {})

    test('Que sucede en el html si envio una categoria diferente', () => {})

})