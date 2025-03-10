import axios from "axios"
import Link from "next/link";

const fetchUser = async ()=>{
  await new Promise(r=>{setTimeout(()=>r("yo"),3000)});
  const user = await axios.get('http://localhost:3001/api/v1/user');
  return user.data;
}

const Home = async () => {
  const user =  await fetchUser();
  return (
    <div>
      Users page
      {JSON.stringify(user)}
      <Link className="bg-slate-600 rounded-lg mx-2 p-1"
      href={'/api/v1/user'}>Go to the api route</Link>
    </div>
  )
}

export default Home
