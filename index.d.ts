import { FC } from 'react'

declare interface Props {
  /**
   * The size of the indicator. Can be specified as any css-compatible length.
   *
   * e.g. `'100%'`, `'128px'`, `'1em'`
   */
  size?: string

  /**
   * The color of the indicator. Can be specificed as any css-compatible color.
   *
   * e.g. `'black'`, `'#fc3'`, `'rgb(128, 64, 192)'`, `'#00000099'`
   */
  color?: string
}

declare const SuccessIndicator: FC<Props>

export = SuccessIndicator
