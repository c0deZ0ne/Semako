import { useNavigate } from 'react-router-dom';
import { goBack } from '../assets/icon';
import scheduler, { scheduleJob } from "node-schedule"
import toast from 'react-hot-toast';
import { schedule } from '../redux/interfaces/Ischeme';
export function handleGoBack() {
  const navigate = useNavigate();

  navigate(-1);
  return (
    <span className=" flex flex-flex-row" onClick={() => handleGoBack()}>
      {goBack()}
    </span>
  );
}





export function shedulePay(period: schedule, callback: () => any){
  const rule = new scheduler.RecurrenceRule();

  if (period === 'monthly') {
    rule.month = 0; // Run every month
  } else if (period === schedule.yearly) {
    rule.month = 12; // Run in January
  } else if (period === schedule.quarterly) {
    rule.month = [0, 3, 6, 9]; // Run quarterly (January, April, July, October)
  } else if (period === schedule.minute) {
    rule.minute = new Array(Math.floor(60 / 1)).fill(0).map((_, index) => index * 1);
  } else {
    throw new Error('Invalid period. Use "monthly", "yearly", "quarterly", or a number for minutes.');
  }
}




  export  const calcPayStackFee = async  (cost:number) => {
    // Convert cost to a number
    const costValue = Number(cost);
    if (costValue >= 2500 && costValue <= 120000) {
      // Calculate fee for cost between 2500 and 120000
      const charge =  (1.5 / 100)* costValue + 100;
      return { totalcost:(charge+costValue)*100,charge}

    } else if (costValue > 120000) {
      // Cap fee at 2000 for cost above 120000
      const charge = 2000
      return { totalcost:(charge+costValue)*100,charge}
    } else {
      // Calculate fee for cost less than 2500
      const charge = (1.5 / 100) * costValue;
      return { totalcost:(charge+costValue)*100,charge}
    }
  };


  
