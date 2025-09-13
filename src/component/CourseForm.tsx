import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [form, setForm] = useState({
    subjectCode: "",
    subjectNameTh: "",
    subjectNameEn: "",
    credit: 0,
    teacherName: "",
    grade: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "credit" ? Number(value) : value, // แปลง credit เป็น number
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.subjectCode || !form.subjectNameTh) {
      alert("กรุณากรอกรหัสวิชาและชื่อวิชา (ไทย)");
      return;
    }

    addCourse(form);
    setForm({
      subjectCode: "",
      subjectNameTh: "",
      subjectNameEn: "",
      credit: 0,
      teacherName: "",
      grade: "",
    });
  };

  return (
    
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>รหัสวิชา: </label>
        <input
          type="text"
          name="subjectCode"
          value={form.subjectCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>ชื่อวิชา (ไทย): </label>
        <input
          type="text"
          name="subjectNameTh"
          value={form.subjectNameTh}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>ชื่อวิชา (อังกฤษ): </label>
        <input
          type="text"
          name="subjectNameEn"
          value={form.subjectNameEn}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>หน่วยกิต: </label>
        <input
          type="number"
          name="credit"
          value={form.credit}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>ชื่ออาจารย์ผู้สอน: </label>
        <input
          type="text"
          name="teacherName"
          value={form.teacherName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>เกรด: </label>
        <input
          type="text"
          name="grade"
          value={form.grade}
          onChange={handleChange}
        />
      </div>
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
}