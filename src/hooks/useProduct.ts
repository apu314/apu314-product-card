import { useEffect, useRef, useState } from 'react';
import { onChangeArgs } from "../interfaces"
import { Product } from '../interfaces';
import { InitialValues } from '../interfaces/Product';

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    // Math.max() returns any value above cero
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      // Math.min retorna el valor mínimo de los dos especificados
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(initialValues?.count || value)
  }, [initialValues?.count, value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset
  }
}
