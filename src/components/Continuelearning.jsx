import "../css/Continuelearning.css";
import cl1 from "../assets/cl1.png";
import cl2 from "../assets/cl2.png";
import cl3 from "../assets/cl3.png";
import cl4 from "../assets/cl4.png";
const Continuelearning = () => {
  const courses = [
    {
      id: 1,
      title: "Python Training and Classes from Intermediate",
      author: "John Smith",
      time: "10:48",
      image: cl1, // Replace with real images
    },
    {
      id: 2,
      title: "Python Training and Classes from Intermediate",
      author: "John Smith",
      time: "10:48",
      image: cl2,
    },
    {
      id: 3,
      title: "Python Training and Classes from Intermediate",
      author: "John Smith",
      time: "10:48",
      image: cl3,
    },
    {
      id: 4,
      title: "Python Training and Classes from Intermediate",
      author: "John Smith",
      time: "10:48",
      image: cl4,
    },
  ];
  return (
    <>
      <div className="continue-section">
        <div className="continue-header">
          <h3 className="cl_title">Continue Learning</h3>
          <a href="/" className="view-all">
            View All &gt;
          </a>
        </div>
        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt="course thumbnail" />
                <div className="progress_line"></div>
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span>By {course.author}</span>
                  <span>{course.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Continuelearning;
