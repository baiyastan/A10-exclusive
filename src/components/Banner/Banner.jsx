import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

import banner from "../../assets/image/banner.png"
import { getCategories } from '../../redux/category/categorySlice';
import "./Banner.scss"

function Banner() {
    const dispatch = useDispatch()
    const {categories, loading, erroe} = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='banner container'>
            <div className='sidebar'>
                <ul>
                    {
                        categories.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={banner} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={banner} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={banner} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
