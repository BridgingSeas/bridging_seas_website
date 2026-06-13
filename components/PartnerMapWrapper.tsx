"use client";

import dynamic from "next/dynamic";

const PartnerMap = dynamic(() => import("@/components/PartnerMap"), { ssr: false });

export default function PartnerMapWrapper() {
  return <PartnerMap />;
}