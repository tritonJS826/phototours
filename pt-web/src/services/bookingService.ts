import {buildApiUrl} from "src/utils/apiBase";

export interface BookingRequest {
  tourId: number;
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  travelers: number;
  rooms: number;
}

export async function createBooking(data: BookingRequest): Promise<void> {
  const url = buildApiUrl("general/bookings");

  const res = await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    let msg = "Booking failed";
    try {
      const ct = res.headers.get("content-type") ?? "";
      if (ct.includes("application/json")) {
        const j = await res.json();
        msg = j?.error ?? j?.message ?? msg;
      } else {
        const t = await res.text();
        if (t) msg = t;
      }
    } catch {
      void 0;
    }
    throw new Error(msg);
  }

  window.location.href = res.url;
}
