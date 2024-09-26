import React,{useEffect,useState}from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState(0);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/amunem0')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-300 p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className='mx-40' src={data.avatar_url} alt="GitPicture" width={300}/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/amunem0')
    return response.json()
}
