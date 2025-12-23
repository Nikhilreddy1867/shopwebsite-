import { useState } from "react";
import axios from "axios";

const defaultState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  quantity: 1,
  serviceType: "Dry Cleaning",
  pickupDate: "",
  notes: "",
};

function OrderForm() {
  const [form, setForm] = useState(defaultState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.quantity) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const { data } = await axios.post(`${apiBase}/api/orders`, form);
      setStatus({
        type: "success",
        message: data.message || "Request received. We will contact you shortly.",
      });
      setForm(defaultState);
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        "Unable to submit right now. Please try again.";
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 border border-maroon/10 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Input
        label="Customer Name*"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Mobile Number*"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
      />
      <Input
        label="Address*"
        name="address"
        value={form.address}
        onChange={handleChange}
        required
      />
      <Input
        label="Quantity (sarees)*"
        name="quantity"
        type="number"
        min={1}
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <Select
        label="Service Type*"
        name="serviceType"
        value={form.serviceType}
        onChange={handleChange}
        options={["Dry Cleaning", "Polishing", "Both"]}
      />
      <Input
        label="Preferred Pickup Date"
        name="pickupDate"
        type="date"
        value={form.pickupDate}
        onChange={handleChange}
      />
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-maroon mb-2">
          Additional Notes
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="w-full border border-maroon/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Any special requests or saree care instructions"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <button type="submit" className="btn-primary w-full md:w-auto" disabled={loading}>
          {loading ? "Submitting..." : "Request Door Pickup"}
        </button>
        {status.message && (
          <p
            className={`text-sm ${
              status.type === "error" ? "text-red-600" : "text-green-700"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-maroon mb-2">{label}</label>
      <input
        {...props}
        className="w-full border border-maroon/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-maroon mb-2">{label}</label>
      <select
        {...props}
        className="w-full border border-maroon/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OrderForm;

