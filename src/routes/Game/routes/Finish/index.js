import PlayerBoard from "../../component/PlayerBoard";
import {useHistory} from "react-router-dom";
import {useContext, useState} from "react";
import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/FirebaseContext";


import s from "./style.module.css";
import style from "../Start/style.module.css";
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
    const {pokemons, player2} = useContext(PokemonContext);
    const pokemonContext = useContext(PokemonContext);
    const firebase = useContext(FireBaseContext);
    const history = useHistory();
    const [player1, setPlayer1] = useState(()=> {
        return (
            Object.values(pokemons).map(item => ({
                    ...item,
                    possession: 'blue',
                })
            )
        )
    });

    if(Object.keys(player2).length === 0){
        history.replace('/game');
    }
    if(pokemonContext.win === false){
        history.replace('/game');
    }
    const [choosenCard, setChoosenCard] = useState(null);
    const handleEndGame = () => {
       //console.log('###:', choosenCard);
       firebase.addPokemon(choosenCard);
        //pokemonContext.onSelectedPokemons({})
        history.push('/game');
    }

    return (
        <div className={s.wrapper}>
             <div >
                 <div className={s.flex}>
                     {
                         player1.map(item =>
                             (
                                 <PokemonCard
                                     className={style.card}
                                     key={item.id}
                                     id={item.id}
                                     type={item.type}
                                     img={item.img}
                                     name={item.name}
                                     values={item.values}
                                     isActive={true}
                                     isSelected={item.isSelected}
                                 />
                             ))
                     }
                 </div>
             </div>
             <div className={s.btnWrapper}>
                 <button className={s.btn} onClick={handleEndGame}>End Game</button>
            </div>
            <div className={s.flex}>
                {
                    player2.map(item =>
                        (
                            <PokemonCard
                                className={style.card}
                                key={item.id}
                                id={item.id}
                                type={item.type}
                                img={item.img}
                                name={item.name}
                                values={item.values}
                                isActive={true}
                                isSelected={item.isSelected}
                                onClickCard={() => {setChoosenCard(item)}}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default FinishPage;
