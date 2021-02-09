import {useContext} from 'react';
import {PokemonContext} from "../../../../context/pokemonContext";
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";


const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.entries(pokemonContext.pokemons).map(([key, {name, img, id, type, values}]) =>
                        (
                            <PokemonCard
                                key={key}
                                id={id}
                                type={type}
                                img={img}
                                name={name}
                                values={values}
                                isActive={true}
                                minimize={true}
                                className={s.card}
                            />
                        ))
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;