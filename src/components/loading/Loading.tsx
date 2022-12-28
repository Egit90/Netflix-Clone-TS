import React, { CSSProperties } from 'react'
import styles from './Loading.module.css'
const Loading = ({ src }: { src: string }) => {
    return (
        <div className={styles.spin1}>
            <LockBody />
            <img
                className="w-12 h-12 absolute top-[50%] left-[50%] mt-[-100px] ml-[-22px]"
                src={`/images/users/${src}.png`}
                alt="avatar"
            />
        </div>
    )
}
const LockBody = () => {
    return <div className="lock"></div>
}
export const ReleaseBody = () => {
    return <div className="Release"></div>
}

export default Loading
