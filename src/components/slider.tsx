
import { EffectCoverflow } from 'swiper/modules'
import watch from '../assets/apple-watch-slider.jpg'
import iphone from '../assets/iphone-slider.jpg'
import sansumg from '../assets/sansumg-slider.jpg'
import sansumgO from '../assets/samsung2-slider.jpg'


import { Swiper, SwiperSlide } from "swiper/react"

const SliderMain = () => {
  return (
    <div className='mt-3 w-full  flex justify-center bg-secondary-bg'>
      <Swiper
        autoplay={true}
        speed={600}
        

        modules={[EffectCoverflow]}
        effect='coverflow'
        slidesPerView={1}

        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        
        className='max-w-[1440px]'
      >
        <SwiperSlide>
          <img src={iphone} alt="" className='obj ect-cover w-full mx-auto h-[270px] md:h-[400px] lg:h-[430px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={watch} alt="" className='obj ect-cover w-full mx-auto h-[270px] md:h-[400px] lg:h-[430px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sansumg} alt="" className='obj ect-cover w-full mx-auto h-[270px] md:h-[400px] lg:h-[430px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sansumgO} alt="" className='obj ect-cover w-full mx-auto h-[270px] md:h-[400px] lg:h-[430px]' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderMain