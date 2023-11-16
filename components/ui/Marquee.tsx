import { FC } from 'react'

// Define the type for each item
export type MarqueeItem = {
  text: string
  imageUrl: string
}

/**
 * Props for the Marquee component.
 *
 * @property items - An array of MarqueeItem objects to display in the marquee.
 * @property className - An optional string for CSS class names to apply to the marquee container.
 * @property tiltAngle - An optional number for the tilt angle of the marquee container. Defaults to 0.
 * @property is3D - An optional boolean that, if true, applies a 3D rotation effect on the Y-axis. Defaults to false.
 * @property hasContainer - An optional boolean that, if true, applies a container with default styles. Defaults to true.
 */

export type MarqueeProps = {
  items: MarqueeItem[]
  className?: string
  tiltAngle?: number
  is3D?: boolean
  hasContainer?: boolean
}

/**
 * Renders a marquee with text and images.
 *
 * @param props The props for the Marquee component.
 * @returns A React component that displays a marquee of images and text.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import Marquee from './Marquee';
 *
 * const items = [
 *   { text: 'Text 1', imageUrl: 'url-to-image-1.jpg' },
 *   { text: 'Text 2', imageUrl: 'url-to-image-2.jpg' },
 *   // more items...
 * ];
 *
 * export const Component = () => (
 *   <div>
 *     <Marquee items={items}  className="custom-class" tiltAngle={-3} is3d/>
 *   </div>
 * );
 *
 * ```
 */
export const Marquee: FC<MarqueeProps> = ({
  items,
  className,
  is3D = false,
  hasContainer = true,
  tiltAngle = 0,
}) => {
  const doubledItems = [...items, ...items]
  const marqueeStyle = {
    display: 'flex',
    animation: 'marquee 20s linear infinite',
  }

  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `

  const marqueeContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Semi-transparent white background
    border: '2px solid rgba(252, 248, 248, 0.1)',
    transform: `perspective(500px) rotate${is3D ? 'Y' : ''}(${tiltAngle}deg)`,
    height: '90px',
    flexShrink: 0,
    backgroundPosition: '0% 0%',
    backgroundSize: 'cover',
    boxShadow: '0px 4px 20px -1px rgba(0, 0, 0, 0.00)',
    backdropFilter: 'blur(25px)',
  }

  return (
    <div
      className={`${className || ''}`}
      style={hasContainer ? marqueeContainerStyle : {}}
    >
      <style>{marqueeKeyframes}</style>
      <div style={marqueeStyle}>
        {doubledItems.map((item, index) => (
          <div key={index} className="inline-flex items-center mr-5 gap-10">
            <img
              src={item.imageUrl || '/assets/images/star.png'}
              alt={item.text}
              className="ml-20 h-10 w-11"
            />
            <span className="text-center text-white mt-2 font-Ondo text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[40.965px] tracking-wide uppercase whitespace-nowrap mr-24">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
