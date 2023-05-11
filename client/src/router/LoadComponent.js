import React from 'react'

function LoadComponent({Component}) {
  return (
    <React.Suspense fallback={<p>Loading lazy chunk...</p>}>
      <Component/>
      </React.Suspense>
  )
}

export default LoadComponent
