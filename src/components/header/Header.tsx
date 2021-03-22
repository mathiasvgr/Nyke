import { FunctionComponent, useState} from 'react';

import Notification from '../notification/Notification'
import RedirectionText from './redirection/RedirectionText';
import RedirectionIcon from './redirection/RedirectionIcon';

import styles from './Header.module.css';

type HeaderProps = {
    cartSize: number
}

const Header: FunctionComponent<HeaderProps> = ({ cartSize }) => {

    const [isNotificationVisible, setNotificationVisibility] = useState(false);

    const linkNames = [
        {
            name: "NEW RELEASED",
            url: "new"
        },
        {
            name: "MEN",
            url: "men"
        },
        {
            name: "WOMEN",
            url: "women"
        },
        {
            name: "KIDS",
            url: "kids"
        },
        {
            name: "CUSTOMIZE",
            url: "customize"
        },
    ]


    const removeShoppingNotification = (bool : boolean) => {
        setNotificationVisibility(bool);
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <RedirectionIcon url="/" name="nike-logo" width="80px" height="80px" />
            </div>
            <div className={styles.header_content}>
                {linkNames.map((linkName) =>
                    <RedirectionText key={linkName.name} text={linkName.name} url={linkName.url} />
                )}
            </div>
            <div className={styles.header_action}>
                <RedirectionIcon url="account" name="account-bag" width="30px" height="30px" />
                <Notification iconColor={{backGround: "red", textColor: "white"}} nb={cartSize} isVisible={isNotificationVisible}>
                    <RedirectionIcon url="bag"
                        name="shopping-bag"
                        width="30px"
                        height="30px"
                        callback={removeShoppingNotification}
                    />
                </Notification>
            </div>
        </div>
    );
}

export default Header;