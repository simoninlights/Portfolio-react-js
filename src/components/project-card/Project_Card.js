import "./style.css";
import img1 from "./../../../src/img/projects/01-big.jpg";

const Project_Card = () => {
    return (
        <div className="project">
            <a href="">
                <img
                    src={img1}
                    alt="Project image"
                    className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
            </a> 
        </div>
    );
}

export default Project_Card;