import React , {useState, useRef, useEffect} from 'react'

export const MutableRef = () => {
    const [timer,setTimer] = useState(0)
    const InterValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(InterValRef.current)
        window.clearInterval(InterValRef.current) 
    //This func stops the timer and assigns its value to the last InterValRef
    setTimer(0)
    }

    useEffect(()=>{
        InterValRef.current = window.setInterval(()=>{ //This func creates a timer and assigns its value to InterValRef
            setTimer((timer)=> timer+1)
        },1000)
        return ()=>{
            stopTimer()
        }
    },[])

  return (
    <div>
        HookTimer - {timer} -
        <button onClick={()=> stopTimer()}>Stop Timer</button>    
    </div>
  )
}
