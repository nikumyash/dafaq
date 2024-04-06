import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <div className='h-[550px] w-[400px] flex flex-col  rounded-xl mx-auto my-[100px] text-white bg-zinc-900'>
        <h1 className='flex text-3xl px-10 py-6 justify-center'>Sign Up </h1>
        <div className="flex flex-col">
            <div className="flex flex-col justify-around items-center m-6">
                <div className="flex flex-col mb-6">
                    <h2>Username : </h2>
                    <input type="text" className='border-b-2 w-72 h-8 bg-zinc-900' />
                </div>
                <div className=''>
                    <select className='bg-zinc-900 border-b-2  w-72 py-2'>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center m-6">
                <div className="mb-6">
                    <h2>E-MAIL : </h2>
                    <input type="email" className='border-b-2 w-72 h-8 bg-zinc-900' />
                </div>
                <div className="">
                    <h2>Password : </h2>
                    <input type="password" className='border-b-2 w-72 h-8 bg-zinc-900' />
                </div>
            </div>
        </div>
        <div className="w-32 h-12 m-auto rounded-md bg-blue-500 flex justify-center items-center cursor-pointer"> Sign Up</div>
        <p className="m-auto">Already have an account? <Link to="/" className="text-blue-500">Login Here</Link></p>
    </div>
  )
}

export default SignUpPage


