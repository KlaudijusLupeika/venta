"use client";

import { flatLocation } from "@/lib/content";
import Location from "./Location";

export default function FlatLocation() {
  return <Location id="flat-location" content={flatLocation} />;
}
