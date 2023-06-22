import face from '../drawable/my_face.png'
import Textfit from 'react-textfit'

export default function About_me() {
  return (
    <>
      <div className='h-auto font-mono pb-14'>
        <div className="w-full flex justify-center">
          <div className="pt-6 pb-8">
            <div className="flex items-start">
              {/* <div className="mt-12 text-left text-4xl font-semibold" style={{writingMode: 'vertical-rl'}}> */}
              <div className="text-left text-xl font-semibold">
                {'Developer'.split('').map((letter, i) => (
                  <div key={i}>{letter}</div>
                ))}
              </div>
            <img className="ml-10 rounded-full w-full h-64" src={face}/>
            </div>
          </div>   
        </div>
        <div className="flex flex-col text-center pb-6">
          <h1 className="text-4xl font-semibold w-100">Mateusz Klimczak</h1>
          <div className="pb-8">
          </div>
          <a className="text-sm font-semibold text-gray-400">enjoys coffee. good coffee</a>
        </div>
      </div>
    </>
  )
}