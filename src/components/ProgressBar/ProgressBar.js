import React from 'react'
import style from './style.js'
import { StyleSheet, css } from 'aphrodite'
const ProgressBar = ({ value }) => {
    const valueStyle = StyleSheet.create({ bar: { width: `${value}%` } })
    return (
        <div className={css(style.container)}>
            <div className={css(style.bar, valueStyle.bar)} />
        </div>
    );
};

export { ProgressBar };