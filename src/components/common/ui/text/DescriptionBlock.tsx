import React from "react";
import Link from "next/link";

type DescriptionBlockProps = {
  children: React.ReactNode;
  showContactLink?: boolean;
  className?: string;
  contactLinkText?: string;
};

export default function DescriptionBlock({
  children,
  showContactLink = false,
  className = "",
  contactLinkText = "Contactez-moi !",
}: DescriptionBlockProps) {
  return (
    <div
      className={`text-lg text-gray-700 border-l-2 border-gray-300 pl-4 ${className}`}
    >
      {children}
      {showContactLink && (
        <Link
          href="/contact"
          className="text-gray-900 hover:text-gray-600 transition-colors"
        >
          {" "}
          {contactLinkText}
        </Link>
      )}
    </div>
  );
}
