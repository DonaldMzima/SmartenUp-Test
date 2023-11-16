import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'

type TransparentButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
}

/**
 * MainButton component that can act as a button or a link.
 *
 * @param {TransparentButtonProps} props - The props for the component.
 * @param {Function} [onClick] - The onClick handler for the button. Used when the component acts as a button.
 * @param {string} [href] - The URL for the link. Used when the component acts as a link.
 * @param {React.ReactNode} children - The content to be displayed inside the button/link.
 *
 * @example
 * // As a button
 * <MainButton onClick={() => console.log('Button clicked')}>
 *   Click Me
 * </MainButton>
 *
 * @example
 * // As a link
 * <MainButton href="https://example.com">
 *   Go to Example
 * </MainButton>
 *
 * @returns {React.ReactElement} The CustomButton component.
 */
export const TransparentButton: FC<TransparentButtonProps> = ({
  children,
  onClick,
  href,
}) => {
  const route = useRouter()

  return (
    <>
      {href ? (
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={() => {
            route.push(href)
          }}
        >
          <img
            src={'/SVGs/colorlessButton.svg'}
            alt="Logo"
            className="w-232 h-74 flex-shrink-0"
          />
          <div className="absolute">{children}</div>
        </div>
      ) : (
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={onClick}
        >
          <img
            src={'/SVGs/colorlessButton.svg'}
            alt="Logo"
            className="w-232 h-74 flex-shrink-0"
          />
          <div className="absolute">{children}</div>
        </div>
      )}
    </>
  )
}
