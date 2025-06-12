import { useState } from 'react'
import table from "./Ex12.data"
import css from './Ex12.module.css'

const Table = () => {
    const [ea, setEa] = useState(Array(table.length))

    const handleNum = (e) => {
        const index = e.target.id
        const value = e.target.value
        const newEa = [...ea]
        newEa[id] = value
        setEa(newEa)
    }

    return (
        <>
            <h1>12. 데이터 임포트 후 실시간 연산(미)</h1>
            <div className={css["data-box"]}>
                <table>
                    {table.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.product_name}</td>
                                <td>{v.price.toLocaleString('ko-KR')}</td>
                                <td>{v.category}</td>
                                <td>{v.delivery_price.toLocaleString('ko-kr')}</td>
                                <td><input id={i} type="number" value={ea[i]} onChange={handleNum} /></td>
                                <td>{(v.price * ea[i] + (ea[i] > 0 ? v.delivery_price : 0)).toLocaleString('ko-KR')}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={5}>합계</td>
                        <td>{"총합"}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}


export default Table