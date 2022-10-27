import { ROBOTS } from '../../models/data';
import { Robot } from '../../models/robot';
import { RobotItem } from '../robot.item/robot.item';
import styles from './robot.list.module.css';

export function RobotList() {
    const title = 'Robots';
    return (
        <section>
            {/* <h2 className="title__robot">{title}</h2> */}
            <ul>
                {ROBOTS.map((item: Robot) => (
                    <RobotItem key={item.id} item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
