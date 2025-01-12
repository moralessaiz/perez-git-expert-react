import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChangeHandler = ({ target }) => {
        setinputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        // setCategorias(....... inputValue)
        //setCategorias( categorias => [ inputValue, ...categorias ] );
        onNewCategory( inputValue.trim() );
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChangeHandler }
            />
        </form>
    );
};
