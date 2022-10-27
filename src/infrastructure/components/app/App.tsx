import { RobotList } from '../../../features/robots/components/robot.list/robot.list';
import { RobotContextProvider } from '../../context/provider';
import { Layout } from '../layout/layout';

function App() {
    return (
        <div className="App">
            <Layout>
                <RobotContextProvider>
                    <RobotList></RobotList>
                </RobotContextProvider>
            </Layout>
        </div>
    );
}

export default App;
