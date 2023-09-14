import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useMyContext } from '../Context/Context';

const Hero = () => {
  const { imagesHero } = useMyContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);

  const changeTheImageHandler = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? imagesHero.length - 1 : prevIndex - 1;
      } else if (direction === 'right') {
        return prevIndex === imagesHero.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    if (imagesHero.length > 0) {
      setCurrentImageUrl(imagesHero[currentImageIndex].imgUrl);
      setLoading(false);
    }
    
    const interval = setInterval(() => {
      changeTheImageHandler('right');
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, imagesHero]);

  return (
    <div className="relative mt-4 h-[75vh] md:h-[100vh] overflow-hidden">
      {loading ? (
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
      ) : (
        <img
          className="absolute h-full w-auto transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          src={currentImageUrl}
          alt="Hero"
        />
      )}
      <button
        onClick={() => changeTheImageHandler('left')}
        className="absolute top-1/2 left-5 font-extrabold text-3xl text-red-600 transform -translate-y-1/2 focus:outline-none"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={() => changeTheImageHandler('right')}
        className="absolute top-1/2 right-5 font-extrabold text-3xl text-red-600 transform -translate-y-1/2 focus:outline-none"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Hero;
