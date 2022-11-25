import React, {FC, useEffect, useState} from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { currentDate } from '../../constants/date/date';
import {getTime} from '../../utils/utils';
import styles from './layout.module.css';

const Layout: FC = () => {

    const [currentTime, setCurrentTime] = useState(getTime);

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setCurrentTime(getTime);
        }, 60000)

        return () => {
            clearInterval(intervalTime);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.main__background_color}>
                {<Outlet />}
                <nav className={styles.main__navigate}>
                    <ul>
                        <li className={styles.main__linkBox}>
                            <p className={styles.main__linkText}>Calculator</p>
                            <NavLink to={'/'}
                                     className={({ isActive }) => isActive ?
                                         styles.main__link_active
                                         :
                                         styles.main__link} />
                        </li>
                        <li className={styles.main__linkBox}>
                            <p className={styles.main__linkText}>Currency converter</p>
                            <NavLink to={'/converter'}
                                     className={({ isActive }) => isActive ?
                                         styles.main__link_active
                                         :
                                         styles.main__link} />
                        </li>
                        <li className={styles.main__linkBox}>
                            <p className={styles.main__linkText}>Radio</p>
                            <NavLink to={'/radio'}
                                     className={({ isActive }) => isActive ?
                                         styles.main__link_active
                                         :
                                         styles.main__link} />
                        </li>
                    </ul>
                </nav>
                <div className={styles.main__flexContainer}>
                    <div className={styles.main__btnBox}>
                        <button type={'button'} className={styles.main__button} />
                        <p className={`${styles.main__lang} ${styles.main__text}`}>En</p>
                    </div>
                    <div className={styles.main__dateBox}>
                        <div className={styles.main__date}>
                            <p className={styles.main__text}>{currentDate.day}</p>
                            <p className={styles.main__text}>{currentDate.shortMonthEng}</p>
                            <p className={styles.main__text}>{currentDate.year}</p>
                        </div>
                        <div>
                            <p className={styles.main__text}>{currentTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Layout;