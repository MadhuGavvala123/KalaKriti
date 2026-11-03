
import { useSelector } from "react-redux";

function AllUsers() {

    const orders = useSelector(
        (state) => state.order.orderslist
    );

    return (
        <div className="container-fluid p-3">

            <h2 className="mb-4">Customer Orders</h2>

            <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle text-center">

                    <thead className="table-dark">
                        <tr>
                            <th>Sl No</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Order ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders && orders.map((obj, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{obj.username}</td>
                                <td>{obj.userPhone}</td>
                                <td>{obj.userAddress}</td>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>₹{obj.price}</td>
                            </tr>
                        ))}

                        {orders.length === 0 && (
                            <tr>
                                <td colSpan="7">No orders found</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default AllUsers;
