import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <div className='text-white bg-zinc-900 mt-10'>
      <div className='p-10 flex justify-center flex-row'>
        <div className="flex-1">
          <div className=" mt-10 text-5xl opacity-50">
             Welcome To
          </div>
          <div className="mt-3 leading-tight text-6xl">
            <span className='text-orange-600 '>Doubts And</span> <span className='text-[#00df9a] font-bold'> Frequently <span className='text-[#00df9a] font-bold ml-40'>Asked Questions</span></span>
          </div>
          <div className='flex justify-center text-xl mt-16 opacity-70 text--600'>
            Don't let your doubts hold you back!!
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-full w-96 m-auto justify-center">
            <img className='' src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Hero