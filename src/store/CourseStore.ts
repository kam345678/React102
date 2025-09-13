// TodoList Store
import { create } from "zustand";
// ข้อมูลรายวิชาที่ลงทะเบียนในภาคเรียนปัจจุบัน ได้แก่ รหัสวิชา, ชื่อวิชา(ไทย), ชื่อวิชา(อังกฤษ), หน่วยกิต, ชื่ออาจารย์ผู้สอน, เกรด (CourseStore)
interface TodoInterface {
    subjectCode: string;
    subjectNameTh: string;
    subjectNameEn: string;
    credit: number;
    teacherName: string;
    grade: string;
}


interface CourseInterface {
    message: string;
    courseList: TodoInterface[];
    // DropCourseList: TodoInterface[];
    addCourse: (course: TodoInterface) => void;
    DropCourse: (index: number) => void;
}


export const useCourseStore = create<CourseInterface>((set) => ({
    message: "Course List",
    courseList: [{
            subjectCode: " 10301211 ",
            subjectNameTh: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
            subjectNameEn: "Mathematics for Computer Science",
            credit: 3,
            teacherName: "อาจารย์สมชาย",
            grade: "A",
        },
        {
            subjectCode: "	10301222",
            subjectNameTh: "โครงสร้างข้อมูลและอัลกอริทึม",
            subjectNameEn: "Data Structure and Algorithm",
            credit: 3,
            teacherName: "อาจารย์กิตติ",
            grade: "B+",
        },
    ],
    addCourse: (course: TodoInterface) => set((state) => ({
        courseList: [...state.courseList, course],
    })),
        
    DropCourse: (index: number) => set((state) => ({
        courseList: state.courseList.filter((_, i) => i !== index),
    })),

}));

// Example usage of the store
// const { addCourse, removeCourse, clearCourses, courseList } = useCourseStore();
// addCourse({ subjectCode: "CS101", subjectNameTh: "วิชาเริ่มต้น", subjectNameEn: "Introduction to CS", credit: 3, teacherName: "อาจารย์สมชาย", grade: "A" });
// console.log(courseList); // [{ subjectCode: "CS101", ... }]
// removeCourse(0); // Removes the first course
// clearCourses(); // Clears all courses
// console.log(courseList); // [] (empty array after clearing)

// This store can be used in a React component to manage the course list, similar to how the TodoStore is used in the provided examples.

// Note: The above code is a basic implementation. You can expand it with more features like validation, error handling, etc., as needed for your application.
// You can also create components to add, display, and manage courses using this store, similar to the TodoStore example.   