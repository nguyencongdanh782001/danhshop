import { Carousel} from 'react-bootstrap'
import React from 'react'

const Banner = () => {
    return (
        <div className="header">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block"
                        src="https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/17.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Danh đẹp trai</h3>
                        <p>Danh đẹp trai quá trời.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block"
                        src="https://c4.wallpaperflare.com/wallpaper/952/956/853/space-1920x1200-background-wallpaper-preview.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Danh đẹp trai</h3>
                        <p>Danh đẹp trai quá trời.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block"
                        src="https://1.bp.blogspot.com/-F52YzwE5cjU/XwU-K88YG1I/AAAAAAAAFZ4/hCJc1eq-Z-MPw_Y-n_wiZzCYqR5ZYv5cgCK4BGAsYHg/w1220-h686/WALLPAPER-4K.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Danh đẹp trai</h3>
                        <p>Danh đẹp trai quá trời.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
