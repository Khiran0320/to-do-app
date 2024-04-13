export function Todos({todos}){
    return <div>
    {todos.map(function(todo){
        return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick = {()=>{todo.completed == true? "Completed": "Mark as completed"}}>Mark as completed</button>
        </div>
    })}
       
    </div>
}