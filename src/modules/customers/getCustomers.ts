import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export function getCustomers () {
  const { result, loading, error } = useQuery(gql`
        query getCustomers {
            customers(first: 10, page: 1) {
                data {
                    id
                    name
                    phone
                    email
                }
            }
        }
    `)
  return {
    result,
    loading,
    error
  }
}
