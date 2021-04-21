import Redirection, { RedirectionProps } from './Redirection';
import Icon, { Extension } from '../../Icon';

import styles from '../Header.module.css';

interface RedirectionIconProps extends RedirectionProps {
    name: string;
    width?: string;
    height?: string;
}

class RedirectionIcon extends Redirection<RedirectionIconProps> {

    public renderElement = (): JSX.Element => {
        return (
            <Icon className={`${styles.icon} ${this.state.isActive ? styles.activated : ""}`}
                extension={Extension.SVG}
                name={this.props.name}
                width={this.props.width}
                height={this.props.height}
            />
        );
    }
}

export default RedirectionIcon;