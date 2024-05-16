import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name:"job",
      title: "JobTitle",
      type: "string"
    },
    {
      name:"companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name:"company",
      title: "Comapny",
      type: "string"
    },
    {
      name:"dateStarted",
      title: "DateStarted",
      type: "string"
    },
    {
      name:"dateEnded",
      title: "DateEnded",
      type: "string"
    },
    {
      name:"isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean"
    },
    {
      name:"technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference" ,to: {type: "social"}}]
    },
    {
      name:"points",
      title: "Points",
      type: "array",
      of: [{type: "string"}]
      
    },
  ]
})
