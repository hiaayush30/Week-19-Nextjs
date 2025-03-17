
import React from 'react'

const UserIdPage = async ({params}:any) => {
    const {id} = await params;
    let data;
    data = await fetch('https://jsonplaceholder.typicode.com/todos/'+id)
    data = await data.json();
  return (
    <div>
      This is todo with id:{id} 
        {JSON.stringify(data)}
    </div>
  )
}

export default UserIdPage
