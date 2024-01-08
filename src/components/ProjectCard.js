import { Col } from "react-bootstrap";
export const ProjectCard= ({title, Description, imgurl})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src= {imgurl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>
                        {Description}
                    </span>
                </div>
            </div>
        </Col>
    );

}