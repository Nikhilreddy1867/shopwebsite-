import express from "express";
import Order from "../models/Order.js";
import { sendOrderEmail } from "../utils/mailer.js";
import { sendSmsAlert, sendWhatsAppAlert } from "../utils/notify.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      address,
      quantity,
      serviceType,
      pickupDate,
      notes,
    } = req.body;

    if (!name || !phone || !address || !quantity || !serviceType) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    if (!["Dry Cleaning", "Polishing", "Both"].includes(serviceType)) {
      return res.status(400).json({ message: "Invalid service type." });
    }

    const order = await Order.create({
      name,
      phone,
      email,
      address,
      quantity,
      serviceType,
      pickupDate: pickupDate ? new Date(pickupDate) : undefined,
      notes,
    });

    await Promise.all([
      sendOrderEmail(order).catch((err) => console.error("Email send failed", err)),
      sendSmsAlert(order).catch((err) => console.error("SMS alert failed", err)),
      sendWhatsAppAlert(order).catch((err) =>
        console.error("WhatsApp alert failed", err)
      ),
    ]);

    const whatsappLink = buildWhatsAppLink(order);
    res.status(201).json({ message: "Order received", order, whatsappLink });
  } catch (error) {
    console.error("Order creation failed", error);
    res.status(500).json({ message: "Failed to create order" });
  }
});

router.get("/", async (_req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (error) {
    console.error("Fetching orders failed", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

function buildWhatsAppLink(order) {
  const base = "https://wa.me/";
  const targetNumber = process.env.WHATSAPP_NUMBER || "";
  const message = encodeURIComponent(
    [
      "New Saree Pickup Request:",
      `Name: ${order.name}`,
      `Phone: ${order.phone}`,
      `Address: ${order.address}`,
      `Quantity: ${order.quantity}`,
      `Service: ${order.serviceType}`,
      `Pickup Date: ${
        order.pickupDate
          ? new Date(order.pickupDate).toISOString().split("T")[0]
          : "Not provided"
      }`,
      `Notes: ${order.notes || "None"}`,
    ].join("\n")
  );

  return `${base}${targetNumber}?text=${message}`;
}

export default router;

