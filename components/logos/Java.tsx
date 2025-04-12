import { SVGProps } from 'react'

export default function JavaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 0 256 310"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <title>Java</title>
      <path fill="#5382A1" d="M128 0L0 256h256L128 0z" />
      <path
        fill="#F89820"
        d="M128 80c-28 35-35 49-12 85-23-11-40-39-20-70 8-12 20-19 32-15z"
      />
    </svg>
  )
}
