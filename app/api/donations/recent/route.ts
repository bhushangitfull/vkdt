import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET() {
  const raw = await redis.lrange("donation_log", 0, 19);
  const donations = raw.map((item) => JSON.parse(item as string));
  return NextResponse.json({ donations });
}