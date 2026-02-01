# DomainGuide

## Properties

| Name              | Type                        |
| ----------------- | --------------------------- |
| `createdAt`       | string                      |
| `experience`      | string                      |
| `id`              | number                      |
| `specializations` | Array&lt;string&gt;         |
| `updatedAt`       | string                      |
| `user`            | [DomainUser](DomainUser.md) |
| `userId`          | number                      |

## Example

```typescript
import type { DomainGuide } from "";

// TODO: Update the object below with actual values
const example = {
  createdAt: null,
  experience: null,
  id: null,
  specializations: null,
  updatedAt: null,
  user: null,
  userId: null,
} satisfies DomainGuide;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainGuide;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
