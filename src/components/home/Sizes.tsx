import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../App';

import styles from './Home.module.css';

const Sizes = (): JSX.Element => {

    const { model, addedToBag } = useContext(GlobalContext);

    const [value, setValue] = useState(false);

    useEffect(() => {
        if (model)
            setValue(model.added);
    }, [model])

    const onClick = () => {
        let tmpValue = !value;

        setValue(tmpValue);
        addedToBag(tmpValue);
    }

    return (
        <div className={styles.sizes}>
            <h2>SELECT SIZE (US)</h2>
            <div>
                {model?.sizes.map((size) => <button key={size}>{size}</button>)}
            </div>
            <button className={`${styles.button} ${value && styles.activated}`}
                onClick={onClick}
            >
                {value ? "Added" : "Add to Bag"}
            </button>
        </div>
    );
};

export default Sizes;