import React from 'react'

type Props = {
  bgColor: string
  title: string
  descriptor: string
}

export const Stat = ({ bgColor, title, descriptor }: Props) => {
  return (
    <div
      className={`${bgColor} p-10 sm:p-16 xl:size-64 2xl:size-72 flex items-center justify-center`}
    >
      <div className="">
        <h2 className="text-white">{title}</h2>
        <p className="text-lg text-white">{descriptor}</p>
      </div>
    </div>
  )
}
