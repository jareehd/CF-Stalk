import React from 'react'
import { Pie } from 'react-chartjs-2';

export default (props) => 
{

    // React.useEffect(() => {
       
        
    // },[]);
    
    const data = {
      maintainAspectRatio: false,
      labels: ["a", "b", "c", "d"],
      datasets: [
        {
          data: [300, 50, 100, 50],
          backgroundColor: ["#336699",
          "#99CCFF",
          "#999933",
          "#666699",
          "#CC9933"],
          hoverBackgroundColor: ["#336699",
          "#99CCFF",
          "#999933",
          "#666699",
          "#CC9933"]
        }
      ]
    };

    return (
        <div >
        <Pie
          data={data}
/>;
        </div>
    )
}