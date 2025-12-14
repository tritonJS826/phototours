
# DtoArticleSummaryDTO


## Properties

Name | Type
------------ | -------------
`alt` | string
`author` | string
`coverUrl` | string
`excerpt` | string
`featured` | boolean
`id` | number
`publishedAt` | string
`slug` | string
`title` | string

## Example

```typescript
import type { DtoArticleSummaryDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "alt": null,
  "author": null,
  "coverUrl": null,
  "excerpt": null,
  "featured": null,
  "id": null,
  "publishedAt": null,
  "slug": null,
  "title": null,
} satisfies DtoArticleSummaryDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoArticleSummaryDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


