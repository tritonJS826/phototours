
# DomainTourFull


## Properties

Name | Type
------------ | -------------
`activities` | [Array&lt;DomainActivity&gt;](DomainActivity.md)
`availableMonths` | Array&lt;string&gt;
`coverUrl` | string
`createdAt` | string
`ctaDescription` | string
`ctaTitle` | string
`dates` | [Array&lt;DomainTourDate&gt;](DomainTourDate.md)
`description` | string
`difficulty` | [DomainDifficultyLevel](DomainDifficultyLevel.md)
`durationDays` | number
`endLocation` | string
`faq` | object
`groupSize` | number
`id` | string
`included` | Array&lt;string&gt;
`languages` | Array&lt;string&gt;
`location` | string
`minAge` | number
`photos` | [Array&lt;DomainPhoto&gt;](DomainPhoto.md)
`popUp1Description` | string
`popUp1ImageUrl` | string
`popUp1Title` | string
`popUp2Description` | string
`popUp2ImageUrl` | string
`popUp2Title` | string
`price` | number
`program` | object
`reviewAmount` | number
`reviews` | [Array&lt;DomainReview&gt;](DomainReview.md)
`reviewsSectionName` | string
`slug` | string
`spotsLeft` | number
`starAmount` | number
`startLocation` | string
`subtitle` | string
`summary` | Array&lt;string&gt;
`title` | string
`updatedAt` | string

## Example

```typescript
import type { DomainTourFull } from ''

// TODO: Update the object below with actual values
const example = {
  "activities": null,
  "availableMonths": null,
  "coverUrl": null,
  "createdAt": null,
  "ctaDescription": null,
  "ctaTitle": null,
  "dates": null,
  "description": null,
  "difficulty": null,
  "durationDays": null,
  "endLocation": null,
  "faq": null,
  "groupSize": null,
  "id": null,
  "included": null,
  "languages": null,
  "location": null,
  "minAge": null,
  "photos": null,
  "popUp1Description": null,
  "popUp1ImageUrl": null,
  "popUp1Title": null,
  "popUp2Description": null,
  "popUp2ImageUrl": null,
  "popUp2Title": null,
  "price": null,
  "program": null,
  "reviewAmount": null,
  "reviews": null,
  "reviewsSectionName": null,
  "slug": null,
  "spotsLeft": null,
  "starAmount": null,
  "startLocation": null,
  "subtitle": null,
  "summary": null,
  "title": null,
  "updatedAt": null,
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


