import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({images}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleClosemodal = () => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( images.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
    }

    const nextSlide = () => {
        slideNumber + 1 === images.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }


    return(
        <div>
            {/* show model if openModal is true */}
            {openModal && 
                <div className='slideWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleClosemodal}/>
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>
                    <div className='fullScreenImage'>
                        <img src={images[slideNumber]} alt={`Drink N Rave image ${slideNumber + 1}`} />
                    </div>    
                </div>
            }
           

            <div className='galleryWrap'>
            {
                
                images && images.map((slide, index) => {
                    return(
                        <div 
                        className='single' 
                        key={index}
                        onClick={() => handleOpenModal(index)}>
                            <img src={slide} alt={`Drink N Rave image ${index + 1}`} loading='lazy' />
                        </div>
                    )
                })
            }
            {/* {images.map((url) => {
                return <img src={url} />
            })} */}
            </div>
        </div>
    )
}

export default Gallery;