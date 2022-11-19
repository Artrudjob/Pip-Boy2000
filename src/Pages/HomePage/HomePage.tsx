import React, {FC, useEffect, useState} from "react";
import styles from "./homePage.module.css";
import pipBoy from "../../images/PIPBoy2000.svg";
import {timeout} from "../../utils/utils";
import {getTime} from "../../utils/utils";
import CalculKeyboard from "../../Components/CalculKeyboard/CalculKeyboard";
import {currentDate} from "../../constants/date/date";

const HomePage: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [textElement, setTextElement] = useState<string>("");
    const [currentTime, setCurrentTime] = useState(getTime);

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setCurrentTime(getTime);
        }, 60000)

        const timeout = setTimeout(() => {
            setLoading(true);
            printedText("Добро пожаловать в калькулятор онлайн");
        }, 3000);

        return () => {
            clearTimeout(timeout);
            clearInterval(intervalTime);
        }
    }, []);

    async function printedText(text: string) {
        let res: string[][] | undefined = [];
        for (let i = 0; i < text.length; i++) {
            res.push(Array.from(text[i]));
            setTextElement(res.join(""));
            await timeout(50);
        }
    }

    return (
        <section className={styles.main}>
            <div className={styles.main__background_color}>
                <div style={{backgroundImage: `url(${pipBoy})`}} className={styles.main__background_image}>
                    {(!loading) ?
                        <p className={`${styles.main__text} ${styles.main__text_position}`}>&gt; <span className={styles.main__blink}>∎</span></p>
                        :
                        <p className={`${styles.main__text} ${styles.main__text_position}`}>{textElement}</p>
                    }
                    <div className={styles.main__dateBox}>
                        <p className={styles.main__date}>{currentDate.day}</p>
                        <p className={styles.main__date}>{currentDate.shortMonth}</p>
                        <p className={styles.main__date}>{currentDate.year}</p>
                        <p className={styles.main__date}>{currentTime}</p>
                    </div>
                    <CalculKeyboard />
                </div>
            </div>
        </section>
    )
}

export default HomePage;