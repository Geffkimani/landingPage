import { SVGProps } from 'react'

export default function CppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}>
      <title>C++</title>
      <path fill="#00599C" d="M128 0L256 64v128l-128 64L0 192V64z" />
      <path
        fill="#FFF"
        d="M80 165h18v-13h12v13h18v-39H80v39zm78-13v-13h-12v13h-6v13h6v13h12v-13h6v-13h-6z"
      />
    </svg>
  )
}
