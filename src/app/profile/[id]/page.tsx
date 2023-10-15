
const UserProfile = ({params}:any) => {
    return (
      <div className="flex bg-slate-300 flex-col items-center  min-h-screen">
          <h1>Profile</h1>
          <br />
          <p className="text-4xl ">Profile Page
           <span className="p-2 rounded bg-orange-500 text-black">{params.id}</span>
          </p>
      </div>
    )
  }
  
  export default UserProfile