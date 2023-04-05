import {useState} from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

type Props = {}

function GoToTopButton({}: Props) {
    const [visible, setVisible] = useState<boolean>()

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
    };

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <button onClick={scrollToTop} className='gotoTopButton' style={{display: visible ? 'flex' : 'none'}}>
        <FaArrowCircleUp/>
      </button>
    </>
  )
}

export default GoToTopButton