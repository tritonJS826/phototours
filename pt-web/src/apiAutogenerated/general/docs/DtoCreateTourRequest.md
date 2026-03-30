
# DtoCreateTourRequest


## Properties

Name | Type
------------ | -------------
`availableMonths` | Array&lt;string&gt;
`coverUrl` | string
`description` | string
`difficulty` | string
`durationDays` | string
`endLocation` | string
`isShowRooms` | boolean
`isShowVip` | boolean
`languages` | Array&lt;string&gt;
`minAge` | number
`program` | object
`reviewsSectionName` | string
`roomPrice` | number
`slug` | string
`startLocation` | string
`title` | string
`vipPrice` | number

## Example

```typescript
import type { DtoCreateTourRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "availableMonths": [June, July, August],
  "coverUrl": https://example.com/cover.jpg,
  "description": An exciting mountain tour,
  "difficulty": MEDIUM,
  "durationDays": 7,
  "endLocation": Astana,
  "isShowRooms": true,
  "isShowVip": true,
  "languages": [English, Russian],
  "minAge": 18,
  "program": null,
  "reviewsSectionName": Why travelers love this,
  "roomPrice": 200,
  "slug": mountain-adventure,
  "startLocation": Almaty,
  "title": Mountain Adventure,
  "vipPrice": 500,
} satisfies DtoCreateTourRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoCreateTourRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


