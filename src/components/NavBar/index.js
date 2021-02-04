import cn from 'classnames';
import style from './style.module.css';

const NavBar = ({active, onClickMenu, bgActive}) => {
   const handleClick = () => {
       onClickMenu && onClickMenu();
   }
    return (
        <nav id={style.navbar}
        className={cn({[style.bgActive]: bgActive})}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <div
                    onClick={handleClick}
                    className={cn(style.menuButton, {[style.active]: active})}>
                    <span/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;