import styles from '../styles/components/Badges.module.css';

export function Badges(){

    return (
        <div className={styles.completedGoalsContainer}>
            <span>
                <img src="/icons/star.svg" alt="Metas Completas"/>
                <span>Metas Completas</span>
            </span>
            <span>2</span>
        </div>
    )
}