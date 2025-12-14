# ToursApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**toursGet**](ToursApi.md#toursget) | **GET** /tours | Get all tours |
| [**toursIdDelete**](ToursApi.md#toursiddelete) | **DELETE** /tours/{id} | Delete tour by ID (Guide/Admin only) |
| [**toursIdGet**](ToursApi.md#toursidget) | **GET** /tours/{id} | Get tour by ID |
| [**toursIdPatch**](ToursApi.md#toursidpatch) | **PATCH** /tours/{id} | Update tour by ID (Guide/Admin only) |
| [**toursPost**](ToursApi.md#tourspost) | **POST** /tours | Create a new tour (Guide/Admin only) |
| [**toursSlugSlugGet**](ToursApi.md#toursslugslugget) | **GET** /tours/slug/{slug} | Get tour by slug |



## toursGet

> Array&lt;DomainTour&gt; toursGet(page, limit, location, dateFrom, dateTo, groupSize, priceMin, priceMax, season)

Get all tours

Get a paginated list of tours with optional filters (location, date range, group size, price range, season)

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ToursApi();

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (max 100) (optional)
    limit: 56,
    // string | Filter by location (optional)
    location: location_example,
    // string | Filter by start date (YYYY-MM-DD) (optional)
    dateFrom: dateFrom_example,
    // string | Filter by end date (YYYY-MM-DD) (optional)
    dateTo: dateTo_example,
    // number | Filter by minimum group size (optional)
    groupSize: 56,
    // number | Filter by minimum price (optional)
    priceMin: 8.14,
    // number | Filter by maximum price (optional)
    priceMax: 8.14,
    // string | Filter by season (winter, spring, summer, autumn) (optional)
    season: season_example,
  } satisfies ToursGetRequest;

  try {
    const data = await api.toursGet(body);
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
| **location** | `string` | Filter by location | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `string` | Filter by start date (YYYY-MM-DD) | [Optional] [Defaults to `undefined`] |
| **dateTo** | `string` | Filter by end date (YYYY-MM-DD) | [Optional] [Defaults to `undefined`] |
| **groupSize** | `number` | Filter by minimum group size | [Optional] [Defaults to `undefined`] |
| **priceMin** | `number` | Filter by minimum price | [Optional] [Defaults to `undefined`] |
| **priceMax** | `number` | Filter by maximum price | [Optional] [Defaults to `undefined`] |
| **season** | `string` | Filter by season (winter, spring, summer, autumn) | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;DomainTour&gt;**](DomainTour.md)

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


## toursIdDelete

> toursIdDelete(id)

Delete tour by ID (Guide/Admin only)

Delete a tour by ID (requires guide or admin role)

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToursApi(config);

  const body = {
    // number | Tour ID
    id: 56,
  } satisfies ToursIdDeleteRequest;

  try {
    const data = await api.toursIdDelete(body);
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
| **id** | `number` | Tour ID | [Defaults to `undefined`] |

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


## toursIdGet

> DomainTourFull toursIdGet(id)

Get tour by ID

Get full tour information by ID including guide, dates, photos, videos, materials, tags, and categories

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ToursApi();

  const body = {
    // number | Tour ID
    id: 56,
  } satisfies ToursIdGetRequest;

  try {
    const data = await api.toursIdGet(body);
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
| **id** | `number` | Tour ID | [Defaults to `undefined`] |

### Return type

[**DomainTourFull**](DomainTourFull.md)

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


## toursIdPatch

> DomainTour toursIdPatch(id, request)

Update tour by ID (Guide/Admin only)

Update tour information by ID (requires guide or admin role)

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToursApi(config);

  const body = {
    // number | Tour ID
    id: 56,
    // DtoUpdateTourRequest | Update data
    request: ...,
  } satisfies ToursIdPatchRequest;

  try {
    const data = await api.toursIdPatch(body);
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
| **id** | `number` | Tour ID | [Defaults to `undefined`] |
| **request** | [DtoUpdateTourRequest](DtoUpdateTourRequest.md) | Update data | |

### Return type

[**DomainTour**](DomainTour.md)

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


## toursPost

> DomainTour toursPost(request)

Create a new tour (Guide/Admin only)

Create a new tour (requires guide or admin role)

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ToursApi(config);

  const body = {
    // DtoCreateTourRequest | Tour data
    request: ...,
  } satisfies ToursPostRequest;

  try {
    const data = await api.toursPost(body);
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
| **request** | [DtoCreateTourRequest](DtoCreateTourRequest.md) | Tour data | |

### Return type

[**DomainTour**](DomainTour.md)

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


## toursSlugSlugGet

> DomainTourFull toursSlugSlugGet(slug)

Get tour by slug

Get full tour information by slug including guide, dates, photos, videos, materials, tags, and categories

### Example

```ts
import {
  Configuration,
  ToursApi,
} from '';
import type { ToursSlugSlugGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ToursApi();

  const body = {
    // string | Tour slug
    slug: slug_example,
  } satisfies ToursSlugSlugGetRequest;

  try {
    const data = await api.toursSlugSlugGet(body);
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
| **slug** | `string` | Tour slug | [Defaults to `undefined`] |

### Return type

[**DomainTourFull**](DomainTourFull.md)

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

