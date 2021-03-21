import React, { FunctionComponent } from 'react';

import styles from './Notification.module.css';

type IconColor = {
    backGround: string;
    textColor: string;
}

type NotificationProps = {
    nb: number;
    iconColor: IconColor;
    isVisible: boolean;
}

const Notification: FunctionComponent<NotificationProps> = ({ nb, isVisible, iconColor, children }) => {

    const notifStyle: React.CSSProperties = {
        backgroundColor: iconColor.backGround,
        color: iconColor.textColor,
    }

    return (
        <div style={{ position: "relative", width: "fit-content" }} >
            {!isVisible && nb > 0 &&
            <span className={styles.notif} style={notifStyle}>
                {nb?.toString()}
            </span>}
            {children}
        </div>
    );
}

export default Notification;