import React, { useState, useEffect } from "react";
import "../Technology/Technology.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Technology() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/courses") //fetch dat from api
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    // <div className="course-container">
    //   {courses.map((course) => (
    //     <div key={course.courseId} className="course-card">
    //       <img src={course.courseImg} alt={course.courseName} />
    //       <h3>{course.courseName}</h3>
    //       <p>{course.courseInfo}</p>
    //     </div>
    //   ))}
    // </div>

    <>
      {courses.map((course) => (
        <Card className="mt-6 w-96" key={course.courseId}>
          <CardHeader color="blue-gray" className="relative h-56">
          <img src={course.courseImg} alt={course.courseName} className="h-48 w-48 object-cover" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            {course.courseName}
            </Typography>
            <Typography>
            {course.courseInfo}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default Technology;
