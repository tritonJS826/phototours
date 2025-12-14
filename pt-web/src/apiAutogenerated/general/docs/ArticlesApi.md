# ArticlesApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**articlesGet**](ArticlesApi.md#articlesget) | **GET** /articles | Get all articles |
| [**articlesSlugGet**](ArticlesApi.md#articlesslugget) | **GET** /articles/{slug} | Get article by slug |



## articlesGet

> Array&lt;DtoArticleSummaryDTO&gt; articlesGet(page, limit)

Get all articles

Get a paginated list of articles

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '';
import type { ArticlesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ArticlesApi();

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (max 100) (optional)
    limit: 56,
  } satisfies ArticlesGetRequest;

  try {
    const data = await api.articlesGet(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page (max 100) | [Optional] [Defaults to `20`] |

### Return type

[**Array&lt;DtoArticleSummaryDTO&gt;**](DtoArticleSummaryDTO.md)

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


## articlesSlugGet

> DtoArticleDetailDTO articlesSlugGet(slug)

Get article by slug

Get detailed article information by slug

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '';
import type { ArticlesSlugGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ArticlesApi();

  const body = {
    // string | Article slug
    slug: slug_example,
  } satisfies ArticlesSlugGetRequest;

  try {
    const data = await api.articlesSlugGet(body);
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
| **slug** | `string` | Article slug | [Defaults to `undefined`] |

### Return type

[**DtoArticleDetailDTO**](DtoArticleDetailDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

