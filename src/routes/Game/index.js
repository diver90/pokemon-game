import style from './style.module.css';

const GamePage = ({ onClickButton }) => {
    const handleClick = () => {
        console.log('####: <GamePage />');
        onClickButton && onClickButton('app');
    }
    return (
        <div>
           <button onClick={handleClick}>Go Home</button>
        </div>
    );
};

export default GamePage;