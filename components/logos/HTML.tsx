import { SVGProps } from 'react'

export default function HtmlLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}>
      <title>HTML5</title>
      <path fill="#E44D26" d="M19 0l9 102 36 10 36-10 9-102H19z" />
      <path fill="#F16529" d="M64 116l29-8 8-90H64v98z" />
    </svg>
  )
}
