import React, { useState, useEffect } from "react"
import useCounter from "./UseCounter"


const Accommodate = (props) => {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0)

    console.log(count, isFull)

    useEffect(() => {
        if (count >= 10) {
            setIsFull(true)
        } else {
            setIsFull(false)
        }
    }, [count])

    return (
        <>
            <p>{`총 ${count}명 수용하였습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button >
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red", backgroundColr: "yellow" }}>정원이 가득 찼습니다</p>}
        </>
    )
}

export default Accommodate