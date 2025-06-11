import './Ex07.css'
import myStyle2 from './Ex07.module.css'

const Css = () => {

    const myStyle1 = { width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "Green" }



    return (
        <>
            <h1>7. 리액트에 CSS스타일 적용하기</h1>

            <div style={myStyle1}>mystyle1 방식</div>
            <div style={{ ...myStyle1, backgroundColor: "blue" }}>mystyle1에 부분 업데이트</div>
            <div className="ex7-div">css파일 사용</div>
            <div className={myStyle2["ex7-div"]}>module.css파일 사용</div>
            <ul >
                <li >적용잘되네요</li>
            </ul>
            <div className={myStyle2["ex7ex7"]}></div>
        </>
    )
}

export default Css