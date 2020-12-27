import React from 'react'
import styles from './style.js'
const ProgressBar = ({ value }) => {
    const barStyles = { width: `${value}%` }
    return (
        <div style={styles.container}>
            <div style={{ ...styles.bar, ...barStyles }} />
        </div>
    );
};

export { ProgressBar };