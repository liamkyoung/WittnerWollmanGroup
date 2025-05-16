import React from 'react'

type Props = {
  bgColor: string
  title: string
  descriptor: string
}

export const Stat = ({ bgColor, title, descriptor }: Props) => {
  return (
    <div
      className={`${bgColor} p-6 sm:p-16 min-w-64 xl:min-w-64 2xl:min-w-64 flex items-center justify-center h-64`}
    >
      <div className="flex items-center gap-4 mr-auto sm:block sm:items-start">
        <h2 className="text-white">{title}</h2>
        <p className="text-lg text-white">{descriptor}</p>
      </div>
    </div>
  )
}
