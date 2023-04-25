import "./style.css";
import img1 from "./../../../src/img/projects/01-big.jpg";
import img2 from "./../../../src/img/projects/02-big.jpg";
import img3 from "./../../../src/img/projects/03-big.jpg";
import img4 from "./../../../src/img/projects/04-big.jpg";
import img5 from "./../../../src/img/projects/05-big.jpg";
import img6 from "./../../../src/img/projects/06-big.jpg";


const Section = () => {
    return ( 
        <main className="section">
                <div className="container">
                    <h2 id="projects" className="title-1">Projects</h2>
                    <div className="projects">
                        <div className="project">
                            <a href="./project-page.html">
                                <img src={img1} alt="Project image" className="project__img" />
                                <h3 className="project__title">Gaming streaming portal</h3>
                            </a>
                        </div>
                        <div className="project">
                            <a href="./project-page.html#">
                                <img src={img2} alt="Project image" className="project__img" />
                                <h3 className="project__title">Video service</h3>
                            </a>
                        </div>
                        <div className="project">
                            <a href="./project-page.html#"><img src={img3} alt="Project image"
                                className="project__img" />
                                <h3 className="project__title">Video portal</h3>
                            </a>
                        </div>
                        <div className="project">
                            <a href="./project-page.html#"><img src={img4} alt="Project image"
                                className="project__img" />
                                <h3 className="project__title">Dating App</h3>
                            </a>
                        </div>
                        <div className="project">
                            <a href="./project-page.html#"><img src={img5} alt="Project image"
                                className="project__img" />
                                <h3 className="project__title">Landing</h3>
                            </a>
                        </div>
                        <div className="project">
                            <a href="./project-page.html#"><img src={img6} alt="Project image"
                                className="project__img" />
                                <h3 className="project__title">Gaming community</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
     );
}
 
export default Section;