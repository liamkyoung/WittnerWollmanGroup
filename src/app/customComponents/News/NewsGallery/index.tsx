import { NewsCard } from '../NewsCard'

import { Post } from '@/payload/payload-types'

type Props = {
  news: Post[]
  displayHeader: 'yes' | 'no'
}

export const NewsGallery = ({ news, displayHeader = 'yes' }: Props) => {
  return (
    <div className="global-margin-x global-margin-y">
      <div className="flex justify-center md:justify-between items-center">
        {displayHeader === 'yes' && <h2 className="text-center md:text-left">News</h2>}
      </div>
      <div className="place-items-center sm:place-items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 sm:gap-12 py-24">
        {news.map((post, i) => (
          <NewsCard doc={post} key={i} />
        ))}
      </div>
    </div>
  )
}
