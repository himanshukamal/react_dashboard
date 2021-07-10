import React, { Component } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

class Analytics extends Component {
    
    render() {
        return(
            <div className="analytics">
                <div className="chartjs_wrapper">
                    <div className="card_datetime">
                        <Line 
                        data={
                            {
                                labels: ['week-1', 'week-2', 'week-3', 'week4', 'week-5', 'week6'],
                                    datasets: [{
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        fill: false,
                                        label: 'total reading',
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1
                                        
                            },{
                                data: [50,45,67,80,30,76,12],
                                borderColor:'rgb(75,42,125)',
                                tension: 0.1,
                                label: 'new book'    
                            }
                        ]
                            }}
                        height={400}
                        width={600}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,

                                        },
                                    },
                                ],
                            },
                            legend:{
                                labels: {
                                    font:{
                                        size: 14,
                                        family: 'Rubik',
                                        
                                    } 
                                },
                            }
                    }}
                        /> 

                    </div>
                    <div className="card_doughnut">
                        <Doughnut 
                            data={{
                                labels: [
                                    'Red',
                                    'Blue',
                                    'Yellow'
                                  ],
                                  datasets: [{
                                    label: 'My First Dataset',
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                      'rgb(255, 99, 132)',
                                      'rgb(54, 162, 235)',
                                      'rgb(255, 205, 86)'
                                    ],
                                    hoverOffset: 4
                                  }]
                            }}
                        
                        
                        
                        />
                    </div>
                </div>   
            </div>
        )
    }
}
export default Analytics;