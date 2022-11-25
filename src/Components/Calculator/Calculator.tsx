import React, {FC, useEffect, useRef, useState} from 'react';

import {btnValue} from '../../constants/buttons/buttons';
import {engMessages} from "../../constants/const";
import Loader from '../Loader/Loader';
import ButtonBox from '../ButtonBox/ButtonBox';
import Button from '../Button/Button';

import pipBoy from '../../images/PIPBoy2000.svg';
import styles from './calculator.module.css';


const Calculator: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
    const [valueOut, setValueOut] = useState<string>('0');
    const refOutput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const printTimeout = setTimeout(() => {
            setLoading(false);
            setDisabledBtn(false);
        }, 3000);

        return () => {
            clearTimeout(printTimeout);
        }
    }, [])

    function enterSymbol(value: string) {
        let currentValue = value;
        let output = refOutput.current;

        setValueOut(currentValue);

        if (output) {
            if (output.value === '0'
                || output.value === engMessages.invalidValue
                || output.value === engMessages.cannotNegative
                || output.value === engMessages.lessThenZero) {
                output.value = '';
            }
            output.value += value;
        }
    }

    function performOperation(value: string) {
        let output = refOutput.current;

        if (output) {
            switch (value) {
                case 'C':
                    output.value = '0';
                    break;
                case 'CE':
                    output.value.length === 1 ?
                        output.value = '0'
                        :
                        output.value = output.value.substring(0, output.value.length - 1);
                    break;
                case '=':
                    try {
                        output.value = eval(output.value);
                    }
                    catch {output.value = engMessages.invalidValue}
                    break;
                case 'х²':
                    output.value = String(Math.pow(Number(output.value), 2));
                    break;
                case 'х':
                    output.value = String(Math.pow(Number(output.value), 3));
                    break;
                case '√x':
                    const resSqrt = String(Math.sqrt(Number(output.value)));
                    resSqrt !== 'NaN' ? output.value = resSqrt : output.value = engMessages.cannotNegative;
                    break;
                case '∛x':
                    output.value = String(Math.cbrt(Number(output.value)));
                    break;
                case 'ln':
                    const resLog = String(Math.log(Number(output.value)));
                    resLog !== 'NaN' ? output.value = resLog : output.value = engMessages.lessThenZero;
                    break;
                case 'log':
                    output.value = String(Math.log10(Number(output.value)));
                    break;
                case 'sin':
                    output.value = String(Math.sin(Number(output.value)));
                    break;
                case 'cos':
                    output.value = String(Math.cos(Number(output.value)));
                    break;
                case 'tan':
                    output.value = String(Math.tan(Number(output.value)));
                    break;
                case 'e':
                    output.value = String(Math.E);
                    break;
                case 'sinh':
                    output.value = String(Math.sinh(Number(output.value)));
                    break;
                case 'cosh':
                    output.value = String(Math.cosh(Number(output.value)));
                    break;
                case 'tanh':
                    output.value = String(Math.tanh(Number(output.value)));
                    break;
                case 'π':
                    output.value = String(Math.PI);
                    break;
                case 'Rand':
                    output.value = String(Math.random());
                    break;
            }
        }
    }

    return (
        <div className={styles.calculator__background_image} style={{backgroundImage: `url(${pipBoy})`}}>
            {loading ?
                <div className={styles.calculator__box_position}>
                    <Loader/>
                </div>
                :
                <div className={styles.calculator__box_position}>
                    <input className={styles.calculator__input} defaultValue={valueOut} ref={refOutput}
                           readOnly={true}/>
                </div>
            }
            <div className={styles.calculator__keyboard}>
                <ButtonBox>
                    {btnValue.scientificCalculator.flat(2).map((item, index) => {
                        return (
                            <Button value={item.value} sup={item.sup} sub={item.sub} key={index}
                                    width={(item.value === 'Rand') ? 50 : 35}
                                    disabled={disabledBtn}
                                    onClick={item.value === 'х²'
                                    || item.value === 'х'
                                    || item.value === '√x'
                                    || item.value === '∛x'
                                    || item.value === 'ln'
                                    || item.value === 'log'
                                    || item.value === 'sin'
                                    || item.value === 'cos'
                                    || item.value === 'tan'
                                    || item.value === 'e'
                                    || item.value === 'sinh'
                                    || item.value === 'cosh'
                                    || item.value === 'tanh'
                                    || item.value === 'π'
                                    || item.value === 'Rand' ? () => {
                                        performOperation(item.value)
                                    } : () => {
                                        enterSymbol(item.value)
                                    }}/>
                        )
                    })
                    }
                </ButtonBox>
                <ButtonBox>
                    {btnValue.calculator.flat(2).map((item, index) => {
                        return (
                            <Button value={item.value} sup={item.sup} sub={item.sub} key={index}
                                    disabled={disabledBtn}
                                    onClick={item.value === 'C' || item.value === 'CE' || item.value === '=' ? () => {
                                        performOperation(item.value)
                                    } : () => {
                                        enterSymbol(item.value)
                                    }}/>
                        )
                    })
                    }
                </ButtonBox>
            </div>
        </div>
    )
}

export default Calculator;