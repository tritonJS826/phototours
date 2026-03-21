# WebhooksApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generalBookingsDepositSucceededPost**](WebhooksApi.md#generalbookingsdepositsucceededpost) | **POST** /general/bookings/deposit-succeeded | Handle Stripe deposit succeeded webhook |



## generalBookingsDepositSucceededPost

> { [key: string]: string; } generalBookingsDepositSucceededPost()

Handle Stripe deposit succeeded webhook

Webhook endpoint for Stripe deposit succeeded events

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '';
import type { GeneralBookingsDepositSucceededPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WebhooksApi();

  try {
    const data = await api.generalBookingsDepositSucceededPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

