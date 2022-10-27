import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display...', () => {
            render(
                <Layout>
                    <p>Robots</p>
                </Layout>
            );
            const element = screen.getByText(/Robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
