import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../commons/container';
import { useScene } from '../../scenes/SceneContext';
import Scenes from '../../scenes/Scenes';
import Button from '../../commons/buttons/Button';

import style from './home.module.css';

const Home = () => {

    const { setScene } = useScene();

    useEffect(() => {
        setScene(Scenes.HOME);
    }, []);

    return (
        <Container>
            <div>
                <div>
                    <h1>Hi,</h1>
                    <h1>I'm <span className={style.emphasized}>Paiva</span>,</h1>
                    <h1>web and game developer</h1>
                    <p className={style.lowkey}>Frond End Developer / Game Programmer</p>
                </div>
                <div className={style.btnContainer}>
                    <Link className={style.homeBtn} to="/contact">
                        <Button>Contact me</Button>
                    </Link>

                    <Link className={style.homeBtn} to="/projects">
                        <Button>Check my work</Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Home;