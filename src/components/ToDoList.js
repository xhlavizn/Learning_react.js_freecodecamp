import React from "react"
import TodoItem from "./TodoItem"
import todosData2 from "./todosData"

class TodoList extends React.Component{
  constructor(){
      super()
      this.state={
          todos: todosData2
      }
      this.handleChange = this.handleChange.bind(this)
    }

      handleChange(id){
        console.log("HANDLECHANGE TRIGGERED") 
              
      this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo => {

            console.log("ITERATION"+todo.id)
            if (todo.id === id) {
              console.log("from"+todo.completed)
              console.log("todomatch"+todo.id)   
              todo.completed = !todo.completed
              console.log("to"+todo.completed)
            }
            console.log("Checkpoint 1")
            return todo

        })
        console.log("Checkpoint 2")
        return{
          todos: updatedTodos
        }

      })
    }  
       




      render(){
        const todoItems=this.state.todos.map (item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div className="todo-list">
                  {todoItems}
            </div>        
              )


      }



    }  








    export default TodoList