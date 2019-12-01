import React from 'react';
import style from './home.module.css';
import Container from '../../commons/container';

const Home = () => {
    return (
        <Container>
            <div>
                <div>
                    <h1 className={style.header}>Hi,</h1>
                    <h1 className={style.header}>I'm <span className={style.emphasized}>Paiva</span>,</h1>
                    <h1 className={style.header}>web and game developer</h1>
                    <p className={style.lowkey}>Frond End Developer / Game Programmer</p>
                </div>
                <div className={style.btnContainer}>
                    <a className={style.homeBtn} href="">Contact Me</a>
                    <a className={style.homeBtn} href="">Check My Work</a>
                </div>
            </div>
        </Container>
    );
};

export default Home;