import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & returns",
};

export default function ShippingPage() {
  return (
    <div className="prose-page">
      <p className="eyebrow">Policies</p>
      <h1>Shipping & returns</h1>
      <p>
        We ship pan-India with careful packaging for décor and botanicals.
        Prepaid orders above ₹2,999 typically qualify for free shipping; COD may
        be available on eligible orders.
      </p>
      <p>
        Returns are accepted within 7 days for unused items in original
        condition. Please contact us via Instagram DM for return requests.
      </p>
    </div>
  );
}
