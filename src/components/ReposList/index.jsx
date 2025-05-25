import styles from './ReposList.module.css';

import {useEffect, useState } from "react";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 2000);
        })
        .catch(erro => {
            console.error('Erro ao buscar repositórios:', erro);
            setEstaCarregando(false);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1 className={styles.carregando}>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) =>
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b>Nome: </b>{name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b>{language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visite o site</a>
                    </li>
                )}
            </ul>
            )}
        </div>
    )
}

export default ReposList;
