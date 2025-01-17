import { InvolvementEventCard } from '../InvolvementEventCard'

import { InvolvementEvent } from '@/payload/payload-types'

type Props = {
  events: InvolvementEvent[]
  displayHeader: 'yes' | 'no'
}

export const InvolvementEventGallery = ({ events, displayHeader = 'no' }: Props) => {
  const now = Date.now()
  const upcomingEvents = events.filter(e => e.eventDate && Date.parse(e.eventDate) > now)
  return (
    <div className="global-margin-x global-margin-y space-y-8">
      {displayHeader === 'yes' && <h2 className="text-center sm:text-left">Upcoming Events</h2>}
      <p className="text-center sm:text-left">
        Come and meet one or more of our team members at the next event we&apos;re participating in.{' '}
      </p>
      {upcomingEvents.length == 0 ? (
        <div className="mx-auto text-center sm:text-left font-bold">No upcoming events...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center lg:place-items-start gap-4">
          {upcomingEvents.map(e => (
            <InvolvementEventCard doc={e} key={e.id} />
          ))}
        </div>
      )}
    </div>
  )
}
