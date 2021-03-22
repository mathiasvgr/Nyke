import { FunctionComponent, useContext } from 'react';
import { GlobalContext } from '../../App';
import Icon, { Extension } from '../Icon';

import styles from './Home.module.css';

export enum Direction {
    PREV = -1,
    NEXT = 1,
}

const Shoes = (): JSX.Element => {

    const { model, changeCurrentModel } = useContext(GlobalContext);

    return (
        <div className={styles.shoes_container}>
            <div className={styles.shoes}>
                <img alt="shoes_logo" src={model?.path} />
                <Icon className={styles.shoes_svg} extension={Extension.SVG} name="platform" />
            </div>
        </div>
    );
};

export default Shoes;
