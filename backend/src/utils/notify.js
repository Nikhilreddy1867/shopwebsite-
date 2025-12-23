import twilio from "twilio";
import { buildPlainText } from "./mailer.js";

function getTwilioClient() {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return null;
  }
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

export async function sendWhatsApp(order) {
  const client = getTwilioClient();
  const to = process.env.ALERT_WHATSAPP_TO;
  const from = process.env.TWILIO_FROM_WHATSAPP;
  if (!client || !to || !from) {
    console.warn("WhatsApp alert skipped (missing Twilio WhatsApp env).");
    return;
  }
  await client.messages.create({
    body: buildPlainText(order),
    from: `whatsapp:${from.replace(/^whatsapp:/, "")}`,
    to: `whatsapp:${to.replace(/^whatsapp:/, "")}`,
  });
}

