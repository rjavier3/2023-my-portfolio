import imgMeTey from '../../assets/images/display-img/me-tey.jpg';
import imgEdmonton from '../../assets/images/display-img/edmonton.jpg';
import imgLakeHill from '../../assets/images/display-img/lake-hill.jpg';
import imgRio from '../../assets/images/display-img/rio.jpg';

function About() {
    return(
        <section className ="about" id="about">
            <div className ="contents">
                <div className ="about-pictures">
                    <div className ="img-container"><img src={imgMeTey} alt="russell john javier" width="400px" height="300px"/></div>
                    <div className ="img-container"><img src={imgEdmonton} alt="edmonton" width="400px" height="300px"/></div>
                    <div className ="img-container"><img src={imgLakeHill} alt="Lake hill" width="400px" height="300px"/></div>
                    <div className ="img-container"><img src={imgRio} alt="NAIT" width="400px" height="300px"/></div>
                </div>
                <div className ="about-descriptions">
                    <div className ="section-title">
                        <h1>About Me</h1>                    
                    </div>
                    <div className ="texts">
                        <p>Hello, my name is Russell John Javier a Website Designer and Developer living in Edmonton Alberta Canada. This is my portfolio website built with HTML, CSS(SASS), JavaScript, and some 3rd party tools I made this website to showcase some of my works. Made to be simple and speedy.</p>
                        <p>Expertise in HTML, CSS, JavaScript, WordPress, and programs like Adobe XD, Photoshop, and Illustrator with SEO best practices. I have experience developing websites with other tools like React and beginner level on C# and ASP.Net.</p>
                    </div>
                    <div className ="social-media">
                        <div className ="github">
                            <a href="https://github.com/rjavier3" aria-label="github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>                        
                            </a>
                        </div>
                        <div className ="linkedin">
                            <a href="https://www.linkedin.com/in/russelljohnjavier-webdeveloper/" aria-label="linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>                        
                            </a>
                        </div>
                        <div className ="twitter">
                            <a href="https://twitter.com/RJJdeveloper" aria-label="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>                        
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;