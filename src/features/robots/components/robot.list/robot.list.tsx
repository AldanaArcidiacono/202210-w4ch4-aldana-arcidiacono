import { ROBOTS } from '../../models/data';
import { Robot } from '../../models/robot';
import { RobotItem } from '../robot.item/robot.item';

export function RobotList() {
    return (
        <section>
            <ul>
                {ROBOTS.map((item: Robot) => (
                    <RobotItem key={item.id} item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
