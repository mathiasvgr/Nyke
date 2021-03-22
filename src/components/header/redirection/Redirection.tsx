import React from 'react';

import styles from '../Header.module.css';

export interface RedirectionProps {
    url: string;
    active?: string;
    callback?: (bool: boolean) => void;
}

interface RedirectionStates {
    isActive: boolean
}

abstract class Redirection<P extends RedirectionProps> extends React.Component<P, RedirectionStates> {

    constructor(props: P) {
        super(props);

        this.state = {
            isActive: false,
        }
    }

    componentDidMount() {
        this._setActive();
    }
    
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<RedirectionStates>, snapshot?: any) {
        if (prevProps.active !== this.props.active) {
            this._setActive();
        }
    }

    private _getLastItem = () : string | undefined => {
        return this.props.active?.substring(this.props.active?.lastIndexOf('/') + 1);
    }

    private _setActive = () : void => {
        let bool = this.props.url === this._getLastItem();

        this.setState({isActive: bool});
        if (this.props.callback)
            this.props.callback(bool);
    }

    abstract renderElement: () => JSX.Element;

    render() {
        return (
            <div className={styles.link} >
                <this.renderElement />
            </div>
        );
    };
};

export default Redirection;