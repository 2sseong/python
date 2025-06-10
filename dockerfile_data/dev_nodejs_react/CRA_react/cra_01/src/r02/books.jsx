const books = [
    { id: 101, bookname: "총 균 쇠", price: 83000 },
    { id: 102, bookname: "균 쇠 총", price: 23000 },
    { id: 103, bookname: "쇠 총 균", price: 33000 },
    { id: 104, bookname: "총 쇠 균", price: 13000 }
]




const Books = () => {
    return (
        <>
            <ul>

                {books.map(v => <li key={v.id}>{v.bookname}({v.price})원</li>)}


            </ul>
        </>
    )
}


export default Books