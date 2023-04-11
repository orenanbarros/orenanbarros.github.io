import React from 'react'

type Props = {
    text:string,
    buttonOk : boolean,
    close:boolean,
    setCloseModal?: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({text, buttonOk, close, setCloseModal}: Props) {
  

  const handleClick = ()=>{
    setCloseModal!(!close)
  }
  return (
    <>
    
    <div className={`modal ${close?'opacity-0 -z-10':'opacity-80 z-10'}  flex flex-col gap-5 absolute p-2 items-center justify-center `}></div>
    <div className={`${close?'opacity-0 -z-10':'opacity-80 z-10'} p-5 bg-green-200 flex flex-col items-center gap-5 absolute`}>
      {text}
      {buttonOk && (
          <button onClick={handleClick}>OK</button>
      )}
    </div>
    </>
    
        
     
    
  )
}

export default Modal