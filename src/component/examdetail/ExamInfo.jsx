import React from "react";
import Card from "./Card";
import { exams } from "../../data";

function ExamInfo() {
  return (
    <div className="w-[100vw] max-w-[1300px] mt-[350px] lg:mt-[250px] flex justify-center">
      <div className="flex flex-col gap-10  items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="lg:text-4xl text-3xl font-semibold">Exam Categories</h1>
          <p className="lg:text-[18px] text-[15px] text-gray-600">
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
