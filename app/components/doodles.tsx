import type { SVGProps } from 'react'

type DoodleProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function DoodleStar(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        {...base}
        d="M24 5c2.3 8.4 5.3 11.4 13.7 13.7C29.3 21 26.3 24 24 32.4 21.7 24 18.7 21 10.3 18.7 18.7 16.4 21.7 13.4 24 5Z"
      />
    </svg>
  )
}

export function DoodleHeart(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        {...base}
        d="M24 40C10 31 6 23.5 6 17.5 6 12 10 8 15 8c3.6 0 6.8 2.1 9 5.4C26.2 10.1 29.4 8 33 8c5 0 9 4 9 9.5C42 23.5 38 31 24 40Z"
      />
    </svg>
  )
}

export function DoodleSquiggle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" aria-hidden="true" {...props}>
      <path
        {...base}
        d="M3 15c8-14 18 6 27-2s18 8 27 0 18 6 27-2 18 6 30-3"
      />
    </svg>
  )
}

export function DoodleSun(props: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" {...props}>
      <circle {...base} cx="30" cy="30" r="12" />
      <path
        {...base}
        d="M30 4v8M30 48v8M4 30h8M48 30h8M11 11l6 6M43 43l6 6M49 11l-6 6M17 43l-6 6"
      />
    </svg>
  )
}

export function DoodleArrow(props: DoodleProps) {
  return (
    <svg viewBox="0 0 80 60" aria-hidden="true" {...props}>
      <path
        {...base}
        d="M6 12c22 4 46 10 62 30M68 42l4-16M68 42l-16 2"
      />
    </svg>
  )
}

export function DoodleCloud(props: DoodleProps) {
  return (
    <svg viewBox="0 0 90 50" aria-hidden="true" {...props}>
      <path
        {...base}
        d="M20 42c-9 0-15-6-15-13s6-12 13-12c1-8 8-13 16-13 9 0 15 6 16 14 7 0 12 5 12 12s-6 12-14 12H20Z"
      />
    </svg>
  )
}

export function DoodleUnderline(props: DoodleProps) {
  return (
    <svg viewBox="0 0 240 20" aria-hidden="true" {...props}>
      <path
        {...base}
        strokeWidth={5}
        d="M4 12c40-9 90-9 150-6 26 1 52 3 82 8"
      />
    </svg>
  )
}
