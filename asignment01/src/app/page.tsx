import Image from "next/image"
export default function Home(){
  return(
    <div className="intro">
      <div>
      <h1>Introduction:</h1>
      <br />
      <br />
      <h3>My name is <br /> Muhammad Faraz</h3>
      <h3>and I am a <br /> Full-stack Enthusiast</h3>
      </div>

      <div className="image">
        <img className="intro1" src="./images/my image.png" alt="Profile Picture" />
      </div> 

    </div>
  )
}