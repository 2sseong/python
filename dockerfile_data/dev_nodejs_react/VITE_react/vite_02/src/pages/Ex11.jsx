import { useState, useMemo } from 'react'


const ShowState = ({ number, text }) => {
    //고의적인 렉 유발
    const heavyCalc = () => {
        console.warn("☠️과도한 연산 실행중☠️")
        let s = 0
        for (let i = 0; i < 500 * 1000 * 1000; i++) {
            s += 1
        }
        return s
    }

    const calc = useMemo(() => heavyCalc(), [number])

    return (
        <>
            <p>{calc}</p>
            <p>숫자:{number}</p>
            <p>글자:{text}</p>
        </>
    )
}

const UseM = () => {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("")



    return (
        <>
            <h1>11. useMemo 실습: 렌더링 최적화</h1>
            <h2>숫자변경</h2>
            <h3>{number}</h3>
            <button onClick={() => { setNumber(number + 1) }}>+ 증가</button>
            <button onClick={() => { setNumber(number - 1) }}>- 감소</button>
            <hr />
            <h2>글자변경</h2>
            <h3>{text}</h3>
            <input type="text" onChange={e => { setText(e.target.value) }} />
            {<ShowState number={number} text={text} />}
        </>
    )
}

export default UseM