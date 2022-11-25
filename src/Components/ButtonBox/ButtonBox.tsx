import React, {FC} from 'react';
import styles from './buttonBox.module.css';

type TProps = {
    children: JSX.Element[]
}

const ButtonBox: FC<TProps> = ({children}) => {

    return (
        <div className={styles.buttonBox}>
            {children}
        </div>
    )
}

export default ButtonBox;