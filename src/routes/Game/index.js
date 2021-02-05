import {useState} from "react";
import POKEMONS from "../../pokemons.json";
import PokemonCard from "../../components/PokemonCard";
import bg3 from "../../assets/bg3.jpg";
import style from './style.module.css';

const GamePage = () => {
    const styleBg = {backgroundImage: `url(${bg3})`};
    const [pokemons, setPokemons] = useState(POKEMONS);
    const handleClickCard = (id) => {
        setPokemons(prevState => {
            const stateCopy = JSON.parse(JSON.stringify(prevState));
            return stateCopy.map(pokemon => {
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                }
                return pokemon;
            })
        })
    };
    return (
        <>
            <div style={styleBg} className={style.root}>
                <div className={style.wrapper}>
                    <div className={style.flex}>
                        {
                            pokemons.map(
                                item => <PokemonCard
                                    key={item.id}
                                    id={item.id}
                                    type={item.type}
                                    img={item.img}
                                    name={item.name}
                                    values={item.values}
                                    isActive={item.active}
                                    setActive={handleClickCard}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;