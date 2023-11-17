import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'

type MainButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
}

/**
 * MainButton component that can act as a button or a link.
 *
 * @param {MainButtonProps} props - The props for the component.
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
export const MainButton: FC<MainButtonProps> = ({
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
            src={'/SVGs/gradientButton.svg'}
            alt="Button Background"
            className="w-120 h-42 sm:w-232 sm:h-42 md:w-full md:h-42 lg:w-232 lg:h-42 xl:w-full xl:h-42 flex-shrink-0"
          />
          <div className="absolute">{children}</div>
        </div>
      ) : (
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={onClick}
        >
          <img
            src={'/SVGs/gradientButton.svg'}
            alt="Button Background"
            className="w-120 h-42 sm:w-232 sm:h-42 md:w-full md:h-42 lg:w-232 lg:h-42 xl:w-full xl:h-42 flex-shrink-0"
          />
          <div className="absolute">{children}</div>
        </div>
      )}
    </>
  )
}
