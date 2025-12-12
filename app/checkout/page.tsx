// "use client";

import Image from "next/image";
import { Suspense } from "react";
import { generateQR } from "./actions";

export default async function CheckoutPage({
//   params,
  searchParams
}: {
//   params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
//   const [qr, setQr] = useState("");
//   const [loading, setLoading] = useState(false);
  const total = searchParams?.total as string || "0";
  const skeleton = 'w-full h-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const result = await generateQR(total, "ORDER123");
//   async function handleGenerateQR() {
//     setLoading(true);

//     const result = await generateQR(total, "ORDER123");

//     if (result.qrUrl) {
//       setQr(result.qrUrl);
//     }

//     setLoading(false);
//   }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">QR Code</h1>

      {/* <button
        onClick={handleGenerateQR}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Tạo mã QR thanh toán
      </button>

      {loading && <p className="mt-4">Processing...</p>} */}
    <Suspense fallback={<div className={skeleton} style={{ height: '350px', width: '350px' }} />}>
      {true && (
        <div className="mt-4">
          <p>Scan to checkout:</p>
          <Image src={result.qrUrl || ""} height={350} width={350} alt="vietqr" className="mt-2 border" />
        </div>
      )}
    </Suspense>
    </div>
  );
}
