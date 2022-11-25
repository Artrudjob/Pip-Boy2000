import React, {FC} from 'react';
import styles from './button.module.css';

type TProps = {
    value: string,
    sup?: string,
    sub?: string,
    width?: number,
    disabled: boolean,
    onClick: () => void,
}

const Button: FC<TProps> = ({
    value,
    sup,
    sub,
    width,
    disabled,
    onClick
}) => {

    return (
        <button className={styles.button} style={{width: `${width}px`}} disabled={disabled} onClick={onClick}>{value}
            <sup>{sup}</sup>
            <sub>{sub}</sub>
        </button>
    )
}

export default Button;