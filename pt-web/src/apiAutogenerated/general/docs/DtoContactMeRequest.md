
# DtoContactMeRequest


## Properties

Name | Type
------------ | -------------
`city` | string
`country` | string
`language` | string
`lastContactPage` | string
`name` | string
`phone` | string
`timezone` | string

## Example

```typescript
import type { DtoContactMeRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "city": null,
  "country": null,
  "language": null,
  "lastContactPage": null,
  "name": John Doe,
  "phone": +1234567890,
  "timezone": null,
} satisfies DtoContactMeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoContactMeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


