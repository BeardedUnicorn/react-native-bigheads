import React from 'react'
import { G, Path } from 'react-native-svg'
import { useTheme } from 'themeContext'

export const FaceMask = () => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        d="M651.16 719.81C656.98 715.803 662.627 711.573 668.1 707.12C695.227 685.146 717.73 658.082 734.371 627.5C561.069 558.7 446.39 556.5 265.626 627.5C276.216 646.947 289.274 665.143 304.61 681.6C309.044 686.367 313.64 690.96 318.4 695.38C323.432 700.11 328.706 704.576 334.2 708.76C339.667 712.92 345.31 716.793 351.13 720.38C374.68 733.43 400.17 742.38 426.5 748.18C433.09 749.63 439.73 750.89 446.39 751.89C515 758 591 758 651.16 719.81Z"
        fill="#C3F4FF"
      />
      <Path
        d="M440.5 606C473 600.5 523.5 600.5 556.5 606M668.1 707.12C662.627 711.573 656.98 715.803 651.16 719.81C591 758 515 758 446.39 751.89C439.73 750.89 433.09 749.63 426.5 748.18C400.17 742.38 374.68 733.43 351.13 720.38C345.31 716.793 339.667 712.92 334.2 708.76C328.706 704.576 323.432 700.11 318.4 695.38C313.64 690.96 309.044 686.367 304.61 681.6C289.274 665.143 276.216 646.947 265.626 627.5C446.39 556.5 561.069 558.7 734.371 627.5C717.73 658.082 695.227 685.146 668.1 707.12Z"
        fill="#C3F4FF"
        stroke={colors.outline}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  )
}
