import OrderForm from "../components/OrderForm.jsx";

function Order() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl text-maroon mb-4">
          Request Door Pickup
        </h2>
        <p className="text-gray-700 mb-6">
          Fill in your details and our team will call to confirm pickup time. Required
          fields are marked with *.
        </p>
        <OrderForm />
      </div>
    </section>
  );
}

export default Order;

