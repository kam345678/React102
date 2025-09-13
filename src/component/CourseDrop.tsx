
import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";
import DropButton from "./DropButton";
export default function CourseDrop() {
  const [droppedCourses, setDroppedCourses] = useState<any[]>([]);
  const { courseList, DropCourse } = useCourseStore();

  const handleDrop = (index: number) => {
    const course = courseList[index];
    setDroppedCourses((prev) => [...prev, course]);
    DropCourse(index);
  };

  return (
    <div>
      <h2>ถอนรายวิชาที่ลงทะเบียน</h2>
      <div>
        {courseList.length === 0 ? (
          <p>ยังไม่มีรายวิชาที่ลงทะเบียน</p>
        ) : (
          <ul>
            {courseList.map((c, i) => (
              <li key={i} >
                <span>{c.subjectCode} - {c.subjectNameTh}</span>
                <DropButton index={i} onDrop={handleDrop} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>รายวิชาที่ถอน</h2>
      {droppedCourses.length === 0 ? (
        <p>ยังไม่มีรายวิชาที่ถอน</p>
      ) : (
        <ul>
          {droppedCourses.map((c, i) => (
            <li key={i} >
              <span>{c.subjectCode} - {c.subjectNameTh} ({c.credit} หน่วยกิต) | อ. {c.teacherName} | เกรด: {c.grade}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}