
# DtoUpdateTourRequest


## Properties

Name | Type
------------ | -------------
`availableMonths` | Array&lt;string&gt;
`coverUrl` | string
`description` | string
`difficulty` | string
`durationDays` | number
`endLocation` | string
`guideId` | number
`languages` | Array&lt;string&gt;
`minAge` | number
`price` | number
`program` | object
`slug` | string
`startLocation` | string
`title` | string

## Example

```typescript
import type { DtoUpdateTourRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "availableMonths": [May, June, July, August, September],
  "coverUrl": https://example.com/new-cover.jpg,
  "description": An updated exciting mountain tour,
  "difficulty": HARD,
  "durationDays": 10,
  "endLocation": Osh,
  "guideId": 2,
  "languages": [English, Russian, Kazakh],
  "minAge": 21,
  "price": 2000.0,
  "program": null,
  "slug": mountain-adventure-updated,
  "startLocation": Bishkek,
  "title": Mountain Adventure Updated,
} satisfies DtoUpdateTourRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoUpdateTourRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


