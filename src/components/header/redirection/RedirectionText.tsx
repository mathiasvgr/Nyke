import Redirection, { RedirectionProps } from './Redirection';

import styles from '../Header.module.css';

interface RedirectionTextProps extends RedirectionProps {
    text: string;
}

class RedirectionText extends Redirection<RedirectionTextProps> {

    public renderElement = (): JSX.Element => {
        return (
            <div className={styles.text} style={{ color: this.state.isActive ? "goldenrod" : "black" }}>
                {this.props.text}
            </div>
        );
    }
}

export default RedirectionText;