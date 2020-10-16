import React from "react"


 function TodoItem (props) {
    const completedStyle={
      fontStyle: "italic",
      textDecoration: "line-through"
    }
  
    
  
  //console.log(props.todo.completed+props.todo.id)

  return (
    <div>
      <input
        type="checkbox"     
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
        
           />

      <h2          style={props.item.completed ? completedStyle : null}> {props.item.name} </h2>
     
    </div>
  )
}

export default TodoItem