import { useState } from 'react'

const CreateClassroom = () => {
    const [stud, setStud] = useState([]);
    const [list,setList] = useState("");
    const RemStud = (e) => {
        setStud(stud.filter(mail => mail !== e));
    }
  return (
    <div className=" text-white bg-zinc-900">
        <h1 className='flex text-3xl px-10 py-6 justify-center'>Create Classroom</h1>
        <div className="flex flex-col justify-around ml-14 m-6">
                <div className="flex flex-col mb-6">
                    <h2>Enter Name of Classroom : </h2>
                    <input type="text" className='border-b-2 outline-none w-72 h-8 bg-zinc-900' />
                </div>
                <div className="flex flex-col mb-6 left-0">
                    <h2>Add Students : </h2>
                    <div className="flex gap-6">
                        <input type="text" onChange={(e)=>{setList(e.target.value)}} className='border-b-2 outline-none w-72 h-8 bg-zinc-900' />
                        <div className="h-8 w-12 border rounded-md text-center cursor-pointer hover:opacity-70" onClick={()=>{setStud([...stud,list])}}>+</div>
                    </div>
                    <div className="">
                        {
                            stud && stud.map((e,i)=><div className='flex my-6 justify-between' key={i}><p>{e}</p><button onClick={()=>{RemStud(e)}}>Remove</button></div>)
                        }
                </div>
            </div>
            <div className="m-auto border py-3 px-10">Create</div>
        </div>
    </div>
  )
}

export default CreateClassroom