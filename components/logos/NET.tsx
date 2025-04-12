import React from 'react'
import { SVGProps } from 'react'

export default function DotNetLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}>
      <title>.NET</title>
      <path
        d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0z"
        fill="#512BD4"
      />
      <path
        fill="#fff"
        d="M112 160h32l48 88V160h32v192h-32l-48-88v88h-32V160zm144 0h32l48 88V160h32v192h-32l-48-88v88h-32V160z"
      />
    </svg>
  )
}
