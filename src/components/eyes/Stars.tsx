import React from 'react'
import { G, Path } from 'react-native-svg'
import { useTheme } from '../../themeContext'
import { RightLash, LeftLash } from './Lashes'
import { EyeProps } from './types'

export const Stars = ({ withLashes }: EyeProps) => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        d="M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z"
        fill="black"
        fillOpacity="0.1"
      />
      <Path
        d="M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z"
        fill="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.799 574.717 586.888 571.466Z"
        fill="black"
        fillOpacity="0.1"
      />
      <Path
        d="M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.008 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.807 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z"
        fill="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M661.169 526.093C662.262 523.838 665.475 523.838 666.568 526.093L675.595 544.717C676.032 545.619 676.891 546.244 677.884 546.381L698.391 549.214C700.873 549.556 701.866 552.612 700.059 554.348L685.134 568.692C684.412 569.386 684.084 570.396 684.26 571.383L687.902 591.757C688.343 594.224 685.744 596.113 683.534 594.931L665.284 585.168C664.4 584.695 663.338 584.695 662.454 585.168L644.2 594.931C641.99 596.113 639.391 594.224 639.832 591.757L643.477 571.383C643.654 570.396 643.326 569.386 642.603 568.692L627.678 554.348C625.872 552.612 626.864 549.556 629.347 549.214L649.853 546.381C650.846 546.244 651.705 545.619 652.143 544.717L661.169 526.093Z"
        fill="#FFC227"
      />
      <Path
        d="M338.678 526.142C339.772 523.886 342.985 523.886 344.078 526.142L353.104 544.766C353.541 545.668 354.4 546.292 355.393 546.429L375.9 549.262C378.382 549.605 379.375 552.66 377.568 554.397L362.644 568.74C361.921 569.435 361.593 570.444 361.769 571.431L365.412 591.806C365.853 594.273 363.253 596.161 361.043 594.979L342.793 585.216C341.909 584.743 340.847 584.743 339.963 585.216L321.71 594.979C319.5 596.161 316.9 594.272 317.342 591.805L320.986 571.431C321.163 570.444 320.835 569.435 320.112 568.74L305.188 554.397C303.381 552.66 304.374 549.605 306.856 549.262L327.363 546.429C328.356 546.292 329.215 545.668 329.652 544.766L338.678 526.142Z"
        fill="#FFC227"
      />
      {withLashes && (
        <G>
          <LeftLash />
          <RightLash />
        </G>
      )}
    </G>
  )
}
