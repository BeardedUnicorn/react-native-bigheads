import React from 'react'
import { G, Path } from 'react-native-svg'
import { useTheme } from '../../themeContext'
import { LeftLash } from './Lashes'
import { EyeProps } from './types'

export const PiratePatch = ({ withLashes }: EyeProps) => {
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
        d="M341.508 574.026C348.268 574.026 353.748 568.546 353.748 561.786C353.748 555.026 348.268 549.546 341.508 549.546C334.748 549.546 329.268 555.026 329.268 561.786C329.268 568.546 334.748 574.026 341.508 574.026Z"
        fill={colors.outline}
      />
      <Path
        d="M318.4 304.611C434.725 459.583 625.347 556.941 760.645 556.941"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M566.075 556.461C564.793 520.105 589.15 489.338 621.558 474.98C624.957 473.587 628.448 472.431 632.006 471.519C649.97 467.054 668.875 468.254 686.13 474.954C690.06 476.467 693.88 478.249 697.565 480.287C735.421 500.657 752.42 548.564 737.767 587.279C736.293 591.188 734.501 594.97 732.409 598.586C730.637 602.058 728.619 605.4 726.371 608.585C724.155 611.742 721.722 614.74 719.089 617.559C716.243 620.375 713.193 622.976 709.962 625.34C706.757 627.703 703.395 629.844 699.898 631.75C664.799 648.415 617.366 643.287 589.086 617.148C586.252 614.141 583.635 610.937 581.254 607.559C578.529 603.71 576.136 599.635 574.1 595.381C569.79 586.69 567.299 577.211 566.78 567.524C566.322 563.854 566.086 560.159 566.075 556.461Z"
        fill="black"
        fillOpacity="0.1"
      />
      <Path
        d="M573.149 546.415C571.936 512.026 594.975 482.924 625.629 469.343C628.844 468.026 632.146 466.932 635.512 466.069C652.504 461.846 670.386 462.981 686.708 469.319C690.424 470.75 694.038 472.435 697.524 474.363C733.331 493.631 749.41 538.946 735.551 575.566C734.156 579.263 732.461 582.84 730.482 586.261C728.806 589.545 726.897 592.706 724.771 595.719C722.675 598.705 720.373 601.541 717.883 604.207C715.191 606.871 712.306 609.331 709.25 611.567C706.218 613.802 703.038 615.828 699.731 617.63C666.53 633.394 621.664 628.544 594.915 603.819C592.234 600.974 589.758 597.943 587.506 594.749C584.928 591.107 582.665 587.254 580.739 583.229C576.662 575.009 574.306 566.043 573.816 556.88C573.382 553.408 573.159 549.914 573.149 546.415Z"
        fill="#633749"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      {withLashes && <LeftLash />}
    </G>
  )
}
