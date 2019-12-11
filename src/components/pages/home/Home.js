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
                    <Button className={style.homeBtn}>
                        <Link to="/contact">Contact me</Link>
                    </Button>

                    <Button className={style.homeBtn}>
                        <Link to="/projects">Check my work</Link>
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Home;