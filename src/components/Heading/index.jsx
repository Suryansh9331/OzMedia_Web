import React from 'react'
import clsx from 'clsx'

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
}

const weightMap = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  gray: 'text-gray-500',
  black: 'text-black',
  white: 'text-white',
}

const Heading = ({
  children,
  level = 1,
  size = '3xl',
  weight = 'bold',
  color = 'black',
  className = '',
}) => {
  const Tag = `h${level}`

  const classes = clsx(
    sizeMap[size],
    weightMap[weight],
    colorMap[color],
    className
  )

  return <Tag className={classes}>{children}</Tag>
}

export default Heading
