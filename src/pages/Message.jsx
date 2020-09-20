import React from 'react'

import { WideContainer } from '../atoms/Container'
import { SmallHero } from '../organisms/Hero'
import { EducationSection } from '../organisms/EducationSection'

export function Message() {
  return (
    <main className="home-page">
      <WideContainer>
        <SmallHero
          title="Email your representatives"
          subTitle="Based on your location, there are representatives in your area that could benefit from learning more about the importance of our nations soils. Use the template below to send your message."
          button="Customize your message"
        />
        PAGE CONTENT
        <EducationSection />
      </WideContainer>
    </main>
  )
}

export default Message
