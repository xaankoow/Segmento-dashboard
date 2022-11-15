import React from 'react'
import AutoSection from '../AddIndexerLink/AutoSection'
import ManualSection from '../AddIndexerLink/ManualSection'
import HeaderRegisterLinkPage from './HeaderRegisterLinkPage'

export default function index() {
  return (
    <div>
      <HeaderRegisterLinkPage />
      <ManualSection />
      <AutoSection />
    </div>
  )
}
