import { FunctionComponent, useContext } from 'react';
import { GlobalContext } from '../../App';
import Icon, { Extension } from '../Icon';

import styles from './Home.module.css';

export enum Direction {
    PREV = -1,
    NEXT = 1,
}

interface ArrowsProps {
    callback?: (dir: Direction) => void;
}

const Arrows: FunctionComponent<ArrowsProps> = ({ callback }) => {
    return (
        <div className={styles.arrows_container}>
            <div className={styles.arrow} onClick={() => callback && callback(Direction.PREV)}>
                PREV
                <Icon extension={Extension.SVG} name="arrow-left" width="65px" height="25px" />
            </div>
            <div className={styles.arrow} onClick={() => callback && callback(Direction.NEXT)}>
                NEXT
                <Icon extension={Extension.SVG} name="arrow-right" width="65px" height="25px" />
            </div>
        </div>
    );
};

const Shoes = (): JSX.Element => {

    const { model, changeCurrentModel } = useContext(GlobalContext);

    return (
        <div className={styles.shoes_container}>
            <div className={styles.shoes}>
                <img alt="shoes_logo" src={model?.path} />
                <Icon className={styles.shoes_svg} extension={Extension.SVG} name="platform" />
            </div>
            <Arrows callback={changeCurrentModel} />
        </div>
    );
};

export default Shoes;
