import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(<App />);
            const linkElement = screen.getByText(/Robot/i);
            expect(linkElement).toBeInTheDocument();
        });
    });
});
