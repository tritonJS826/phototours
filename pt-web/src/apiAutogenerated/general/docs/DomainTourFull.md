
# DomainTourFull


## Properties

Name | Type
------------ | -------------
`availableMonths` | Array&lt;string&gt;
`categories` | [Array&lt;DomainCategory&gt;](DomainCategory.md)
`coverUrl` | string
`createdAt` | string
`dates` | [Array&lt;DomainTourDate&gt;](DomainTourDate.md)
`description` | string
`difficulty` | [DomainDifficultyLevel](DomainDifficultyLevel.md)
`durationDays` | number
`endLocation` | string
`guide` | [DomainGuide](DomainGuide.md)
`guideId` | number
`id` | number
`languages` | Array&lt;string&gt;
`materials` | [Array&lt;DomainTourMaterial&gt;](DomainTourMaterial.md)
`minAge` | number
`photos` | [Array&lt;DomainPhoto&gt;](DomainPhoto.md)
`price` | number
`program` | object
`slug` | string
`startLocation` | string
`tags` | [Array&lt;DomainTag&gt;](DomainTag.md)
`title` | string
`updatedAt` | string
`videos` | [Array&lt;DomainVideo&gt;](DomainVideo.md)

## Example

```typescript
import type { DomainTourFull } from ''

// TODO: Update the object below with actual values
const example = {
  "availableMonths": null,
  "categories": null,
  "coverUrl": null,
  "createdAt": null,
  "dates": null,
  "description": null,
  "difficulty": null,
  "durationDays": null,
  "endLocation": null,
  "guide": null,
  "guideId": null,
  "id": null,
  "languages": null,
  "materials": null,
  "minAge": null,
  "photos": null,
  "price": null,
  "program": null,
  "slug": null,
  "startLocation": null,
  "tags": null,
  "title": null,
  "updatedAt": null,
  "videos": null,
} satisfies DomainTourFull

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainTourFull
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


