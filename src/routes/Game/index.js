import {useState, useEffect} from "react";
import bg3 from "../../assets/bg3.jpg";
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase";

import style from './style.module.css';

const GamePage = () => {
    const styleBg = {backgroundImage: `url(${bg3})`};
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    })

    const handleClickCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    database.ref('pokemons/'+ item[0]).set({...pokemon});
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleAddCard = () => {
        const data = {
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

        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data);
    }

    return (
        <>
            <div style={styleBg} className={style.root}>
                <div className={style.wrapper}>
                    <div className={style.flex}>
                        <button className={style.flex} onClick={handleAddCard}>Add New Poke</button>
                    </div>

                    <div className={style.flex}>
                        {

                            Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
                            (
                                <PokemonCard
                                    key={key}
                                    id={id}
                                    type={type}
                                    img={img}
                                    name={name}
                                    values={values}
                                    isActive={active}
                                    setActive={handleClickCard}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;