import React from 'react'

interface Props {
  percent: number
  label: string
}

function SkillCircle({ percent, label }: Props) {
  const circumference = 36 * 2 * Math.PI
  const offset = circumference - (circumference / 100) * percent

  return (
    <div
      className={`block rounded-full mb-2 w-32 h-32 relative flex items-center p-3 mr-4 mb-4`}
    >
      <svg
        height="128"
        width="128"
        viewBox="128px 128px"
        className="stroke-current fill-current text-blue-500 absolute left-0 top-0 transform -rotate-90"
      >
        <circle
          strokeWidth="6"
          fill="transparent"
          opacity={0.1}
          r="60"
          cx="64"
          cy="64"
          stroke="white"
        />
        <circle
          strokeWidth="6"
          fill="transparent"
          r="60"
          cx="64"
          cy="64"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="block w-full text-xs text-white font-bold text-center">
        {label}
      </span>
    </div>
  )
}

export default SkillCircle
