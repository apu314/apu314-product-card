import type { CSSProperties, FC } from "react"

import React, { useContext } from "react"

import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'


export interface Props {
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductTitle: FC<Props> = ({ title = '', className, style }) => {
  const { product } = useContext(ProductContext)

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  )
}
