import React from 'react'
import { Metadata } from 'next'

import { ContactForm } from '../../customComponents/inputs/ContactForm'
import SocialList from '../../customComponents/SocialList'
import { ColorScheme } from '../../types/viewmodels'

function Page() {
  return (
    <div className="global-margin-x my-24 overflow-hidden">
      <div className="w-full lg:w-3/4 space-y-8 mb-16 text-center lg:text-left">
        <h1>Send Us A Message!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor eros vel augue
          pulvinar ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <ContactForm />
        <div className="border-t-2 pt-12 text-center lg:border-l-2 lg:border-t-0 lg:pt-0 lg:text-left border-wwRed pl-12">
          <SocialList colorScheme={ColorScheme.RED} />
        </div>
      </div>
    </div>
  )
}

export default Page

export async function generateMetadata({ params: {} }): Promise<Metadata> {
  return {
    title: 'Contact Us | Wittner Wollman Group',
    description:
      'Send the Wittner Wollman Group a message to get in touch with one of our team members.',
  }
}
