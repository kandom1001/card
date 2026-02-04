import GreetingCard from './GreetingCard'
import './App.css'

const pages = [
  {
    content: (
      <div className="page-cover">
        <div className="page-cover-bg" />
        <h1>老公</h1>
        <h1>生日快乐</h1>
        <p className="subtitle">Happy Birthday</p>
        <p className="hint">点击翻页</p>
      </div>
    ),
  },
  {
    content: (
      <div className="page-content-inner">
        <p>感谢你陪我度过这么开心的一年</p>
        <div className="page-photo">
          <img src="/images/IMG_5990.jpeg" alt="" />
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="page-content-inner">
        <p>愿老公天天都能这么开心</p>
        <div className="page-photo">
          <img src="/images/IMG_6556.jpeg" alt="" />
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="page-content-inner">
        <p>永远做你的小狗</p>
        <p className="from">汪汪</p>
      </div>
    ),
  },
]

function App() {
  return (
    <div className="app">
      <GreetingCard pages={pages} />
    </div>
  )
}

export default App
