import { useState } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const [player2Pokemons, setPlayer2Pokemons] = useState({})
    const [winStatus, setWinStatus] = useState({})
    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key]

                return copyState;
            }

            return {
                ...prevState,
                [key]: pokemon
            }
        });
    };

    const handlePlayer2Pokemons = (player2) => {
        return setPlayer2Pokemons(player2);
    };

    const hanldleEndGame = (status) => {
        return setWinStatus(status);
    };

    return (
        <PokemonContext.Provider value={
            {
                pokemons: selectedPokemons,
                player2: player2Pokemons,
                win: false,
                onEndGame: hanldleEndGame,
                onSelectedPokemons: handleSelectedPokemons,
                onArrivePokemons: handlePlayer2Pokemons,
            }
        }>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;