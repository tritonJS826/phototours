# AuthApi

All URIs are relative to *http://localhost:8000/general*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authChangePasswordPost**](AuthApi.md#authchangepasswordpost) | **POST** /auth/change-password | Change user password |
| [**authLoginPost**](AuthApi.md#authloginpost) | **POST** /auth/login | Login user |
| [**authProfileGet**](AuthApi.md#authprofileget) | **GET** /auth/profile | Get user profile |
| [**authProfilePut**](AuthApi.md#authprofileput) | **PUT** /auth/profile | Update user profile |
| [**authRegisterPost**](AuthApi.md#authregisterpost) | **POST** /auth/register | Register a new user |



## authChangePasswordPost

> DtoUserDTO authChangePasswordPost(request)

Change user password

Change the authenticated user\&#39;s password

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthChangePasswordPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // DtoChangePasswordDTO | Password change data
    request: ...,
  } satisfies AuthChangePasswordPostRequest;

  try {
    const data = await api.authChangePasswordPost(body);
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
| **request** | [DtoChangePasswordDTO](DtoChangePasswordDTO.md) | Password change data | |

### Return type

[**DtoUserDTO**](DtoUserDTO.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authLoginPost

> DtoAuthResponse authLoginPost(request)

Login user

Authenticate user and return JWT token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthLoginPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // DomainLogin | Login credentials
    request: ...,
  } satisfies AuthLoginPostRequest;

  try {
    const data = await api.authLoginPost(body);
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
| **request** | [DomainLogin](DomainLogin.md) | Login credentials | |

### Return type

[**DtoAuthResponse**](DtoAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authProfileGet

> DtoUserDTO authProfileGet()

Get user profile

Get the authenticated user\&#39;s profile

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthProfileGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.authProfileGet();
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

[**DtoUserDTO**](DtoUserDTO.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authProfilePut

> DtoUserDTO authProfilePut(firstName, lastName, phone, bio, avatar)

Update user profile

Update the authenticated user\&#39;s profile (multipart/form-data for avatar upload)

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthProfilePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  const body = {
    // string | First name (optional)
    firstName: firstName_example,
    // string | Last name (optional)
    lastName: lastName_example,
    // string | Phone number (optional)
    phone: phone_example,
    // string | Biography (optional)
    bio: bio_example,
    // Blob | Profile picture (max 5MB, jpeg/png/gif/webp) (optional)
    avatar: BINARY_DATA_HERE,
  } satisfies AuthProfilePutRequest;

  try {
    const data = await api.authProfilePut(body);
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
| **firstName** | `string` | First name | [Optional] [Defaults to `undefined`] |
| **lastName** | `string` | Last name | [Optional] [Defaults to `undefined`] |
| **phone** | `string` | Phone number | [Optional] [Defaults to `undefined`] |
| **bio** | `string` | Biography | [Optional] [Defaults to `undefined`] |
| **avatar** | `Blob` | Profile picture (max 5MB, jpeg/png/gif/webp) | [Optional] [Defaults to `undefined`] |

### Return type

[**DtoUserDTO**](DtoUserDTO.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authRegisterPost

> DtoAuthResponse authRegisterPost(request)

Register a new user

Create a new user account

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthRegisterPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // DomainRegister | Registration data
    request: ...,
  } satisfies AuthRegisterPostRequest;

  try {
    const data = await api.authRegisterPost(body);
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
| **request** | [DomainRegister](DomainRegister.md) | Registration data | |

### Return type

[**DtoAuthResponse**](DtoAuthResponse.md)

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

