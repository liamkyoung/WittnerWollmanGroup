import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import * as React from 'react'
import { Head, Html, Img, Tailwind } from '@react-email/components'

interface EmailTemplateProps {
  firstName: string
  lastName: string
  message: string
  phoneNumber: string
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => (
  <Html>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              wwRed: '#803D3B',
              wwYellow: '#FFD57E',
              wwBlack: '#1E1E1E',
              offwhite: '#fafbfb',
            },
            spacing: {
              0: '0px',
              20: '20px',
              45: '45px',
            },
          },
        },
      }}
    >
      <Head />
      <div className="space-y-4 mx-auto max-w-3xl">
        <Img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEAS_f_qAkup4ZZkUxWwrRS_f7BLeo6culA&s"
          alt="Netlify"
          className="mx-auto my-20 size-64"
        />
        <h1>New Message from wittnerwollman.com:</h1>

        <div className="grid grid-cols-2">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">First Name</label>
            <div className="mt-2">
              <p className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6">
                {firstName}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Last Name</label>
            <div className="mt-2">
              <p className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6">
                {lastName}
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Email</label>
            <div className="mt-2 grid grid-cols-1">
              <p className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6">
                {email}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Phone Number</label>
            <div className="mt-2 grid grid-cols-1">
              <p className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6">
                {phoneNumber}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            {firstName} {lastName}&apos;s Message
          </label>
          <div className="mt-2">
            <p className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6">
              {message}
            </p>
          </div>
        </div>
      </div>
    </Tailwind>
  </Html>
)
