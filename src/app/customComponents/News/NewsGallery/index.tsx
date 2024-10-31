import { NewsCard } from '../NewsCard'

import { Post } from '@/payload/payload-types'

type Props = {
  news: Post[]
}

export const NewsGallery = ({ news }: Props) => {
  return (
    <div className="global-margin-x place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 py-24">
      {news.map(post => (
        <NewsCard doc={post} />
      ))}
    </div>
  )
}
