import {useState, useEffect, useContext } from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import bg3 from "../../../../assets/bg3.jpg";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";
import cn from 'classnames';

import style from './style.module.css';


const StartPage = () => {
    const match = useRouteMatch();
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const styleBg = {backgroundImage: `url(${bg3})`};
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebase.offPokemonSocket();
    }, []);

    const handleClickCard = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected
            }
        }))

        }

    const history = useHistory();

    const handleStartGame = () => {
        history.push(`${match.path}board`);
    };

    return (
        <>
            <div style={styleBg} className={style.root}>
                <div className={style.wrapper}>
                    <div className={style.btnWrapper}>
                        <button
                            className={cn(style.btn)}
                            onClick={handleStartGame}
                            disabled={Object.keys(pokemonContext.pokemons).length < 5}
                        >
                            Start Game!</button>
                    </div>

                    <div className={style.flex}>
                        {
                            Object.entries(pokemons).map(([key, {name, img, id, type, values, isSelected}]) =>
                            (
                                <PokemonCard
                                    className={style.card}
                                    key={key}
                                    id={id}
                                    type={type}
                                    img={img}
                                    name={name}
                                    values={values}
                                    isActive={true}
                                    isSelected={isSelected}
                                    onClickCard={() => {
                                        if (Object.keys(pokemonContext.pokemons).length < 5 || isSelected) {
                                            handleClickCard(key)
                                        }
                                    }}

                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartPage;