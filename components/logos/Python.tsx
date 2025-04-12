import { SVGProps } from 'react';

export default function PythonLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 255"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'Python'}</title>
      <defs>
        <linearGradient id="python-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4B8BBE" />
          <stop offset="100%" stopColor="#306998" />
        </linearGradient>
        <linearGradient id="python-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        d="M126.9 0c-11.4.1-22.3 1-31.9 2.6-28.3 4.7-33.5 14.5-33.5 32.6v23.9h67v8h-93C14.5 67.1.3 78.4.3 109.3c0 30 11.5 47.4 34.4 47.4h20.7v-28.3c0-25.4 22-24.2 43.6-24.2h62.6c24.1 0 43.6-5.5 43.6-36.4V35.4c0-27.1-22.1-32.6-45.5-35.2-10.1-1.1-20.6-1.5-32.8-1.5z"
        fill="url(#python-blue)"
      />
      <path
        d="M88.8 19.3c5.5 0 10 4.5 10 10.1 0 5.5-4.5 10-10 10-5.6 0-10.1-4.5-10.1-10 0-5.6 4.5-10.1 10.1-10.1z"
        fill="#FFFFFF"
      />
      <path
        d="M254.9 117.3c0-30.7-12.9-43.3-35.3-43.3H198v26.5c0 27.6-23.6 25.6-47.1 25.6h-61.6c-23.9 0-43.6 6.7-43.6 37.2v56.7c0 26.6 22.8 33.6 47.1 36.8 14.9 1.8 29.2 2.1 42.6 1.8 12.1-.3 23.6-1.4 33.9-3.2 26.8-4.8 32.4-15.5 32.4-32.3v-23.8h-67v-8h93c27.4 0 42.3-11.9 42.3-42.2z"
        fill="url(#python-yellow)"
      />
      <path
        d="M167.6 217.2c5.6 0 10.1 4.5 10.1 10.1 0 5.6-4.5 10.1-10.1 10.1s-10-4.5-10-10.1c0-5.6 4.4-10.1 10-10.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
