import head from './style.module.css';

const Header = ({title, descr}) => {
    return (
    <header className={head.root}>
        <div className={head.forest}></div>
        <div className={head.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </header>
    )
}

export default Header;