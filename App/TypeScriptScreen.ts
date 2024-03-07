//npx ts-node TypeScriptScreen.ts -- for run

import { StudentInfo } from "../App/StudentInfo";

const hello = () => {
  return sum(6, 2);
};

let sum1 = (x: number, y: number): number => {
  let result = x + y;
  return result;
};

let sum = (x: number, y: number): number => x + y;

// (rollno,course,duration,start date,end date,garde)
type Student = {
  name: string;
  rollno: number;
  course: string;
  duration: number;
  startDate: string;
  endDate: string;
  grade: string;
};

const studentDetails: Student = {
  name: "Vishnu",
  rollno: 30,
  course: "Nodejs Training",
  duration: 3,
  startDate: "06-03-2024",
  endDate: "06-04-2024",
  grade: "",
};

let stdInfo = new StudentInfo(studentDetails);

//setGrade
stdInfo.setGrade = "G+";

// setDuration and setRollNumber
stdInfo.setDurations = 10;
stdInfo.setRollNumber = 33;

// console.log("====================================");
// console.log(stdInfo);
// console.log(stdInfo.getFullDetails());
// console.log("====================================");

console.log("====================================");
console.log("Student Keys >> ", Object.keys(stdInfo));
console.log("Student Values >> ", Object.values(stdInfo));


console.log("Student entries >> ",  Object.entries(stdInfo));


console.log("====================================");
