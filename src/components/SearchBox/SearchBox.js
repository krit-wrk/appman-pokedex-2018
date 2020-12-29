import React from 'react'
import style from './style.js'
import { css } from 'aphrodite'
const SearchBox = ({ value }) => {
    return (
        <div className={css(style.container)}>
            <input className={css(style.input)} />
        </div>
    );
};

export { SearchBox };