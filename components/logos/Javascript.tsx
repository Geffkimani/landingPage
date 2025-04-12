import { SVGProps } from 'react'

export default function JavascriptLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}>
      <title>JavaScript</title>
      <path fill="#F7DF1E" d="M0 0h128v128H0z" />
      <path
        d="M89.6 106.8c1.7 2.7 3.9 4.6 7.8 4.6 3.3 0 5.4-1.6 5.4-3.9 0-2.7-2.2-3.7-6-5.3l-2.1-.9c-6.1-2.6-10.1-5.8-10.1-12.7 0-6.3 4.8-11.1 12.4-11.1 5.4 0 9.3 1.9 12 6.8l-6.6 4.3c-1.5-2.7-3.1-3.8-5.4-3.8-2.5 0-4.1 1.6-4.1 3.8 0 2.7 1.6 3.7 5.4 5.3l2.1.9c7.2 3.1 11.3 6.3 11.3 13.4 0 7.7-6.1 11.9-14.2 11.9-7.9 0-13-3.8-15.5-8.9zm-37.4.8c1.3 2.3 2.5 4.3 5.4 4.3 2.8 0 4.6-1.1 4.6-5.4V70.4h8.6v35.9c0 8.9-5.2 13-12.7 13-6.8 0-10.7-3.5-12.7-7.9l6.8-4.6z"
        fill="#000"
      />
    </svg>
  )
}
