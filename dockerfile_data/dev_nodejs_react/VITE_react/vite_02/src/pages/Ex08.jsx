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

    // 엔터 버튼 활성화
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAdd()
            setIndata("")
        }
    }

    // 삭제버튼
    const [chk, setChk] = useState()
    const handlechk = e => {
        const { value, checked } = e.target
        setChk(data => {
            return { ...data, [value]: checked }

        })
        console.log(chk)
    }


    const handleDel = () => {
        setAdd(add.filter((data) => data.checked !== "false"))
    }



    return (
        <>
            <h1>8.array를 이용한 ToDoList</h1>
            <label htmlFor="inin">배열요소 입력:</label>
            <input
                type="text"
                id='inin'
                onChange={handleInput}
                value={indata}
                onKeyDown={handleKeyDown}
            />{" "}
            <button onClick={handleAdd}>추가</button>
            <button disabled={!(add.length > 0)} onClick={handleDel}>삭제</button>
            <div>{indata}</div>
            <hr />
            <div>{add}</div>
            {add.map((v, i) => {
                return (
                    <>
                        <div key={i}>{`${i + 1}:${v}`}<input type="checkbox" value={v} onChange={handlechk} /></div>
                    </>
                )
            })}
        </>
    )
}

export default TodoList