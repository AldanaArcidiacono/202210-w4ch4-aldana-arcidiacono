import { Layout } from '../../../../infrastructure/components/layout/layout';
import { RobotItem } from './robot.item';

// Test fallido. No me ha quedado claro cómo debería realizarlo para estos componentes

describe('Given RobotItem component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Layout>
                    <RobotItem></RobotItem>
                </Layout>
            );
        });
        test('Then it should display the robots', () => {
            const element = screen.getByText('Robot');
            expect(element).toBeInTheDocument();
        });
    });
});
