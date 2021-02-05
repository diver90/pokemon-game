import style from './style.module.css';
import MenuHeader from "../../components/MenuHeader";

const NotFoundPage = ({ onClickButton }) => {
    const handleClick = () => {
        console.log('####: <GamePage />');
        onClickButton && onClickButton('app');
    }
    return (
        <>
            <div className={style.container}>
            <h1>Page Not Found</h1>
                <button onClick={handleClick}>Go Home</button>
            </div>
        </>
    );
};

export default NotFoundPage;