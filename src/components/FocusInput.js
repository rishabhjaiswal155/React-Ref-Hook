import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef=useRef(null)

    useEffect(()=>{
        //focus on input area
        inputRef.current.focus()

    },[])
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default FocusInput