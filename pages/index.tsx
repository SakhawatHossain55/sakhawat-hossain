import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import {services} from '../data'
import { fadeInpUp, routeAnimation, stagger } from '../animations'
import { GetServerSidePropsContext } from 'next'

const index = () => {
  
  return (
    <motion.div 
      className="flex flex-col flex-grow px-6 pt-1" 
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit"
      >
      <h5 className='my-3 font-medium'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h4 
          className='my-3 text-xl font-bold tracking-wide'
        >
          What I am doing
        </h4>

        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className='grid gap-6 lg:grid-cols-2'
        >
          { services.map(service => (
              <motion.div
                variants={fadeInpUp} 
                
                className='p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            )) }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index


export const getServerSideProp = async (
  context:GetServerSidePropsContext
  ) => {
  //calculation

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log("server", services);
  
  return {
    props:{
      services: data.services
    }
  }
}

