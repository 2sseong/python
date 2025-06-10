import { useState } from 'react'







const Sendform = () => {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("남자")

    const changeName = (event) => setName(event.target.value)
    const changeGender = (event) => setGender(event.target.value)
    const handleSubmit = (event) => {
        alert(`등록되었습니다. 이름:${name} / 성별:${gender}`)
        event.preventDefault() // form 제출시 새로고침 방지
    }



    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">이름</label>
                <input type="text" value={name} onChange={changeName} />
                <hr />
                <label htmlFor="">성별</label>
                <select name="" id="" value={gender} onChange={changeGender}>
                    <option value="남자">남성</option>
                    <option value="여자">여성</option>
                </select>
                <input type="submit" value="제출" />
                <hr />
            </form>
        </>
    )
}


export default Sendform