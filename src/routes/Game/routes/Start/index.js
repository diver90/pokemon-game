import {useState, useEffect, useContext } from "react";
import bg3 from "../../../../assets/bg3.jpg";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";
import cn from 'classnames';

import style from './style.module.css';
import {useHistory, useRouteMatch} from "react-router-dom";


const DATA = {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
    }
};


const StartPage = () => {
    const match = useRouteMatch();
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const styleBg = {backgroundImage: `url(${bg3})`};
    const [pokemonsBase, setBasePokemons] = useState({});
console.log(pokemonContext);
    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setBasePokemons(pokemons);
        })
    }, []);

    const handleClickCard = (id) => {
        setBasePokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1]};
                if (pokemon.id === id) {
                    pokemonContext.pokemons.push(pokemon);
                    pokemon.isSelected = !pokemon.isSelected;
                    // database.ref('pokemons/'+ item[0]).set({...pokemon});
                    //firebase.postPokemon(item[0], pokemon);
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleAddCard = () => {
        const data = DATA;
        firebase.addPokemon(data);
    }

    const history = useHistory();

    const handleStartGame = () => {
        history.push(`${match.path}board`);
    };

    return (
        <>
            <div style={styleBg} className={style.root}>
                <div className={style.wrapper}>
                    <div className={style.flex}>
                        <button className={cn(style.btn)} onClick={handleStartGame}>Start Game!</button>
                    </div>

                    <div className={style.flex}>
                        {

                            Object.entries(pokemonsBase).map(([key, {name, img, id, type, values, isSelected}]) =>
                            (
                                <PokemonCard
                                    key={key}
                                    id={id}
                                    type={type}
                                    img={img}
                                    name={name}
                                    values={values}
                                    isActive={true}
                                    isSelected={isSelected}
                                    setActive={handleClickCard}
                                    minimize={false}

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