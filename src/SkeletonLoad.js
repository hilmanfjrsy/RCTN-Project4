import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoad() {
  return (
    <div className='d-block'>
    <Skeleton  height={290} width={210} />
    <Skeleton  height={50} width={210} />
    </div>

  )
}

export default SkeletonLoad