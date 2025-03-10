const getBlogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await res.json();
}

interface ITodos {
    title:string;
    completed:boolean;
}

const page = async () => {
    const todos:ITodos[] = await getBlogs()
    return (
        <div> 
            <h1 className="text-4xl text-center my-4">The best blogs for you</h1>
            {todos.map(todo=>{
                if(todo.completed){
                    return <div key={todo.title} className="text-green-500">{JSON.stringify(todo)}</div>
                }else {
                    return <div key={todo.title}>{JSON.stringify(todo)}</div>
                }
            })}
        </div>
    )
}

export default page
