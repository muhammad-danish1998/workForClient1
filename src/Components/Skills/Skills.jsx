import "./Skill.css"
import Button from 'react-bootstrap/Button'
const Skills = ()=>{
    return(
        <div className = "parent_div_Skills">
            <h2>Experience  and Skills</h2>
         <div className = "skill_desc">
            <div className = "card_title-1">
                <p>UI Development and Testing <br/>
                   2 Years
                </p>
             <Button style ={{backgroundColor:"#844eec",width: "160px",marginRight: "20px",border:"1px solid #844eec",borderRadius: 0}}>Details</Button>

            </div>
            <div className = "card_title-2">
                <p>Management Consulting <br/>
                   4 Years
                </p>
             <Button style ={{backgroundColor:"#844eec",width: "160px",marginRight: "20px",border:"1px solid #844eec",borderRadius: 0}}>Details</Button>

            </div><div className = "card_title-3">
                <p>Business Plan Writing
                </p>
             <Button style ={{backgroundColor:"#844eec",width: "160px",marginRight: "20px",border:"1px solid #844eec",borderRadius: 0}}>Details</Button>

            </div>
            </div>

        </div>
    )
}
export default Skills