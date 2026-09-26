import { CSSProperties } from 'react'

import feather from "feather-icons"

const FeatherIcon = ({
    icon = "",
    fIconColor = "currentColor",
    iconFillColor = "none",
    iconStrokeColor = "currentColor",
    iconStrokeWidth = 2,
    iconWidth = 24,
    iconHeight = 24,
    iconStyle = {},
    className = "",
    parentClass = "",
    parentStyles = {},
}: {
    icon: string
    fIconColor?: string
    iconFillColor?: string
    iconStrokeColor?: string
    iconStrokeWidth?: number
    iconWidth?: number
    iconHeight?: number
    iconStyle?: string | CSSProperties
    className?: string
    parentClass?: string
    parentStyles?: CSSProperties
}) => {
    // Resolve alias names to feather icon names
    const featherName =
        icon === 'hamburger' ? 'menu' :
        icon === 'close'     ? 'x'    :
        icon

    const featherIcon = feather.icons[featherName as keyof typeof feather.icons]

    switch (icon) {

        case 'star':
            return (
                <svg
                    width={iconWidth}
                    height={iconHeight}
                    viewBox="0 0 12 12"
                    fill="none"
                    className={className}
                    style={typeof iconStyle === 'object' ? iconStyle : undefined}
                    aria-hidden="true"
                >
                    <path
                        d="M6 1l1.39 2.82L10.5 4.24l-2.25 2.19.53 3.09L6 7.77l-2.78 1.75.53-3.09L1.5 4.24l3.11-.42z"
                        fill={iconFillColor}
                        stroke={iconStrokeColor}
                        strokeWidth="0.8"
                    />
                </svg>
            )

        case 'check':
            return (
                <svg
                    width={iconWidth}
                    height={iconHeight}
                    viewBox="0 0 8 8"
                    fill="none"
                    className={className}
                    style={typeof iconStyle === 'object' ? iconStyle : undefined}
                    aria-hidden="true"
                >
                    <path
                        d="M1.5 4L3.2 5.8L6.5 2.2"
                        stroke={iconStrokeColor}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )

        default:
            return (
                <>
                    {featherIcon ? (
                        <div className={parentClass} style={parentStyles}
                            dangerouslySetInnerHTML={{
                                __html: featherIcon.toSvg({
                                    class: className,
                                    color: fIconColor,
                                    width: iconWidth,
                                    height: iconHeight,
                                    stroke: iconStrokeColor,
                                    fill: iconFillColor,
                                    style: typeof iconStyle === 'string' 
                                        ? `${iconStyle};background-color:transparent;` 
                                        : Object.entries({ ...iconStyle, backgroundColor: 'transparent' })
                                            .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${v}`)
                                            .join(';'),
                                    strokeWidth: iconStrokeWidth,
                                })
                            }}
                        />
                    ) : null}
                </>
            )
    }
}

export default FeatherIcon
