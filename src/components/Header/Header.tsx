import styles from "./Header.module.css"
import igniteSymbol from "./assets/ignite-symbol.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteSymbol} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}
