import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../commons/container';
import useSceneChange from '../../scenes/useSceneChange';
import Scenes from '../../scenes/Scenes';
import Button from '../../commons/buttons/Button';

import * as style from './home.module.css';

const Home = () => {

    const { currentScene } = useSceneChange(Scenes.HOME);

    return (
        <Container>
            <div>
                <div>
                    <h1>Hi,</h1>
                    <h1>I'm <span className={style.emphasized}>Paiva</span>,</h1>
                    <h1>web and game developer</h1>
                    <p className={style.lowkey}>Front End Developer / Game Programmer</p>
                </div>
                <div className={style.btnContainer}>
                    <Link className={style.homeBtn} to="/contact">
                        <Button>CONTACT ME</Button>
                    </Link>

                    <Link className={style.homeBtn} to="/projects">
                        <Button>MY PROJECTS</Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Home;