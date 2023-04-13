import {subDays,format} from "date-fns";

const date = new Date(1993,8,25);
const rta = subDays(date,3);
const str = format(rta,'yyyy/MM/dd');
console.log(str);

