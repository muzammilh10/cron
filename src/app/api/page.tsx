
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const redTextStyle = {
    color: 'red'
  };
    console.log('Cron job executed:', new Date());
    const date = new Date();
    return(
    <h1 style={redTextStyle}>`${date.toString()}` DCSDVDSVDSVDVD</h1>
    )
  
};


