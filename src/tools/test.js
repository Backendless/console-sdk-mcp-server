import { z } from 'zod'

const store = [
  { name: 'Vlad', age: 35, city: 'Kiev' },
]

export default [
  {
    name           : 'loadPersons',
    description    : 'Load persons from the DB',
    argumentsSchema: {
      limit: z.number().describe('How many persons it can return'),
    },
    execution      : async ({ limit }) => {
      const persons = limit
        ? store.slice(0, limit)
        : store

      return JSON.stringify(persons)
    },
  },
  {
    name           : 'searchPerson',
    description    : 'Search a person in the DB',
    argumentsSchema: {
      name: z.string().describe('The name of the person to find'),
    },
    execution      : async ({ name }) => {
      const person = store.find(p => p.name === name)

      if (person) {
        return JSON.stringify(person)
      }

      return `I do not have information about ${ name } in the DB`
    },
  },
  {
    name           : 'addPerson',
    description    : 'Add a person into the DB',
    argumentsSchema: {
      name: z.string().describe('The person name'),
      age : z.string().describe('The person age'),
      city: z.string().describe('The person city'),
    },
    execution      : async ({ name, age, city }) => {
      store.push({ name, age, city })

      return 'done'
    },
  },
  {
    name           : 'getPersonCount',
    description    : 'Load count of persons in the DB',
    argumentsSchema: {
      _noop: z.boolean().optional().describe('Unused — required to satisfy OpenAI\'s schema'),
    },
    execution      : async () => {
      return `in the DB there are ${ store.length } persons`
    },
  },
]

