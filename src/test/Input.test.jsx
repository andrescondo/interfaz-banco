import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from '../components/Input/InputComponent';


describe('InputComponent', () => {
  test('renders input with correct type, name, value and title', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: 'Juan',
      title: 'Name',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'name');
    expect(input).toHaveAttribute('value', 'Juan');
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('renders a los inputs con el minimo y maximo correcto', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: 'Juan',
      title: 'Name',
      min: 3,
      max: 10,
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    expect(input).toHaveAttribute('minLength', '3');
    expect(input).toHaveAttribute('maxLength', '10');
  });

  test('renders a input deshabilitados', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: 'Juan',
      title: 'Name',
      disabled: true,
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    expect(input).toBeDisabled();
  });

  test('renders a los inputs con el nombre de clase correctamente aplicado', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: 'Juan',
      title: 'Name',
      className: 'custom-class',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    expect(input).toHaveClass('custom-class');
  });

  test('renders input with correct placeholder for text type', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: '',
      title: 'Name',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    expect(input).toHaveAttribute('placeholder', 'Name');
  });

  test('renders input with correct min date for date type', () => {
    const props = {
      type: 'date',
      name: 'date',
      value: '',
      title: 'Date',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('date');
    const today = new Date().toISOString().slice(0, 10);
    expect(input).toHaveAttribute('min', today);
  });

  test('renders input with no placeholder for date type', () => {
    const props = {
      type: 'date',
      name: 'date',
      value: '',
      title: 'Date',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('date');
    expect(input).not.toHaveAttribute('placeholder');
  });

  test('renders error message for text type when value is invalid', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: '',
      title: 'Name',
      errorMessage: 'This field is required.',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });

  test('does not render error message for text type when value is valid', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: 'Juan',
      title: 'Name',
      errorMessage: '',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const props = {
      type: 'text',
      name: 'name',
      value: '',
      title: 'Name',
      onChange: jest.fn(),
    };
    render(<InputComponent {...props} />);
    const input = screen.getByTestId('name');
    fireEvent.change(input, { target: { value: 'Juan' } });
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});


describe('Input', () => {
    test('renders correctly with provided props', () => {
      const mockOnChange = jest.fn();
      render(
        <Input
          type="text"
          name="testInput"
          min={1}
          max={5}
          value=""
          onChange={mockOnChange}
          title="Test Input"
          errorMessage="Error message"
        />
      );
  
      // Verificar que el título se muestra correctamente
      expect(screen.getByText('Test Input')).toBeInTheDocument();
  
      // Verificar que el input se renderiza con los atributos correctos
      const inputElement = screen.getByTestId('testInput');
      expect(inputElement).toHaveAttribute('type', 'text');
      expect(inputElement).toHaveAttribute('name', 'testInput');
      expect(inputElement).toHaveAttribute('minLength', '1');
      expect(inputElement).toHaveAttribute('maxLength', '5');
    });
    // Puedes agregar más pruebas según tus necesidades
  });

