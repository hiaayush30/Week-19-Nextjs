import React from 'react'

const page = async ({params}) => {
  const {subfolders}=await params;
  console.log(subfolders);
  return (
    <div>
      subFolders : {subfolders}
    </div>
  )
}

export default page
