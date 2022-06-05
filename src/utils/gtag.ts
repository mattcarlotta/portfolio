export const GTAG_ID = process.env.NEXT_PUBLIC_GA_ID as string

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  gtag('config', GTAG_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string
  category: string
  label: string
  value: number
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  })
}
