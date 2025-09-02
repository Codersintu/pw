import React from "react";
import Card from "./Card";
import { exams } from "../../data";

function ExamInfo() {
  return (
    <div className="w-[1300px] mt-[250px] flex justify-center">
      <div className="flex flex-col gap-10  items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold">Exam Categories</h1>
          <p className="text-[18px] text-gray-600">
            PW is preparing students for 35+ exam categories. Scroll down to
            find the one you are preparing for
          </p>
        </div>
          <Card/>
      </div>
    </div>
  );
}

export default ExamInfo;
