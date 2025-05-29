import prof from "../assets/model.png";
import medal from "../assets/medal.png";
import certify from "../assets/certify.png";
import hours from "../assets/hours.png";
import score from "../assets/score.png";
import active from "../assets/active.png";
import Progresscircle from "./Progresscircle";
import "../css/Progress.css";
const Progress = () => {
  const skills = [
    { name: "React", level: "Advanced", percent: 80 },
    { name: "Python", level: "Intermediate", percent: 60 },
    { name: "Data Structure", level: "Intermediate", percent: 60 },
  ];
  return (
    <>
      <div className="userdetnprogress">
        <div className="userdetails">
          <div>
            <img className="profilepic" src={prof} alt="" />
          </div>
          <div className="textcont">
            <div className="username">Muskan Verma </div>
            <div className="email">muskanvermabsp@gmail.com</div> <br />
            <div className="college">SRM University</div> <br />
          </div>
        </div>
        <div className="progressbar">
          <div className="circle">
            <Progresscircle percent={80} />
          </div>
          <div>
            <img className="medal" src={medal} alt="" />
            <br />
            Python Master
          </div>
          <div>
            <img className="medal" src={medal} alt="" />
            <br />
            Fast Learner
          </div>
        </div>
      </div>
      <div className="parent_track">
        <div className="t1">
          <div className="track1">
            <div className="imgncont">
              <div>
                <img className="progcat" src={active} alt="" />
              </div>
              <div>
                <div className="progtitle">Active Courses</div>
                <div className="progcount">12</div>
              </div>
            </div>
            <div className="imgncont">
              <div>
                <img className="progcat" src={score} alt="" />
              </div>
              <div>
                <div className="progtitle">Average Score</div>
                <div className="progcount">85%</div>
              </div>
            </div>
          </div>
          <div className="track1">
            <div className="imgncont">
              <div>
                <img className="progcat" src={hours} alt="" />
              </div>
              <div>
                <div className="progtitle">Hours this week</div>
                <div className="progcount">24</div>
              </div>
            </div>
            <div className="imgncont">
              <div>
                <img className="progcat" src={certify} alt="" />
              </div>
              <div>
                <div className="progtitle">My Certificates</div>
                <div className="progcount">5</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line_graph">
          <div className="skills-container">
            <h2 className="skills-title">Skills Progress</h2>
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Progress;
