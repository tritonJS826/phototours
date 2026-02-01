# DtoCreateTourRequest

## Properties

| Name              | Type                |
| ----------------- | ------------------- |
| `availableMonths` | Array&lt;string&gt; |
| `coverUrl`        | string              |
| `description`     | string              |
| `difficulty`      | string              |
| `durationDays`    | number              |
| `endLocation`     | string              |
| `guideId`         | number              |
| `languages`       | Array&lt;string&gt; |
| `minAge`          | number              |
| `price`           | number              |
| `program`         | object              |
| `slug`            | string              |
| `startLocation`   | string              |
| `title`           | string              |

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
  "guideId": 1,
  "languages": [English, Russian],
  "minAge": 18,
  "price": 1500.0,
  "program": null,
  "slug": mountain-adventure,
  "startLocation": Almaty,
  "title": Mountain Adventure,
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
