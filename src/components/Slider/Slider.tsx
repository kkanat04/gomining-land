import './Slider.css';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import NFtCards from '@/assets/image/NFTCards.svg';
import NFtCards1 from '@/assets/image/NFTCards1.svg';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const Slider = () => {
  const { width } = useWindowDimensions();
  const pagination = {
    clickable: true,
    bulletActiveClass: 'pagination-active',
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className={'slider_container'}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        slidesPerView={width <= 880 ? 'auto' : 2}
        spaceBetween={30}
        className={'slide'}
      >
        <SwiperSlide className={'swiper-slide2'}>
          <div>
            <p>9834 NFT</p>
            <p>Greedy Machines</p>
            <p>
              The Greedy Machines are images of digital miners that differ from each other
              in power, energy efficiency, and appearance.
            </p>
            <img src={NFtCards} alt="" />
          </div>
          <div>
            <div className={'gradient'}></div>
            <div>
              <p>9 834 NFT</p>
              <p>Greedy Machines</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swiper-slide2'}>
          <div>
            <p>9834 NFT</p>
            <p>Greedy Machines</p>
            <p>
              The Greedy Machines are images of digital miners that differ from each other
              in power, energy efficiency, and appearance.
            </p>
            <img src={NFtCards1} alt="" />
          </div>
          <div style={{ backgroundImage: `url('/src/assets/image/NFTCards1.svg')` }}>
            <div className={'gradient'}></div>
            <div>
              <p>9 834 NFT</p>
              <p>Greedy Machines</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
