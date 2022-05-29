import { Link, Outlet } from "react-router-dom";
import {getInvoices} from "../Data/Data";

const Invoices = () => {
    let invoices = getInvoices();
    
    return (
        <div className="category">
            <h2>Invoices</h2>
            {invoices.map((invoice) => (
                <Link 
                    className="invoice-item"
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </Link>
            ))}
            <Outlet />
        </div>
    )
};

export default Invoices;