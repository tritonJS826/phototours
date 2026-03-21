# SubscribeApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**subscribePost**](SubscribeApi.md#subscribepost) | **POST** /subscribe | Subscribe to newsletter |



## subscribePost

> DtoSubscribeResponse subscribePost(request)

Subscribe to newsletter

Subscribe to newsletter with email address

### Example

```ts
import {
  Configuration,
  SubscribeApi,
} from '';
import type { SubscribePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SubscribeApi();

  const body = {
    // DtoSubscribeRequest | Subscribe request data
    request: ...,
  } satisfies SubscribePostRequest;

  try {
    const data = await api.subscribePost(body);
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
| **request** | [DtoSubscribeRequest](DtoSubscribeRequest.md) | Subscribe request data | |

### Return type

[**DtoSubscribeResponse**](DtoSubscribeResponse.md)

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

