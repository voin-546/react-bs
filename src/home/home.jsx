import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ParticlesComponent from "../components/particles";
export default function Home () {
    return <>
        <section className="hero">
            <div className="text-center w-100 text-white position-absolute top-50 start-50">
                <h1 className="text-uppercase" data-aos="fade-up">Awesome, Customizable, free</h1>
                <p className="py-3 d-flex gap-2 align-items-center justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">PROGRESSUS: free business bootstrap by  
                    <Link to="/" className="text-white text-decoration-none fw-semibold">GetTemplate</Link>
                </p>
            </div>
            <div className="d-flex justify-content-center flex-wrap position-absolute start-50 gap-3 w-100 my-3">
                <Button href="/" variant="outline-secondary" className="px-5 border-3 fw-bold text-uppercase" data-aos="fade-up" data-aos-delay="500">
                More Info
                </Button>
                <Button href="/" download variant="warning" className="fw-bold text-white px-5 text-uppercase" data-aos="fade-up" data-aos-delay="700">Download Now</Button>
            </div>
            <ParticlesComponent id="particles-js"/>
        </section>
        <div className="text-center py-5 position-relative z-1">
            <h1 className="fw-normal" data-aos="fade-up">
                The best place to tell people why they are here
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">The difference between involevement and commitment is like an eggs-and-ham breakfast: <br/> the chicken was involved, the pig was commited</p>    
        </div>    
        <section className="cards bg-light py-5 position-relative z-2">
            <div className="text-center">
                <h6 className="fw-lighter">Reasons to use this template:</h6>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                        <svg width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" data-aos="fade-up">
                            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>    
                        <h6 className="fw-bold pt-4 pb-3" data-aos="fade-up" data-aos-delay="300">Bootstrap-powered</h6>
                        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio deserunt sit at qui excepturi sint dolore quasi voluptates explicabo nulla itaque ipsa fugiat, eveniet similique quam ad. Unde!</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16" data-aos="fade-up">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
                    </svg>
                        <h6 className="fw-bold pt-4 pb-3" data-aos="fade-up" data-aos-delay="300">Fat-Free</h6>
                        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio deserunt sit at qui excepturi sint dolore quasi voluptates explicabo nulla itaque ipsa fugiat, eveniet similique quam ad. Unde!</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" data-aos="fade-up">
                        <path d="m12 21-.421-.281c-2.006-1.34-4.543-2.853-6.422-5.078-1.98-2.344-2.93-4.75-2.907-7.36C2.28 5.37 4.616 3 7.457 3c2.255 0 3.755 1.313 4.544 2.26.788-.947 2.287-2.26 4.543-2.26 2.841 0 5.177 2.37 5.206 5.28.027 2.61-.923 5.016-2.906 7.36-1.879 2.226-4.416 3.74-6.422 5.079l-.421.281Z"/>
                    </svg>   
                        <h6 className="fw-bold pt-4 pb-3" data-aos="fade-up" data-aos-delay="300">Creative Commons</h6>
                        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio deserunt sit at qui excepturi sint dolore quasi voluptates explicabo nulla itaque ipsa fugiat, eveniet similique quam ad. Unde!</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <svg width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" data-aos="fade-up">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <path d="M9 9h.01"/>
                        <path d="M15 9h.01"/>
                    </svg>   
                        <h6 className="fw-bold pt-4 pb-3" data-aos="fade-up" data-aos-delay="300">Author's Support</h6>
                        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio deserunt sit at qui excepturi sint dolore quasi voluptates explicabo nulla itaque ipsa fugiat, eveniet similique quam ad. Unde!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="faqs py-4 position-relative z-2">
            <div className="text-center">
                <h3 className="fw-normal" data-aos="fade-up">Frequently Asked Questions</h3>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-normal" data-aos="fade-up">Which code editor you recommend?</h2>
                        <p data-aos="fade-up" data-aos-delay="300">I'd highly recommend you
                            <span className="d-inline-block mx-1">
                                <Link to="https://sublimetext.com/" className="text-decoration-none">Sublime text</Link>
                            </span> -
                            a free to try text editor whic I'm using daily. Awesome Tool!
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-normal" data-aos="fade-up">Nice header. Where do i Find more images like that one?</h2>
                        <p data-aos="fade-up" data-aos-delay="300">Well, there are thousands of stock art galleries, but personally, I prefer use photos from there sites:
                            <span className="d-inline-block mx-1">
                                <Link to="https://unplash.com/" className="text-decoration-none">Unplash.com</Link>
                            </span>
                            and
                            <span className="d-inline-block mx-1">
                                <Link to="https://flickr.com" className="text-decoration-none">Flickr - Creative Commons</Link>
                            </span>
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-normal" data-aos="fade-up">Can I Use It To build a site for my client?</h2>
                        <p data-aos="fade-up" data-aos-delay="300">Yes, you can. You may use this template for any purpose, just don't forget about the 
                            <span className="d-inline-block mx-1">license</span>,
                        whicj says: "You must give apportriate credit", i.e. you must provide the the name of the creator and a link to the original template in your work
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-normal" data-aos="fade-up">Can you customize this template for me?</h2>
                        <p data-aos="fade-up" data-aos-delay="300">Yes, I can. Please drop me a line to 
                            <span className="d-inline-block mx-1">
                                <Link className="text-decoration-none" to="https://sergey-at-pozhilov.com/">sergey-at-pozhilov.com</Link>
                            </span>
                            and describe your needs in details. Please note, my services are not cheap.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="position-relative z-2 learn-more bg-light container my-5 p-4 d-flex flex-wrap justify-content-end">
            <p data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto beatae, ipsam explicabo consequatur alias aut qui quidem eum possimus ipsum totam doloremque est ex laboriosam quibusdam dolores natus, magni rem, fugit voluptate amet dolorem! Delectus.</p>
            <Button href="/login/" data-aos-delay="300" data-aos="fade-up" className="text-white justify-self-end" variant="warning">
                <Link to="/learn-more/" className="text-white text-decoration-none">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </Link>
            </Button>
        </section>
    </>
}