import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import { data } from "./components/helper/data";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <h1>Lesson Reminder</h1>
      <div className="map-div">
        {data.map(({ name, age, image }, i) => (
          <LessonCard key={i} name={name} age={age} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
