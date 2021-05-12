import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        id: "100",
        vendor: "Nomad",
        amount: 17000,
        invoice: 1234,
        date: "10/14/1992",
      },
      {
        id: "200",
        vendor: "Omad",
        amount: 18000,
        invoice: 5678,
        date: "10/15/1992",
      },
      {
        id: "300",
        vendor: "Mad",
        amount: 19000,
        invoice: 9101,
        date: "10/16/1992",
      },
    ],
  };
  remove(id) {
    console.log(id);
    let updatedInvoices = { ...this.state.invoices }.filter(i => i.id !== id);
    this.setState({ invoices: updatedInvoices });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    if (isLoading) return <div>Loading...</div>;

    let invoices = allInvoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.id}</td>
        <td>{invoice.vendor}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.invoice}</td>
        <td>{invoice.date}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            OK{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            NOK{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            50%{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            ??{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            Image{" "}
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <div className="container border border-secondary rounded center">
          <div className="row">
            <div className="col-9">
              <h4> Pending Invoices - The Test Company</h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 center text-center"></div>
        <Table dark responsive striped bordered hover>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Invoice #</th>
              <th colSpan="4">Actions</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.invoices.length === 0 ? (
              <td colSpan="9">All caught up!</td>
            ) : (
              invoices
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
