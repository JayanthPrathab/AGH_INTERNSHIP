import "../css/Announcement.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import Continuelearning from "./Continuelearning";
const Announcement=()=>{
    return(
        <>
            <div className="announce_main">
                <div>
                    <FontAwesomeIcon className="speaker" icon={faBullhorn} />
                </div>
                <div>
                    
                    <div className="ann_title">Important Announcement</div>
                    <div className="ann_cont">New advanced Python course will be available from next week. Early birds get 30% discount. Stay tuned for more updates!</div>
                </div>
            </div>
            <Continuelearning />
        </>
    );
}
export default Announcement;