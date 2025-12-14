
# DtoArticleDetailDTO


## Properties

Name | Type
------------ | -------------
`alt` | string
`author` | string
`content` | string
`coverUrl` | string
`excerpt` | string
`featured` | boolean
`id` | number
`publishedAt` | string
`slug` | string
`title` | string

## Example

```typescript
import type { DtoArticleDetailDTO } from ''

// TODO: Update the object below with actual values
const example = {
  "alt": null,
  "author": null,
  "content": null,
  "coverUrl": null,
  "excerpt": null,
  "featured": null,
  "id": null,
  "publishedAt": null,
  "slug": null,
  "title": null,
} satisfies DtoArticleDetailDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoArticleDetailDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


