import { SVGProps } from 'react'

export default function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}>
      <title>React</title>
      <circle cx="128" cy="128" r="14" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="10" fill="none">
        <ellipse rx="90" ry="35" cx="128" cy="128" transform="rotate(60 128 128)" />
        <ellipse rx="90" ry="35" cx="128" cy="128" transform="rotate(120 128 128)" />
        <ellipse rx="90" ry="35" cx="128" cy="128" />
      </g>
    </svg>
  )
}
