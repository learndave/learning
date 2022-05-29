import { NavLink, Outlet } from "react-router-dom";
import {getInvoices} from "../Data/Data";

const Invoices = () => {
    let invoices = getInvoices();
    
    return (
        <div className="category">
            <h2>Invoices</h2>
            {invoices.map((invoice) => (
                <NavLink
                    style={({isActive}) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            fontWeight: isActive ? "800" : "",
                        }
                    }}
                    className="invoice-item"
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </NavLink>
            ))}
            <Outlet />
        </div>
    )
};

export default Invoices;