import type { CSSProperties, FC, SyntheticEvent } from "react"

import React, { useContext } from "react"

import { ProductContext } from "./ProductCard"

import noImage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css'


export interface Props {
  img?: string
  alt?: string
  className?: string
  style?: CSSProperties
}

export const ProductImage: FC<Props> = ({ img = '', alt = '', className, style }) => {

  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  const onErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = noImage

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      onError={onErrorImage}
      alt={alt}
    />
  )
}
