# BreweryDB graphQL

GraphQL wrapper around the [BreweryDB API](http://www.brewerydb.com/developers/docs).

## How to use it

Set an environmental variable of `API_KEY` to your Brewerydb API key, acquired [here](http://www.brewerydb.com/developers/apps), and run `yarn start:dev` for the development version with the graphiql interface.

## Example query

```graphql
{
  search(q: "punk ipa", type: beer) {
    currentPage
    data {
      ... on Beer {
        id
        name
        abv
        glass {
          name
        }
        breweries {
          name
        }
        style {
          category {
            name
          }
        }
      }
    }
  }
}
```
