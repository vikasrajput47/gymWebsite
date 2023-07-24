import './UI.css'


import men from './img/men.png'
function Home(){
 
    return <>
    <div >
 
    <div className="midSection bottomTop" >
      <div className="men">
        <img src={men} alt="" />
      </div>
      <div className="midContent">
      <p>Push Your Limits, Unleash Your Power: Discover The Gold Gym.</p>
      <div className="join"><a href="/join">Join Now</a></div>
      </div>
    </div>

    </div>
    </>
}
export default Home;