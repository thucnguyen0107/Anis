"use server";
type QRResult = {
  success?: boolean;
  error?: string;
  qrUrl?: string;
};

export async function generateQR(amount: string, orderId: string): Promise<QRResult> {
  const BANK_CODE = "ACB";
  const ACCOUNT_NUMBER = "7979792386";

  if (!amount || !orderId) {
    return { error: "Missing amount or orderId" };
  }

  const qrUrl = `https://img.vietqr.io/image/${BANK_CODE}-${ACCOUNT_NUMBER}-compact2.png?amount=${amount}&addInfo=${orderId}`;

  return { success: true, qrUrl };
}
