
import { useCourseStore } from "../store/CourseStore";

const gradePoints: { [key: string]: number } = {
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  D: 1,
  F: 0,
};

export default function CourseList() {
  const { courseList } = useCourseStore();

  const totalCredits = courseList.reduce((sum, c) => sum + c.credit, 0);
  const totalPoints = courseList.reduce(
    (sum, c) => sum + (gradePoints[c.grade] || 0) * c.credit,
    0
  );
  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      {courseList.length === 0 ? (
        <p>ยังไม่มีรายวิชาที่ลงทะเบียน</p>
      ) : (
        <ul>
          {courseList.map((c, i) => (
            <li key={i}>
              {c.subjectCode} - {c.subjectNameTh} ({c.credit} หน่วยกิต) | อ.{" "}
              {c.teacherName} | เกรด: {c.grade}
              {/* <button onClick={() => DropCourse(i)}>ถอน</button> */}
            </li>
          ))}
        </ul>
      )}
      <h3>GPA รวม: {gpa}</h3>
    </div>
  );
}