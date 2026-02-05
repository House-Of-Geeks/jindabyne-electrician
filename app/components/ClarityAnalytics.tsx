'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const CLARITY_PROJECT_ID = 'vckjjmow3c'

export default function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID)
  }, [])

  return null
}
