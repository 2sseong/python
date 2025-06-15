import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData] = useState({ name: "", age: "", memo: "" })
  const [mydata, setMydata] = useState('')
  const [apidata, setApidata] = useState('')
  const [mylist, setMylist] = useState([])


  const handleData = (e) => {
    setData(pre => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const sendPost = () => axios.post('/data', data).then((res) => console.log(res.data))
  const myData = () => axios.get('/data').then((res) => setMydata(res.data))
  const myApi = () => axios.get('/api').then(res => setApidata(res.data))
  const myList = () => axios.get('/list').then(res => setMylist(res.data))




  return (
    <>

      <h1>test</h1>
      <div>
        이름: <input type="text" name="name" value={data.name} onChange={handleData} />
      </div>
      <div>
        나이: <input type="text" name="age" value={data.age} onChange={handleData} />
      </div>
      <div>
        메모: <input type="text" name="memo" value={data.memo} onChange={handleData} />
      </div>
      <button onClick={sendPost}>1번문제 전송</button>
      <button onClick={myData}>1번문제 받아오기</button>
      <div>{JSON.stringify(mydata)}</div>
      <button onClick={myApi}>2번 문제</button>
      <div>{JSON.stringify(apidata)}</div>
      <button onClick={myList}>3번 문제</button>
      <div>{JSON.stringify(mylist)}</div>

    </>
  )
}

export default App
