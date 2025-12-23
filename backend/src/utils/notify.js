import twilio from "twilio";
import { buildPlainText } from "./mailer.js";

function getTwilioClient() {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return null;
  }
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

export async function sendSmsAlert(order) {
  const client = getTwilioClient();
  const to = process.env.ALERT_SMS_TO;
  const from = process.env.TWILIO_FROM_SMS;
  if (!client || !to || !from) {
    console.warn("SMS alert skipped (missing Twilio SMS env).");
    return;
  }
  await client.messages.create({
    body: buildPlainText(order),
    from,
    to,
  });
}

export async function sendWhatsAppAlert(order) {
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

