
# DtoSubscribeRequest


## Properties

Name | Type
------------ | -------------
`city` | string
`country` | string
`email` | string
`language` | string
`lastContactPage` | string
`timezone` | string

## Example

```typescript
import type { DtoSubscribeRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "city": null,
  "country": null,
  "email": user@example.com,
  "language": null,
  "lastContactPage": null,
  "timezone": null,
} satisfies DtoSubscribeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoSubscribeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


