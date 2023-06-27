import styles from './Header.module.css'

import Title from "../Title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../Icon/Icon'

function Header() {
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Iago Pinheiro</Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" link="https://github.com/iagoPinheiro1401" />
            </div>
        </div>
    )
}

export default Header