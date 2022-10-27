import { useContext } from 'react';
import { RobotContext } from '../../../../infrastructure/context/contesx';
import { Robot } from '../../models/robot';
import styles from './robot.item.module.css';

export function RobotItem({ item }: { item: Robot }) {
    const { robot, handleDelete } = useContext(RobotContext);

    const handlerDeleteClick = () => {
        handleDelete(item.id);
        console.log('Robot borrado😊🤖');
    };

    return (
        <li className={styles.host}>
            <img src={item.img} alt={item.name} />
            <div>
                <span>
                    <h2>Nombre: {item.name}</h2>
                </span>
                <span>Velocidad: {item.speed}</span>
                <span>Resistencia: {item.resistance}</span>
                <span>Fecha de nacimiento: {item.creationDate}</span>
                <span className={styles.button} onClick={handlerDeleteClick}>
                    🗑️
                </span>
            </div>
        </li>
    );
}
