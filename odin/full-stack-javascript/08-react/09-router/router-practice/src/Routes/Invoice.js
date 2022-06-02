import { useParams, useNavigate, useLocation } from "react-router";

import { getInvoice, deleteInvoice } from "../Data/Data";

const Invoice = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId,10));

    console.log(location.search)

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
            <button
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Invoice;