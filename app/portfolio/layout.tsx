import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='h-full v-full bg-amber-600'>
        {children}
    </div>
  )
}
