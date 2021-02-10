import style from './style.module.css';
import {useHistory} from "react-router-dom";

const NotFoundPage = ({ onClickButton }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
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