import React, {FC} from "react";
import styles from "./calculKeyboard.module.css";
import Button from "../Button/Button";

const CalculKeyboard: FC = () => {

    return (
        <div className={styles.calculKeyboard__containerBox}>
            <div className={styles.calculKeyboard__gridBtn}>
                <Button text={"("}/>
                <Button text={")"}/>
                <Button text={"mc"}/>
                <Button text={"m+"}/>
                <Button text={"m-"}/>
                <Button text={"mr"}/>
                <Button text={"2"} sup={"nd"}/>
                <Button text={"x"} sup={"2"}/>
                <Button text={"x"} sup={"3"}/>
                <Button text={"x"} sup={"y"}/>
                <Button text={"e"} sup={"x"}/>
                <Button text={"10"} sup={"x"}/>
                <Button text={"1/x"}/>
                <Button text={"√x"}/>
                <Button text={"∛x"}/>
                <Button text={"ln"}/>
                <Button text={"log"} sub={"10"}/>
                <Button text={"x!"}/>
                <Button text={"sin"}/>
                <Button text={"cos"}/>
                <Button text={"tan"}/>
                <Button text={"e"}/>
                <Button text={"EE"}/>
                <Button text={"Deg"}/>
                <Button text={"sinh"}/>
                <Button text={"cosh"}/>
                <Button text={"tanh"}/>
                <Button text={"π"}/>
                <Button text={"Rand"}/>
            </div>
            <div className={styles.calculKeyboard__gridBtn}>
                <Button text={"AC"}/>
                <Button text={"+/-"}/>
                <Button text={"%"}/>
                <Button text={"÷"}/>
                <Button text={"7"}/>
                <Button text={"8"}/>
                <Button text={"9"}/>
                <Button text={"*"}/>
                <Button text={"4"}/>
                <Button text={"5"}/>
                <Button text={"6"}/>
                <Button text={"-"}/>
                <Button text={"1"}/>
                <Button text={"2"}/>
                <Button text={"3"}/>
                <Button text={"+"}/>
                <Button text={"0"}/>
                <Button text={","}/>
                <Button text={"="}/>
            </div>
        </div>
    )
}

export default CalculKeyboard;