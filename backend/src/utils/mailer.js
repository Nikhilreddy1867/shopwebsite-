import nodemailer from "nodemailer";

export function buildTransporter() {
  if (!process.env.SMTP_HOST) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendMail(order) {
  const transporter = buildTransporter();
  if (!transporter) {
    console.warn("Email transporter not configured; skipping email send.");
    return;
  }

  const message = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.NOTIFY_EMAIL || process.env.FROM_EMAIL || process.env.SMTP_USER,
    subject: `New Saree Service Request from ${order.name}`,
    text: buildPlainText(order),
  };

  await transporter.sendMail(message);
}

export function buildPlainText(order) {
  return [
    "New door pickup request received:",
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email || "N/A"}`,
    `Address: ${order.address}`,
    `Quantity: ${order.quantity}`,
    `Service Type: ${order.serviceType}`,
    `Pickup Date: ${order.pickupDate ? order.pickupDate.toISOString().split("T")[0] : "Not provided"}`,
    `Notes: ${order.notes || "None"}`,
  ].join("\n");
}

