import React, { Component } from 'react';

class App extends Component {
    state = { 
    isLoading :false,
    invoices : []
    }

    render() { 
        const isLoading = this.state.isLoading;
        const invoices = this.state.invoices;
        const body=[
            {
                "id" : "100",
                    "Vendor" : "Nomad",
                    "Amount" : 18000,
                    "Date" : "10/14/1992"
                },
                {
                    "id" : "100",
                    "Vendor" : "Nomad",
                    "Amount" : 18000,
                    "Date" : "10/14/1992"
                },
                {
                    "id" : "100",
                    "Vendor" : "Nomad",
                    "Amount" : 18000,
                    "Date" : "10/14/1992"
                }
            ]
            if (isLoading)
            return(<div>Loading...</div>)

            return ( 
                <div className="container border border-secondary rounded center">
                    <div className="row">
                        <div className="col-12">
                            <h4>Pending Invoices - The Test Company</h4>
                        </div>
                    </div>


                </div>
            );
        }
    }
    
    export default App;