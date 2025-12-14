
# DomainTourMaterial


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`id` | number
`title` | string
`tourId` | number
`type` | [DomainMaterialType](DomainMaterialType.md)
`url` | string

## Example

```typescript
import type { DomainTourMaterial } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "title": null,
  "tourId": null,
  "type": null,
  "url": null,
} satisfies DomainTourMaterial

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainTourMaterial
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


