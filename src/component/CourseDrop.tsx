
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
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4"> ถอนรายวิชาที่ลงทะเบียน</h2>
      
      <div className="mb-6">
        {courseList.length === 0 ? (
          <p className="text-gray-400">ยังไม่มีรายวิชาที่ลงทะเบียน</p>
        ) : (
          <ul className="space-y-2">
            {courseList.map((c, i) => (
              <li key={i} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                <span>{c.subjectCode} - {c.subjectNameTh}</span>
                <DropButton index={i} onDrop={handleDrop} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 ">📉 รายวิชาที่ถอน</h2>
      {droppedCourses.length === 0 ? (
        <p className="text-gray-400">ยังไม่มีรายวิชาที่ถอน</p>
      ) : (
        <ul className="space-y-2">
          {droppedCourses.map((c, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
              <span>{c.subjectCode} - {c.subjectNameTh} ({c.credit} หน่วยกิต) | อ. {c.teacherName} | เกรด: {c.grade}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}