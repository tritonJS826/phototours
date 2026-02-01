# DomainTourDate

## Properties

| Name          | Type    |
| ------------- | ------- |
| `createdAt`   | string  |
| `date`        | string  |
| `groupSize`   | number  |
| `id`          | number  |
| `isAvailable` | boolean |
| `tourId`      | number  |
| `updatedAt`   | string  |

## Example

```typescript
import type { DomainTourDate } from "";

// TODO: Update the object below with actual values
const example = {
  createdAt: null,
  date: null,
  groupSize: null,
  id: null,
  isAvailable: null,
  tourId: null,
  updatedAt: null,
} satisfies DomainTourDate;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainTourDate;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
