import crypto from "crypto";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

function verifySignature(rawBody: string, signature: string, secret: string) {
  if (!secret || !signature) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  // return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  const expectedBuf = Buffer.from(expected);
   const signatureBuf = Buffer.from(signature);
   if (expectedBuf.length !== signatureBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, signatureBuf);
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature-sha256") || "";

  if (!verifySignature(rawBody, signature, process.env.BMC_WEBHOOK_SECRET!)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  // First time through: log the full payload so you can confirm exact field names
  console.log(JSON.stringify(event, null, 2));

  if (event.type === "donation.created" && event.live_mode) {
    const amount = Number(event.data.amount);
    const isAnonymous = event.data.is_anonymous; // confirm this field name from your test payload
    const name = isAnonymous ? "Anonymous" : (event.data.supporter_name || "Anonymous");

    await redis.incrbyfloat("donation_total", amount);
    await redis.lpush("donation_log", JSON.stringify({
      amount,
      name,
      message: event.data.message || "",
      at: event.created,
    }));
    await redis.ltrim("donation_log", 0, 99);
  }

  if (event.type === "donation.refunded" && event.live_mode) {
    const amount = Number(event.data.amount);
    await redis.incrbyfloat("donation_total", -amount);
  }

  return NextResponse.json({ received: true });
}