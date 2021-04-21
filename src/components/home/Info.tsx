import { useContext } from 'react';
import { GlobalContext } from '../../App';

import styles from './Home.module.css';

const Info = (): JSX.Element => {

    const { model } = useContext(GlobalContext);

    return (
        <div className={styles.info_container}>
            <div className={styles.info}>
                <h2>{model?.description.type}</h2>
                <h1>{model?.description.title}</h1>
                <p>{model?.description.description}</p>
            </div>
        </div>
    );
};

export default Info;