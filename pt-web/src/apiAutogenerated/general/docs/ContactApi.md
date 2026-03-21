# ContactApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**contactMePost**](ContactApi.md#contactmepost) | **POST** /contact/me | Submit contact me request |



## contactMePost

> DtoContactMeResponse contactMePost(request)

Submit contact me request

Submit a contact me request with name and phone number

### Example

```ts
import {
  Configuration,
  ContactApi,
} from '';
import type { ContactMePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ContactApi();

  const body = {
    // DtoContactMeRequest | Contact me request data
    request: ...,
  } satisfies ContactMePostRequest;

  try {
    const data = await api.contactMePost(body);
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
| **request** | [DtoContactMeRequest](DtoContactMeRequest.md) | Contact me request data | |

### Return type

[**DtoContactMeResponse**](DtoContactMeResponse.md)

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

