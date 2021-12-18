import React, { ReactNode, useEffect, useState } from "react"
import { Button } from "../Button"

interface Props {
  event_name?: string
  releases?: string
  label: string
}

const TitoWidget = ({ event_name, releases, label = "Tickets" }: Props) => {
  useEffect(() => {
    const scriptElement = document.createElement("script")
    scriptElement.src = "https://js.tito.io/v2"
    let retryMountJavaScript: ReturnType<typeof setTimeout>

    const attemptMountJavaScript = () => {
      // If the JavaScript tag has not been placed, put it in
      if (!document.body.contains(scriptElement)) {
        document.body.appendChild(scriptElement)
      }
    }

    // Start by attempting to mount the JavaScript
    attemptMountJavaScript()

    return () => {
      document.body.removeChild(scriptElement)
      clearTimeout(retryMountJavaScript)
    }
  }, [])

  // Swap buttons on the fly!
  // If the Tito widget has not loaded yet,
  // display the button which brings them to the website
  // If the widget has loaded, display the created Tito button.
  return (
    <Button
      href={`#/tito/${event_name}/en/registrations/new?releases=${releases}`}
      className="rhulcompsoc-button-hackaway"
    >
      {label}
    </Button>
  )
}

export { TitoWidget }
