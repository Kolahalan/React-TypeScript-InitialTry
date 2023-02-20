
type Greetprops = {
    name: string
    messageCount: number
    isLoggedin: boolean
}

const Greet = (props: Greetprops) => {
  return (
    <div style={{textAlign: 'center'}}>
        
       {props.isLoggedin?<h2 > Welcome {props.name}, You have {props.messageCount} new messages</h2>:"Wecome Guesst"} 
    </div>
  )
}

export default Greet