import React, {FC} from "react";
import styles from "./button.module.css";

type TProps = {
    text: string;
    sup?: string;
    sub?: string;
}

const Button: FC<TProps> = ({text, sup, sub}) => {

    return (
        <button className={styles.button}>{text}
            <sup>{sup}</sup>
            <sub>{sub}</sub>
        </button>
    )
}

export default Button;