import styles from './Home.module.css';

import Info from './Info';
import Shoes from './Shoes';
import Sizes from './Sizes';

export default function Home() {

    return (
        <div className={styles.container} >
            <Info />
            <Shoes />
            <Sizes />
        </div>
    );
}