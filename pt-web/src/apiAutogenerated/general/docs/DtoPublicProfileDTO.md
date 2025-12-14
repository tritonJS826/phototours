
# DtoPublicProfileDTO


## Properties

Name | Type
------------ | -------------
`bio` | string
`firstName` | string
`id` | number
`lastName` | string
`profilePicUrl` | string

## Example

```typescript
import type { DtoPublicProfileDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "bio": null,
  "firstName": null,
  "id": null,
  "lastName": null,
  "profilePicUrl": null,
} satisfies DtoPublicProfileDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoPublicProfileDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


