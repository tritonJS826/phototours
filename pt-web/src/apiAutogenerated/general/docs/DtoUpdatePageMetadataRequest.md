
# DtoUpdatePageMetadataRequest


## Properties

Name | Type
------------ | -------------
`newUrl` | string
`tags` | string
`url` | string

## Example

```typescript
import type { DtoUpdatePageMetadataRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "newUrl": /new-tours,
  "tags": title:New Tours | description:Browse new tours,
  "url": /tours,
} satisfies DtoUpdatePageMetadataRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoUpdatePageMetadataRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


