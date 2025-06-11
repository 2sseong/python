const Inp = () => {


    // localStorage CRUD
    // Create 입력
    const data = { id: 1, name: "홍길동", comment: "세번째입력드립니다." }
    const jdata = JSON.stringify(data)
    localStorage.setItem('test3', jdata)

    // Read 읽기
    const readData = localStorage.getItem("test3")
    const oData = JSON.parse(readData)

    // Delete
    // localStorage.removeItem('test3') // 1개삭제
    // localStorage.clear() // 모두삭제
    return (
        <>
            <h1> 불러왔습니다.</h1>
            <h2>{oData.name}</h2>
            <h2>{oData.comment}</h2>


        </>
    )

}























export default Inp