import { useParams } from "react-router";

import {getInvoice} from "../Data/Data";

const Invoice = () => {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId,10));
    return (
        <div className="invoice-details">
            <div className="invoice-name">
                {invoice.name}
            </div>
            <table className="invoice-details-table">
                <tr>
                    <td className="bold">Total Amount</td>
                    <td>{invoice.amount}</td>
                </tr>
                <tr>
                    <td className="bold">Due Date</td>
                    <td>{invoice.due}</td>
                </tr>
                <tr>
                    <td className="bold">Control Number</td>
                    <td>{invoice.number}</td>
                </tr>
            </table>
        </div>
    );
};

export default Invoice;