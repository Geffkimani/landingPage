import { SVGProps } from 'react'

export default function NextjsLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 148 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <title>Next.js</title>
      <path
        d="M34.992 23.495h-7.054v42.82h7.054v-42.82Z"
        fill="black"
      />
      <path
        d="M59.208 42.77c0-7.15-3.454-10.695-8.507-10.695-4.57 0-8.21 3.3-8.21 10.383 0 7.093 3.64 10.65 8.55 10.65 4.686 0 8.167-3.3 8.167-10.338Z"
        fill="black"
      />
      <path
        d="M84.122 23.495H77.06v42.82h7.062V23.495Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103.495 23.778 147.499 89.778H139.43L96.34 23.778h7.155Z"
        fill="black"
      />
    </svg>
  )
}
