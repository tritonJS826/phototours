
# DomainBookingRequest


## Properties

Name | Type
------------ | -------------
`city` | string
`country` | string
`email` | string
`id` | string
`language` | string
`lastContactPage` | string
`name` | string
`phone` | string
`rooms` | number
`subscriptionType` | string
`timezone` | string
`tourId` | string
`travelDate` | string
`travelers` | number
`zohoDealId` | string

## Example

```typescript
import type { DomainBookingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "city": null,
  "country": null,
  "email": null,
  "id": null,
  "language": null,
  "lastContactPage": null,
  "name": null,
  "phone": null,
  "rooms": null,
  "subscriptionType": null,
  "timezone": null,
  "tourId": null,
  "travelDate": null,
  "travelers": null,
  "zohoDealId": null,
} satisfies DomainBookingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainBookingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


