import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="prose-page">
      <p className="eyebrow">Contact</p>
      <h1>We&rsquo;d love to hear from you.</h1>
      <p>
        For orders, styling questions, or wholesale enquiries, reach out via
        Instagram DM at{" "}
        <a href="https://www.instagram.com/the_home_shopee" target="_blank" rel="noreferrer">
          @the_home_shopee
        </a>
        .
      </p>
      <p>
        Our team typically responds within 24 hours. We&rsquo;re happy to help with
        product availability, bulk orders, and custom gifting.
      </p>
    </div>
  );
}
