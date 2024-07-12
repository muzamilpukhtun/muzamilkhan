import { motion } from 'framer-motion';
import { SERVICE } from '../constants/index';

const Services = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Our Services
      </motion.h1>
      <div className="w-full p-[1px] rounded-[20px] flex flex-wrap justify-center gap-6">
      {SERVICE.map((service, index) => (
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          key={index} className="rounded-2xl border-4 border-neutral-800  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <h3 className="text-white text-[20px] font-bold text-center">{service.name}</h3>
          </motion.div>
          ))}
          </div>
    </div>
  );
};

export default Services;
