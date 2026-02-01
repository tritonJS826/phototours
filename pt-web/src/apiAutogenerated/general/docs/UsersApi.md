# UsersApi

All URIs are relative to _http://localhost:8000/general_

| Method                                               | HTTP request               | Description                |
| ---------------------------------------------------- | -------------------------- | -------------------------- |
| [**usersGet**](UsersApi.md#usersget)                 | **GET** /users             | Get all users (Admin only) |
| [**usersIdPublicGet**](UsersApi.md#usersidpublicget) | **GET** /users/{id}/public | Get public user profile    |

## usersGet

> Array&lt;DtoUserDTO&gt; usersGet(page, limit)

Get all users (Admin only)

Get a paginated list of all users (requires admin role)

### Example

```ts
import { Configuration, UsersApi } from "";
import type { UsersGetRequest } from "";

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (max 100) (optional)
    limit: 56,
  } satisfies UsersGetRequest;

  try {
    const data = await api.usersGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name      | Type     | Description              | Notes                         |
| --------- | -------- | ------------------------ | ----------------------------- |
| **page**  | `number` | Page number              | [Optional] [Defaults to `1`]  |
| **limit** | `number` | Items per page (max 100) | [Optional] [Defaults to `20`] |

### Return type

[**Array&lt;DtoUserDTO&gt;**](DtoUserDTO.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | OK                    | -                |
| **400**     | Bad Request           | -                |
| **401**     | Unauthorized          | -                |
| **403**     | Forbidden             | -                |
| **500**     | Internal Server Error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## usersIdPublicGet

> DtoPublicProfileDTO usersIdPublicGet(id)

Get public user profile

Get public profile information for a user by ID

### Example

```ts
import { Configuration, UsersApi } from "";
import type { UsersIdPublicGetRequest } from "";

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // number | User ID
    id: 56,
  } satisfies UsersIdPublicGetRequest;

  try {
    const data = await api.usersIdPublicGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name   | Type     | Description | Notes                     |
| ------ | -------- | ----------- | ------------------------- |
| **id** | `number` | User ID     | [Defaults to `undefined`] |

### Return type

[**DtoPublicProfileDTO**](DtoPublicProfileDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | OK                    | -                |
| **400**     | Bad Request           | -                |
| **404**     | Not Found             | -                |
| **500**     | Internal Server Error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
