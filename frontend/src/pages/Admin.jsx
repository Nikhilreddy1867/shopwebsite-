import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios.get(`${apiBase}/api/orders`);
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Failed to load orders", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [apiBase]);

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-maroon/10 p-6">
        <h2 className="font-display text-3xl text-maroon mb-4">Admin - Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-maroon text-cream">
                  <th className="px-3 py-2 text-left">Customer</th>
                  <th className="px-3 py-2 text-left">Phone</th>
                  <th className="px-3 py-2 text-left">Qty</th>
                  <th className="px-3 py-2 text-left">Service</th>
                  <th className="px-3 py-2 text-left">Pickup</th>
                  <th className="px-3 py-2 text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b border-maroon/10">
                    <td className="px-3 py-2">{order.name}</td>
                    <td className="px-3 py-2">{order.phone}</td>
                    <td className="px-3 py-2">{order.quantity}</td>
                    <td className="px-3 py-2">{order.serviceType}</td>
                    <td className="px-3 py-2">
                      {order.pickupDate
                        ? new Date(order.pickupDate).toISOString().split("T")[0]
                        : "N/A"}
                    </td>
                    <td className="px-3 py-2">
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleString()
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Admin;

