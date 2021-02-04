import style from './style.module.css';

const AboutPage = ({ onClickButton }) => {
    const handleClick = () => {
        console.log('####: <GamePage />');
        onClickButton && onClickButton('app');
    }
    return (
        <>
            <div className={style.container}>
            <h1>About Page</h1>
                <button onClick={handleClick}>Go Home</button>
            </div>
        </>
    );
};

export default AboutPage;