import {useState} from 'react';
import cn from 'classnames';
import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";

const PlayerBoard = ({ player, cards, onClickCard }) => {
    const [isSelected, setSelected] = useState(null);
    return (
        <>
            {
                cards.map((item) =>
                    (
                        <div className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                             onClick={()=> {
                                 setSelected(item.id);
                                 onClickCard && onClickCard({
                                     player,
                                     ...item,
                                 })
                             }}
                        >
                        <PokemonCard
                            id={item.id}
                            key={item.id}
                            type={item.type}
                            img={item.img}
                            name={item.name}
                            values={item.values}
                            isActive
                            minimize
                        />
                        </div>
                    ))
            }
        </>
    )
};

export default PlayerBoard;