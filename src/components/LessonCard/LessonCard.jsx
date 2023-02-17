import LessonStyle from "./lesson.module.css";

const LessonCard = ({ name, age, image }) => {
  console.log(name);
  return (
    <div>
      <div className={LessonStyle["container"]}>
        <img className={LessonStyle["img"]} src={image} alt="image" />
        <p>Lesson Name : {name} </p>
        <p>Lesson Hour : {age}</p>
      </div>
    </div>
  );
};

export default LessonCard;
