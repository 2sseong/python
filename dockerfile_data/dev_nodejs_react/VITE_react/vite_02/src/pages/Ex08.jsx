import { useState } from 'react'



const TodoList = () => {
    const [indata, setIndata] = useState("")
    const [add, setAdd] = useState([])


    const handleInput = e => {
        setIndata(e.target.value)
    }
    const handleAdd = () => {
        setAdd([...add, indata])
    }



    return (
        <>
            <h1>8.array를 이용한 ToDoList</h1>
            <label htmlFor="inin">배열요소 입력:</label>
            <input type="text" id='inin' onChange={handleInput} value={indata} />{" "}
            <button onClick={handleAdd}>추가</button>
            <button disabled={!(add.length > 0)}>삭제</button>
            <div>{indata}</div>
            <hr />
            <div>{add}</div>
            {add.map((v, i) => {
                return (
                    <div key={i}>{`${i + 1}:${v}`}</div>
                )
            })}
        </>
    )
}

export default TodoList