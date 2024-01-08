import {useState} from 'react'
import {
  MainContainer,
  MainHead,
  SubHead,
  Image,
  Para,
  Button,
} from './styledComponents'

const subject =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

const ReadMore = () => {
  const [isClicked, setClickStatus] = useState(false)
  const [sub, editSub] = useState(subject)
  const selectBtn = () => {
    setClickStatus(prevState => !isClicked)
  }

  return (
    <MainContainer>
      <MainHead>React Hooks</MainHead>
      <SubHead>Hooks are a new addition to React</SubHead>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{isClicked ? sub.slice(0, sub.length) : sub.slice(0, 170)}</Para>
      <Button type="button" onClick={selectBtn}>
        Read {isClicked ? 'Less' : 'More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
