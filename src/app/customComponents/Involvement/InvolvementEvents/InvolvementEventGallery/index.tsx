import { InvolvementEventCard } from '../InvolvementEventCard'
import { InvolvementEvent } from '@/payload/payload-types'

type Props = {
  events: InvolvementEvent[]
}

export const InvolvementEventGallery = ({ events }: Props) => {
  const now = Date.now()
  const upcomingEvents = events.filter(e => e.eventDate && Date.parse(e.eventDate) > now)
  return (
    <div className="global-margin-x space-y-16">
      <h2 className="text-center lg:text-left">Upcoming Events</h2>
      <p className="text-center lg:text-left">
        Come and meet one or more of our team members at our next event we&apos;re participating in{' '}
      </p>
      {upcomingEvents.length == 0 ? (
        <div>No upcoming events...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {upcomingEvents.map(e => (
            <InvolvementEventCard doc={e} key={e.id} />
          ))}
        </div>
      )}
    </div>
  )
}
