// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard'
import {services} from '../data'

const index = () => {
  
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className='my-3 font-medium'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service => (
              <div className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
                <ServiceCard service={service} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index


// export const getServerSideProps = async (
//   context:GetServerSidePropsContext
//   ) => {
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("server", services);
  
//   return {
//     props:{
//       services: data.services
//     }
//   }
// }

// export const getStatisticsProps = async (
//   context:GetStaticPropsContext
//   ) => {
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("server", services);
  
//   return {
//     props:{
//       services: data.services
//     }
//   }
// }