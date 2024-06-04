import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center max-w-7xl mx-auto gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 cursor-grab' key={technology.icon}>
          <BallCanvas icon={technology.icon} />
          <p className='text-white-100 text-[14px] text-center font-bold pl-1 tracking-wider '>{technology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Tech