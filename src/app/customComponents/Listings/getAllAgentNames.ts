import { Teammate } from '@/payload/payload-types'
import { fetchDocs } from '@/app/_api/fetchDocs'

export const getAllAgentNames = async () => {
  try {
    const team = await fetchDocs<Teammate>('teammates')
    return team?.map(({ title }) => title)
  } catch (error) {
    return []
  }
}
