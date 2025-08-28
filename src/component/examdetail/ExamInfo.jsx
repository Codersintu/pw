import React from "react";
import Card from "./Card";

function ExamInfo() {
  return (
    <div className="w-[1300px] mt-[250px] flex justify-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold">Exam Categories</h1>
          <p className="text-[18px] text-gray-600">
            PW is preparing students for 35+ exam categories. Scroll down to
            find the one you are preparing for
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Card/>
           <Card/>
            <Card/>
             <Card/>
              <Card/>
               <Card/>
        </div>
      </div>
    </div>
  );
}

export default ExamInfo;
