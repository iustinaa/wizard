import { createFileRoute, Link } from '@tanstack/react-router'
import courses from '../data/courses.json'

export const Route = createFileRoute('/')({component: HomeComponent,})

//loop through the courses array => create a list item for each course

function HomeComponent() {
  const coursesList = courses.map(course => {
    return <li className='transition duration-300 ease-in-out transform hover:bg-blue-200 hover:scale-105 hover:pl-1' key={course.id}>
      <Link
        to="/courses/$courseId"
        params={{ courseId: String(course.id)}}
          >
        {course.title}
      </Link>
    </li>
  }
  );

  return (
    <div className="p-2">
      <ul className='grid grid-cols-2 gap-4'>
        {coursesList}
      </ul>
      {/* {JSON.stringify(courses)} */}
    </div>
  )
}
