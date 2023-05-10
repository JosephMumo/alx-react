import { Seq } from "./node_modules/immutable/dist/immutable";

export default function printBestStudents(obj) {
    const top = Seq(obj)
    const topStudents = top.filter((val) => val.score > 70).toJS();

  Object.keys(topStudents).map((key) => {
    const fn = topStudents[key].firstName;
    const ln = topStudents[key].lastName;

    topStudents[key].firstName = fn.charAt(0).toUpperCase() + fn.slice(1);
    topStudents[key].lastName = ln.charAt(0).toUpperCase() + ln.slice(1);
    return null;
  })
  console.log(topStudents)
}