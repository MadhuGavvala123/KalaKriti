import './Home.css'
import { useSelector } from 'react-redux';
function Home() {
    return (
        <div className="container-fluid admin-dashboard">

          
            <div className="mb-4">
                <h2 className="dashboard-title">Admin Dashboard</h2>
                <p className="dashboard-subtitle">
                    Welcome back! Here's what's happening at Kalakriti.
                </p>
            </div>

          
            <div className="row g-4 mb-4">

                <div className="col-xl-3 col-md-6">
                    <div className="stat-card users-stat">
                        <div>
                            <p>Trusted Users</p>
                            <h2>{localStorage.length-1}</h2>
                            <small>Registered customers</small>
                        </div>
                        <i className="bi bi-people-fill"></i>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="stat-card sales-stat">
                        <div>
                            <p>Products Sold</p>
                            <h2>{useSelector((state)=>state.order.orderslist.length)}</h2>
                            <small>Total successful sales</small>
                        </div>
                        <i className="bi bi-bag-check-fill"></i>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="stat-card products-stat">
                        <div>
                            <p>Total Products</p>
                            <h2>{useSelector((state)=>state.product.productlist.length)}</h2>
                            <small>Available in store</small>
                        </div>
                        <i className="bi bi-box-seam-fill"></i>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="stat-card orders-stat">
                        <div>
                            <p>Pending Orders</p>
                            <h2>{useSelector((state)=>state.cart.cartitems.length)}</h2>
                            <small>Awaiting processing</small>
                        </div>
                        <i className="bi bi-clock-history"></i>
                    </div>
                </div>

            </div>

         
            <div className="dashboard-hero">

                <div className="hero-content">
                    <span className="hero-tag">THE ART OF INDIAN CRAFTS</span>

                    <h1>
                        Every Craft <br />
                        Has a Story.
                    </h1>

                    <p>
                        Celebrate the creativity of Indian artisans.
                        Manage your marketplace and bring beautiful
                        handmade creations to the world.
                    </p>

                    <h5>Welcome to Kalakriti Administration</h5>
                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=1200"
                        alt="Handcrafted pottery and traditional art"
                    />
                </div>

            </div>

        </div>
    );
}

export default Home;
