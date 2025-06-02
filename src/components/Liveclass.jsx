import live1 from "../assets/live1.png";
import live2 from "../assets/live2.png";
import "../css/Liveclass.css";
const Liveclass=()=>{
    return(
        <>
            <div className="main_live">
                <img className="liv_img1" src={live1} alt="" />
                <div>
                    <div className="live_title">Join Live Classes on Advance React Hooks</div>
                    <div className="live_cont">Engage with expert instructors in interactive sessions. Ask questions, solve doubts instantly, and boost your learning with live classes.</div>
                    <button className="live_button1">Join Class</button>
                    <button className="live_button2">View Schedule</button>
                </div>
                <img className="liv_img2" src={live2} alt="" />
            </div>
        </>
    );
}
export default Liveclass;