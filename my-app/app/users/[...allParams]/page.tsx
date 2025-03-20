import React from 'react'

const page = async ({params}:any) => {
    const rest =await params;
    console.log(rest.allParams); //["yo","hi"]
  return (
    <div>
      Hello there
    </div>
  )
}

export default page
