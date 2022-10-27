import { RobotList } from '../../../features/robots/components/robot.list/robot.list';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <RobotList></RobotList>
            <Footer></Footer>
        </>
    );
}
