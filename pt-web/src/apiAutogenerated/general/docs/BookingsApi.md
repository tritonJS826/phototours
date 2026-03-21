# BookingsApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bookingsPost**](BookingsApi.md#bookingspost) | **POST** /bookings | Create a new booking request |



## bookingsPost

> DtoCreateBookingResponse bookingsPost(request)

Create a new booking request

Create a new booking request and get redirect URL for payment

### Example

```ts
import {
  Configuration,
  BookingsApi,
} from '';
import type { BookingsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BookingsApi();

  const body = {
    // DomainBookingRequest | Booking request data
    request: ...,
  } satisfies BookingsPostRequest;

  try {
    const data = await api.bookingsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **request** | [DomainBookingRequest](DomainBookingRequest.md) | Booking request data | |

### Return type

[**DtoCreateBookingResponse**](DtoCreateBookingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

