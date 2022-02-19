import '../styles/index.scss'
import square from '../assets/images/sample.png'
import Bar from './Bar'
const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h2 style={{color:'rgb(229, 226, 226)'}}>React Boilerplate</h2>
            <img src={square} alt="square" width="100"/>
            <Bar/>
          </section>
        </main>
      </section>
    </>
  )
}

export default App