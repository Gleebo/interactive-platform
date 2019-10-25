import React, { useState, useEffect } from "react";
import { setSubjects, getCategoriesAndSubjects } from "../firebase";

export default function PropertiesTest() {
  const [subjects, updateSubjects] = useState([]);

  useEffect(() => {
    setSubjects(["mathematics", "chemistry"]).then(() => {
      getCategoriesAndSubjects().then(data => updateSubjects(data.subjects));
    });
  }, []);
  return (
    <ul>
      {subjects.map(subject => (
        <li key={subject}>{subject}</li>
      ))}
    </ul>
  );
}
