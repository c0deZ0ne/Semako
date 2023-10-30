import { useNavigate } from 'react-router-dom';
import { goBack } from '../assets/icon';

export function handleGoBack() {
  const navigate = useNavigate();

  navigate(-1);
  return (
    <span className=" flex flex-flex-row" onClick={() => handleGoBack()}>
      {goBack()}
    </span>
  );
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
  
