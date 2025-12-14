# PageMetadataApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**pageMetadataDelete**](PageMetadataApi.md#pagemetadatadelete) | **DELETE** /page-metadata | Delete page metadata (Admin only) |
| [**pageMetadataGet**](PageMetadataApi.md#pagemetadataget) | **GET** /page-metadata | Get page metadata |
| [**pageMetadataPatch**](PageMetadataApi.md#pagemetadatapatch) | **PATCH** /page-metadata | Update page metadata (Admin only) |
| [**pageMetadataPost**](PageMetadataApi.md#pagemetadatapost) | **POST** /page-metadata | Create page metadata (Admin only) |



## pageMetadataDelete

> pageMetadataDelete(url)

Delete page metadata (Admin only)

Delete metadata for a page URL (requires admin role)

### Example

```ts
import {
  Configuration,
  PageMetadataApi,
} from '';
import type { PageMetadataDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PageMetadataApi(config);

  const body = {
    // string | Page URL
    url: url_example,
  } satisfies PageMetadataDeleteRequest;

  try {
    const data = await api.pageMetadataDelete(body);
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
| **url** | `string` | Page URL | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pageMetadataGet

> DomainPageMetadata pageMetadataGet(url)

Get page metadata

Get metadata for a specific page URL

### Example

```ts
import {
  Configuration,
  PageMetadataApi,
} from '';
import type { PageMetadataGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PageMetadataApi();

  const body = {
    // string | Page URL
    url: url_example,
  } satisfies PageMetadataGetRequest;

  try {
    const data = await api.pageMetadataGet(body);
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
| **url** | `string` | Page URL | [Defaults to `undefined`] |

### Return type

[**DomainPageMetadata**](DomainPageMetadata.md)

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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pageMetadataPatch

> DomainPageMetadata pageMetadataPatch(request)

Update page metadata (Admin only)

Update metadata for a page URL (requires admin role)

### Example

```ts
import {
  Configuration,
  PageMetadataApi,
} from '';
import type { PageMetadataPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PageMetadataApi(config);

  const body = {
    // DtoUpdatePageMetadataRequest | Update data
    request: ...,
  } satisfies PageMetadataPatchRequest;

  try {
    const data = await api.pageMetadataPatch(body);
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
| **request** | [DtoUpdatePageMetadataRequest](DtoUpdatePageMetadataRequest.md) | Update data | |

### Return type

[**DomainPageMetadata**](DomainPageMetadata.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pageMetadataPost

> DomainPageMetadata pageMetadataPost(request)

Create page metadata (Admin only)

Create metadata for a page URL (requires admin role)

### Example

```ts
import {
  Configuration,
  PageMetadataApi,
} from '';
import type { PageMetadataPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PageMetadataApi(config);

  const body = {
    // DomainPageMetadata | Page metadata
    request: ...,
  } satisfies PageMetadataPostRequest;

  try {
    const data = await api.pageMetadataPost(body);
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
| **request** | [DomainPageMetadata](DomainPageMetadata.md) | Page metadata | |

### Return type

[**DomainPageMetadata**](DomainPageMetadata.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

