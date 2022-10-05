import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import styles from '../styles/Home.module.css'

const TypeWriter = () => {

    const [text] = useTypewriter({
        words: ['delicious', 'delightful', 'delectable', 'Life!'],
        loop: 0
    })

    return (
        <div className={styles.content}>
            <span>{text}</span>
            <Cursor/>
        </div>
    )
}

export default TypeWriter