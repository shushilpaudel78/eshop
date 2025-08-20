import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      amount = 100,
      tax_amount = 10,
      product_service_charge = 0,
      product_delivery_charge = 0,
    } = body;

    //  Must match Esewa’s formula
    const total_amount =
      amount + tax_amount + product_service_charge + product_delivery_charge;

    //  unique transaction ID
    const transaction_uuid = Date.now().toString();

    //  for test environment
    const product_code = "EPAYTEST";

    // secret key (add to .env.local)
    const secret = process.env.ESEWA_SECRET_KEY as string;

    //  signature string (must match signed_field_names order)
    const dataToSign = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

    const signature = crypto
      .createHmac("sha256", secret)
      .update(dataToSign)
      .digest("base64");

    return NextResponse.json({
      amount,
      tax_amount,
      product_service_charge,
      product_delivery_charge,
      total_amount,
      transaction_uuid,
      product_code,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      signature,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create Esewa payload" },
      { status: 500 }
    );
  }
}
