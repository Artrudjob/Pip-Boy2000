import React, { FC } from 'react';
import styles from './loader.module.css';

const Loader: FC = () => {

    return (
        <p className={styles.loader}>&gt; <span className={styles.loader__blink}>∎</span></p>
    )
}

export default Loader;