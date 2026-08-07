import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET() {
  const total = (await redis.get<number>("donation_total")) || 0;
  return NextResponse.json({ total });
}