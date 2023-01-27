import { Link } from 'react-router-dom'
import imgEggle from '../../assets/images/websites/eggle.jpg';
import imgAdvancePanel from '../../assets/images/websites/advanced-panel.jpg';
import imgCatalogueProject from '../../assets/images/websites/catalogue-project.jpg';
import imgCottageCareCompany from '../../assets/images/websites/cottage-care-company.jpg';
import imgDashboard from '../../assets/images/websites/dashboard.jpg';
import imgInfiniteDoggos from '../../assets/images/websites/infinite-doggos.jpg';
import imgLetterArtsEmporium from '../../assets/images/websites/letter-arts-emporium.jpg';
import imgPhpEmail from '../../assets/images/websites/php-email.jpg';
import imgPhpSimpleRegistration from '../../assets/images/websites/php-simple-registration.jpg';
import imgSmdGaetaContactPage from '../../assets/images/websites/smd-gaeta-contact-page-min.jpg';
import imgSmdGaeta from '../../assets/images/websites/smd-gaeta-min.jpg';
import imgSmdWebDesign from '../../assets/images/websites/smd-smd-web-design-min.jpg';
import imgSmdTwDeclaring from '../../assets/images/websites/smd-tw-declaring-min.jpg';
import imgSmdTwFeelingSafe from '../../assets/images/websites/smd-tw-feeling-safe-min.jpg';
import imgSmdTwRelationalPrivilage from '../../assets/images/websites/smd-tw-relational-privilage-min.jpg';

function Works() {
    return(
        <section className="works" id="works">
            <div className="works-heading">
                <div className="section-title visually-hidden">
                    <h1>Some of my works</h1>
                </div>
                <div className="description visually-hidden">
                    <ul>
                        <li>Sketch, plan, design, and build</li>
                        <li>Optimized for performance, accessiblility and SEO</li>
                    </ul>
                </div>
            </div> 
            <div className="web-cards-main-container">
                <div className="web-cards-container">
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/eggle/index.html" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Search Engine</h2>
                            </div>
                            <div className="body">
                                <img src={imgEggle} alt="eggle search engine" width="1351px" height="800px"/>
                            </div>
                            <div className="tools-used">
                                <p>HTML. CSS. JavaScript. API</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://therapywisdom.com/the-neurobiology-of-feeling-safe-2/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Feeling Safe Sales Page</h2>
                            </div>
                            <div className="body">
                                <img src={imgSmdTwFeelingSafe} alt="feeling safe sales page" width="1351px" height="800px"/>
                            </div>
                            <div className="tools-used">
                                <p>WordPress. CSS</p>
                            </div>
                        </a>
                    </div> 
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/dashboard/public/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Responsive Tailwind</h2>
                            </div>
                            <div className="body">
                                <img src={imgDashboard} alt="dashboard with tailwind" width="82px" height="67px"/>
                            </div>
                            <div className="tools-used">
                                <p>HTML. Tailwind. NPM</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/guess-the-dog/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>JavaScript Game</h2>
                            </div>
                            <div className="body">
                                <img src={imgInfiniteDoggos} alt="dog generator website" width="1079px" height="802px"/>
                            </div>
                            <div className="tools-used">
                                <p>HTML. CSS. JavaScript. API</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://thecottagecarecompany.com/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Freelance</h2>
                            </div>
                            <div className="body">
                                <img src={imgCottageCareCompany} alt="cottage care company" width="899px" height="537px"/>
                            </div>
                            <div className="tools-used">
                                <p>WordPress. Logo Design. Illustrator</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/capstone-project" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Capstone Project</h2>
                            </div>
                            <div className="body">
                                <img src={imgLetterArtsEmporium} alt="caligraphy website" width="283px" height="210px"/>
                            </div>
                            <div className="tools-used">
                                <p>Custom WordPress. HTML. SASS. PHP. JavaScript. Figma</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://advancedpanel.com/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Agency Experience</h2>
                            </div>
                            <div className="body">
                                <img src={imgAdvancePanel} alt="advanced panel products" width="500px" height="1304px"/>
                            </div>
                            <div className="tools-used">
                                <p>Custom WordPress. SCSS. HTML. PHP. </p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/php-simple-registration/index.php" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Simple Registration</h2>
                            </div>
                            <div className="body">
                                <img src={imgPhpSimpleRegistration} alt="php simple registration" width="684px" height="689.5px"/>
                            </div>
                            <div className="tools-used">
                                <p>PHP. CSS. HTML</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/php-email/" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>PHP Email</h2>
                            </div>
                            <div className="body">
                                <img src={imgPhpEmail} alt="php email" width="684px" height="730px"/>
                            </div>
                            <div className="tools-used">
                                <p>PHP. CSS. HTML</p>
                            </div>
                        </a>
                    </div>
                    <div className="web-card">
                        <a href="https://russelljohnjavier.com/works/catalog-project/index.php" target="_blank" rel="noopener">
                            <div className="title">
                                <h2>Catalogue</h2>
                            </div>
                            <div className="body">
                                <img src={imgCatalogueProject} alt="catalogue project" width="684px" height="730px"/>
                            </div>
                            <div className="tools-used">
                                <p>PHP. SCSS. HTML. MySQL</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Works