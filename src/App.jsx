import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2><i>adoptme.com</i></h2>
        <h1>Adopt a <span>Pet</span> Today</h1>
        <div id="pets">
          <div class="card">
            <img src="/dog.jpg" alt="" />
              <h3>Meet Jerry</h3>
              <p>
                Jerry is a charming and friendly dog with a heart of gold, and he is
                looking for a loving home to call his own. He is a medium-sized mixed
                breed with soft, fluffy fur and soulful brown eyes that will melt your
                heart. If you are looking for a loyal and loving companion who will
                bring endless hoy into your lige Jerry may be the perfect pet for
                you. Adopting Jerry means giving him a second chance at a happy life,
                and you will be rewarded with the unconditional love and companionsship
                that only a dog can provide. So don't hesitate to bring this wonderful
                pup home today!
              </p>
          </div>
          <div class="card">
            <img src="/cat.jpg" alt="" />
              <h3>Meet Tom</h3>
              <p>
                Tom is a handsome and affectionate cat who is looking for his forever
                home. He is a medium-sized domestic shorthair with sleek black and
                white fur and striking green eyes that will capture yout heart. If you
                are looking for a loyal and loving and loving companion who will provide you
                with endless joy and entertainment, Tom may be the perfect pet for you.
                Adopting Tom means giving him a second chance at a happy life,
                and you will be rewarded with the unconditional love and companionship that only a cat can provide
                mhn mmmmm. So why not bring this wonderful feline into your life today?

              </p>
          </div>
        </div>
        <h4>a gift of new life</h4>
      </div>
    </>
  )
}

export default App
