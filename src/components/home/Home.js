import React from 'react';
import style from './home.module.css';

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.content}>
                <div>
                    <div>
                        <h1>Hi,</h1>
                        <h1>I'm <span className={style.emphasized}>Paiva</span>,</h1>
                        <h1>web and game developer</h1>
                        <p className={style.lowkey}>Frond End Developer / Game Programmer</p>
                    </div>
                    <div className={style.btnContainer}>
                        <a className={style.homeBtn} href="">Contact Me</a>
                        <a className={style.homeBtn} href="">Check My Work</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;