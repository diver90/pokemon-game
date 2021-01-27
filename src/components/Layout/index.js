import layout from './style.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const styleBg = { backgroundImage: `url(${urlBg})`, backgroundColor: colorBg};
    return (
        <section className={layout.root} id={id} style={styleBg}>
            <div className={layout.wrapper}>
                <article>
                    <div className={layout.title}>
                        <h3>{title}</h3>
                        <span className={layout.separator}></span>
                    </div>
                    <div className={layout.desc}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;