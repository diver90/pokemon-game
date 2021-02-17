import {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "../../component/PlayerBoard";

import s from './style.module.css';
import Result from "../../../../components/Result";
import ArrowChoice from "../../../../components/ArrowChoice";

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach((item) => {
        if(item.card !== null) {
            if (item.card.possession === "red") {
                player2Count++;
            }
            if (item.card.possession === "blue") {
                player1Count++;
            }
        }
    });

    return [player1Count, player2Count];
}

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);
    const pokemonContext = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const [status, setStatus] = useState('');
    const [side, setSide] = useState(0);
    const [player1, setPlayer1] = useState(()=> {
        return (
            Object.values(pokemons).map(item => ({
                ...item,
                possession: 'blue',
                })
            )
        )
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const randomInteger = (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    const [steps, setSteps] = useState(() => {return randomInteger(0.5, 1)});
    const history = useHistory();
    const handleClickBoardPlate = async (position) => {
        if (choiceCard) {
            console.log("### side on choice",side);
            // if(side === choiceCard.player + 1) {
                const params = {
                    position,
                    card: choiceCard,
                    board
                };

                const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(params),
                });

                const request = await res.json();
                setBoard(request.data);

                if (choiceCard.player === 1) {
                    setSide(1);
                    setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
                }

                if (choiceCard.player === 2) {
                    setSide(0);
                    setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
                }


                setSteps(prevState => {
                    return prevState + 1;
                });

            // }
        }
    }

    const handleEndGame = () => {
        pokemonContext.onEndGame(status);
        history.push('/game/finish');
    };

    useEffect(() => {

        if (steps === 9) {

            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                setStatus('win');
                handleEndGame(true);
            }
            if (count1 < count2) {
                setStatus('lose');
                handleEndGame(false);
            }
            if (count1 === count2) {
                setStatus('draw');
                handleEndGame(false);
            }

        }
    }, [steps]);

    useEffect(async () => {
        const BoardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const BoardRequest = await BoardResponce.json();
        setBoard(BoardRequest.data);

        const player2Responce = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Responce.json();
        pokemonContext.onArrivePokemons(player2Request.data);
        setPlayer2(() => {
            return (
                player2Request.data.map(item => ({
                        ...item,
                        possession: 'red',
                    })
                ))
        });

    }, []);

    if(Object.keys(pokemons).length === 0){
        history.replace('/game');
    }

    return (
        <div className={s.root}>
            <ArrowChoice side={side+1}/>
            {/*<Result type={status}/>*/}
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card) => {
                         (side === 0) && setChoiceCard(card)
                    }
                    }
                />
            </div>
            <div className={s.board}>
                {
                    board.map( item => {
                        return (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={ ()=> !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} minimize isActive/>
                            }
                        </div>
                        )

                    } )

                }
                { status !== '' && <Result type={status}/>}
            </div>
            <div className={s.playerTwo}>
                   <PlayerBoard
                       player={2}
                       cards={player2}
                       onClickCard={(card) => {
                           (side === 1) && setChoiceCard(card)
                       }
                       }
                   />
            </div>
        </div>

    );
};

export default BoardPage;