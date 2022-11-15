import React from 'react'

export const BreadCrumb: React.FC<{ routes: string[] }> = ({ routes }) => {
  return (
    <section className="bread-crumb flex">
      {routes.map((route, index) => {
        const isTheLastOne = index === routes.length - 1
        return (
          <p key={route} className={`pointer bread-crumb__${isTheLastOne ? 'last-route' : 'route'}`}>
            {route}
            {!isTheLastOne && '/'}
          </p>
        )
      })}
    </section>
  )
}
