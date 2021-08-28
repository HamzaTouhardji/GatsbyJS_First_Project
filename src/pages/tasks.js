import React from 'react'
import Layout from '../pages/components/Layout'
import * as styles from '../pages/styles/tasks.module.css'

export default function tasks() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.item}>A FAIRE</div>
                <div className={styles.item}>EN COURS</div>
                <div className={styles.item}>FAIT</div>  
            </div>
        </Layout>
    )
}
