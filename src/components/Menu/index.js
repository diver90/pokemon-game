import cn from 'classnames';
import {Link} from "react-router-dom";
import style from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    },
]

const Menu = ({ onClickMenu, active}) => {
    const handleClick = () => {
        onClickMenu && onClickMenu();
    }
    return (
    <div className={cn(style.menuContainer, {
        [style.active]: active === true,
        [style.deactive]: active === false
    })}>
        <div className={style.overlay} />
        <div className={style.menuItems}>
            <ul>
                {
                    MENU.map(
                        ({title, to}, index) => {
                            return (
                                <li key={index} onClick={handleClick}>
                                    <Link to={to}>
                                        {title}
                                    </Link>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    </div>
    );
};

export default Menu;