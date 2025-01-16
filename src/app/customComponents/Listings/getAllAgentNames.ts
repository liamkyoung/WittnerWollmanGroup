import { fetchDocs } from '@/app/_api/fetchDocs'
import type { Teammate } from '@/payload/payload-types'

export const getAllAgentNames = async (): Promise<string[]> => {
  try {
    const team = await fetchDocs<Teammate>('teammates')
    return team?.map(({ title }) => title)
  } catch (error: unknown) {
    return []
  }
}
