import React, { useState } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip(props) {
    const [hoverText, setHoverText] = useState(props.children);

    const handleMouseEnter = () => {
        setHoverText('thanks for hovering');
    };

    const handleMouseLeave = () => {
        setHoverText(props.children);
    };

    return (
        <div 
            className={styles.tooltip}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={styles.context}>
                {hoverText}
            </span>
            <span className={styles.message + " " + styles[`${props.position}Message`]}>
                Tooltip
                <span className={styles.arrow + " " + styles[props.position]}></span>
            </span>
        </div>
    );
}
