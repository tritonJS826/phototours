
# DomainTour


## Properties

Name | Type
------------ | -------------
`availableMonths` | Array&lt;string&gt;
`coverUrl` | string
`createdAt` | string
`description` | string
`difficulty` | [DomainDifficultyLevel](DomainDifficultyLevel.md)
`durationDays` | number
`endLocation` | string
`guideId` | number
`id` | number
`languages` | Array&lt;string&gt;
`minAge` | number
`price` | number
`program` | object
`slug` | string
`startLocation` | string
`title` | string
`updatedAt` | string

## Example

```typescript
import type { DomainTour } from ''

// TODO: Update the object below with actual values
const example = {
  "availableMonths": null,
  "coverUrl": null,
  "createdAt": null,
  "description": null,
  "difficulty": null,
  "durationDays": null,
  "endLocation": null,
  "guideId": null,
  "id": null,
  "languages": null,
  "minAge": null,
  "price": null,
  "program": null,
  "slug": null,
  "startLocation": null,
  "title": null,
  "updatedAt": null,
} satisfies DomainTour

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainTour
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


