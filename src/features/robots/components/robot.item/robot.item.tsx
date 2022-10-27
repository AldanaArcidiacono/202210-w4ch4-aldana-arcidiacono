import { useContext } from 'react';
import { Robot } from '../../models/robot';
import styles from './robot.item.module.css';

export function RobotItem({ item }: { item: Robot }) {
    //const { handlerEraser, handlerComplete } = useContext(TodoContext);

    // const handleClick = () => {
    //     handlerEraser(item.id);
    // };

    // const handleChange = () => {
    //     handlerComplete(item);
    // };

    return (
        <li key={item.id} className={styles.host}>
            <div className="robot__card">
                <img
                    className="card-img"
                    // src={'https://robohash.org/' + item.id}
                    src={item.img}
                    alt={'Robot ' + item.name}
                />
                <div className="card-body">
                    <h2 className="robot__name">{item.name}</h2>
                    <div className="robot__info">
                        <ul>
                            <li>Velocidad: {item.speed}</li>
                            <li>Resistencia: {item.resistance}</li>
                            <li className="robot-age">
                                Fecha de creacion: {item.creationDate}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}
