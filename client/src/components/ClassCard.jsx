import { Link } from "react-router-dom";

const ClassCard = ({title,url}) => {
  return (
    <Link to={"/classroom/"+url} className='border rounded-xl flex my-10 mx-6 h-60 w-48 flex-col text-white cursor-pointer hover:opacity-80'>
        <div className="h-32 w-32 border rounded-full m-auto"></div>
        <div className="m-auto mt-2">{title}</div>
    </Link>
  )
}

export default ClassCard