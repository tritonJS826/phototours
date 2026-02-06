import {fetchData} from "src/services/httpHelper";

export interface ContactMeRequest {
  name: string;
  phone: string;
}

export interface ContactMeResponse {
  message: string;
}

export async function submitContactMe(data: ContactMeRequest): Promise<ContactMeResponse> {
  return await fetchData<ContactMeResponse>("general/contact/me", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse {
  message: string;
}

export async function subscribe(data: SubscribeRequest): Promise<SubscribeResponse> {
  return await fetchData<SubscribeResponse>("general/subscribe", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
