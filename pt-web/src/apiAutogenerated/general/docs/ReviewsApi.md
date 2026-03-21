# ReviewsApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**reviewsMainGet**](ReviewsApi.md#reviewsmainget) | **GET** /reviews/main | Get 20 reviews for main page |



## reviewsMainGet

> Array&lt;DomainReview&gt; reviewsMainGet()

Get 20 reviews for main page

Get 20 reviews from the database for the main page

### Example

```ts
import {
  Configuration,
  ReviewsApi,
} from '';
import type { ReviewsMainGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReviewsApi();

  try {
    const data = await api.reviewsMainGet();
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

[**Array&lt;DomainReview&gt;**](DomainReview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

