import { fetchData } from './httpHelper';

export interface ContactMeRequest {
  name: string;
  phone: string;
}

export interface ContactMeResponse {
  message: string;
}

export async function submitContactMe(data: ContactMeRequest): Promise<ContactMeResponse> {
  return await fetchData<ContactMeResponse>('general/contact/me', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}