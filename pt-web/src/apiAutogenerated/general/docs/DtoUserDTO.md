# DtoUserDTO

## Properties

| Name            | Type   |
| --------------- | ------ |
| `bio`           | string |
| `createdAt`     | string |
| `email`         | string |
| `firstName`     | string |
| `id`            | number |
| `lastName`      | string |
| `phone`         | string |
| `profilePicUrl` | string |
| `role`          | string |

## Example

```typescript
import type { DtoUserDTO } from "";

// TODO: Update the object below with actual values
const example = {
  bio: null,
  createdAt: null,
  email: null,
  firstName: null,
  id: null,
  lastName: null,
  phone: null,
  profilePicUrl: null,
  role: null,
} satisfies DtoUserDTO;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DtoUserDTO;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
