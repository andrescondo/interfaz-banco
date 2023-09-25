import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RowComponent from '../components/Row/RowComponent';

describe('RowComponent', () => {
    test('representa la fila con los datos correctos del elemento', () => {
        const item = {
            id: 1,
            logo: 'logo.png',
            name: 'Item 1',
            description: 'Este es el archivo',
            date_release: '2023-01-01',
            date_revision: '2023-01-31',
        };
        render(<RowComponent item={item} />);
        const row = screen.getByTestId('menu-1');
        expect(row).toBeInTheDocument();
        expect(screen.getByAltText('Item 1')).toHaveAttribute('src', 'logo.png');
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Este es el archivo')).toBeInTheDocument();
        expect(screen.getByText('1/1/2023')).toBeInTheDocument();
        expect(screen.getByText('1/31/2023')).toBeInTheDocument();
    });

    test('muestra un menú de tres puntos con el estado de visibilidad correcto', () => {
        const item = {
            id: 1,
            logo: 'logo.png',
            name: 'Item 1',
            description: 'Este es el archivo',
            date_release: '2023-01-01',
            date_revision: '2023-01-31',
        };
        const visible = false;
        const visibleBox = jest.fn();
        render(<RowComponent item={item} visible={visible} visibleBox={visibleBox} />);
        const menu = screen.getByTestId('menu-1');
        expect(menu).toBeInTheDocument();
        expect(menu).not.toHaveClass('visible');
        fireEvent.click(screen.getByTestId('three-dot-1'));
        expect(visibleBox).toHaveBeenCalledTimes(1);
    });

    test('llama al controlador de eliminación de elementos cuando se hace clic en la opción de eliminación', () => {
        const item = {
            id: 1,
            logo: 'logo.png',
            name: 'Item 1',
            description: 'Este es el archivo',
            date_release: '2023-01-01',
            date_revision: '2023-01-31',
        };
        const visible = true;
        const deleteItem = jest.fn();
        render(<RowComponent item={item} visible={visible} deleteItem={deleteItem} />);
        const menu = screen.getByTestId('menu-1');
        expect(menu).toBeInTheDocument();
        expect(menu).toHaveClass('visible');
        fireEvent.click(screen.getByTestId('delete-1'));
        expect(deleteItem).toHaveBeenCalledTimes(1);
        expect(deleteItem).toHaveBeenCalledWith(1);
    });
});