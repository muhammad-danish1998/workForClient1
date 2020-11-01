import Button from 'react-bootstrap/Button'
import "./Consultant.css"
const Consultant = ()=>{
return(
    <div className = "parent_div_consultant">
        <Button>Go Back</Button>
        <div className = "consult_desc">
            <div className = "circle">
            </div>
            <div className = "consult_detail">
                <h4>Consultant/Volunteer Name</h4>
                <span className = "icons">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-medium-m"></i>
                </span>
                <p>Description of the user and more <br/> details of the user / consultant /<br/> volunteer.</p>
                <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.</p>
            </div>
        </div>
    </div>
)


}

export default Consultant