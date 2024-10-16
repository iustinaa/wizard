import { createFileRoute } from "@tanstack/react-router";
import courses from "../../data/courses.json";
import React from "react";
import RenderLessons from "../../components/lesson";

export const Route = createFileRoute("/courses/$courseId")({
  component: CourseComponent,
});

function CourseComponent() {
  const { courseId } = Route.useParams();

  const course = courses.find((course) => String(course.id) === courseId);

  if (!course) { //Displays a message if the course is not found.
    return (
      <>
        <p>Not existing course.</p>
      </>
    );
  }

  const modules = course.modules.map((module) => {//loops through each module in course/modules
    return (
      <React.Fragment key={module.title + "module"}>
        <div className="mt-6 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 border border-black shadow-lg p-4">
          <h3 className="text-lg mb-4">{module.title}</h3>
          <div className="">
            {module.lessons.map((lesson) => {//Loops through each lesson in module.lessons.
              return <RenderLessons lesson={lesson} key={lesson.title}></RenderLessons>//For each lesson, render the RenderLessons component
            })}
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (//displays the course title, description and modules
    <div className="p-2">
      <h1 className="text-xl pb-2 font-bold">{course.title}</h1>
      <p>{course.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules}
        </div>
    </div>
  );
}
