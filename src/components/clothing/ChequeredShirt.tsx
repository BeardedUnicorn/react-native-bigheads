import React from 'react'
import { useTheme } from 'themeContext'
import { ClothingProps } from './types'
import { G, Path } from 'react-native-svg'

export const Front = ({ color, hasBreasts }: ClothingProps) => {
  const { colors } = useTheme()

  const { base } = colors.clothing[color]

  if (!hasBreasts) {
    return null
  }

  return (
    <G>
      <Path
        d="M407 943.809L380.434 831.734C367.11 854.533 367.208 872.681 367.944 882.999C368.727 889.486 370.834 920.267 407 943.809Z"
        fill={colors.clothing.white.base}
      />
      <Path
        d="M593.051 943.809L619.585 831.699C629.709 848.064 634.378 869.819 631.285 889.008C629.333 901.121 621.865 925.38 593.051 943.809Z"
        fill={colors.clothing.white.base}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M380.5 831.982H380.297C380.127 832.282 379.968 832.563 379.816 832.831C378.117 835.831 377.43 837.044 375.17 841.98H382.025V851.991H371.35C370.193 855.237 369.983 857.11 368.867 861.982H382V881.979H367.827C367.827 881.979 368.434 887.676 369.329 892.002H381.984V901.992H372.164C372.164 901.992 374.079 907.314 376.729 911.999H381.984V920.453C382.462 921.131 387.83 928.219 391.999 931.969V911.999H399.47L397.09 901.992H391.999V891.998L394.745 891.999L392.344 881.979H391.999V880.511L380.5 831.982ZM401.999 922.696V932.028H392.057C392.643 932.83 400.4 939.611 406.995 943.804L401.999 922.696Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M619.516 831.984H619.766C621.245 834.372 624.022 839.561 624.981 841.941L617.152 841.977L619.516 831.984Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M614.781 851.992H628.734C629.806 855.029 631.108 861.065 631.191 861.979H612.418L614.781 851.992Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M600.578 912.004H602.028V932.032H595.848L593.498 941.947H595.793C600.734 938.443 605.701 934.735 612.043 927.927V911.991H623.354C625.681 907.765 627.341 903.552 627.88 901.973H612.043V891.981H630.719C631.235 890.029 631.898 885.655 632.267 881.963H612.043V863.531L600.578 912.004Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M392 912.003H381.985V901.996H392V912.003ZM392 892.002V881.983H382.001L381.985 892.006L392 892.002ZM382.001 861.986H387.675L385.268 851.997L382.026 851.995L382.001 861.986Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M402 940.363V932.032H404.219L406.633 941.958H404.255L402 940.363Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path d="M607.696 882.023H612.036V892.013H605.301L607.696 882.023Z" fill={base} fillOpacity="0.37" />
      <Path
        d="M602.005 937.374V932.012H608.078C606.578 933.43 603.263 936.487 602.005 937.374Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path d="M602.942 902.005H612.033V912.008H602.012V905.765L602.942 902.005Z" fill={base} fillOpacity="0.37" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M370.844 898H396.148L395.648 896H370.262C370.392 896.467 370.691 897.52 370.844 898Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M604.363 896.002L603.9 898.003H629.21C629.398 897.344 629.777 896 629.777 896L604.363 896.002Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M396 935.598V897.402L398 905.812V937.271L396 935.598Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path d="M596.021 931.351V941.845L598.016 940.422V922.88L596.021 931.351Z" fill={base} fillOpacity="0.17" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M383.8 846H373.453L372.688 848H384.286L383.8 846Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path d="M626.608 846L627.375 848H615.719L616.206 846H626.608Z" fill={base} fillOpacity="0.17" />
    </G>
  )
}

export const Back = ({ color }: ClothingProps) => {
  const { colors, skin } = useTheme()

  const { base } = colors.clothing[color]

  return (
    <G>
      <Path
        d="M544.846 847.98L502.716 813.61L577.346 758.82H416.646L491.276 813.61L449.146 847.98L411.516 791.48V869.96H585.776V786.52L544.846 847.98Z"
        fill={skin.shadow}
      />
      <Path
        d="M613.655 758.16L570.926 758.26C570.704 762.777 570.227 767.277 569.496 771.74C569.025 773.882 568.444 775.998 567.756 778.08C565.416 784.57 550.496 790.08 546.266 794.81C544.864 796.383 543.361 797.863 541.766 799.24C516.596 817.44 476.596 818.44 452.286 798.66C449.664 796.371 447.282 793.821 445.176 791.05C440.946 785.49 428.776 779.46 427.076 772.11C426.593 769.935 426.233 767.735 425.996 765.52C425.754 763.261 425.634 760.992 425.636 758.72C425.636 758.72 380.426 758.16 380.426 758.16C376.905 758.16 373.529 759.558 371.039 762.046C368.548 764.534 367.148 767.91 367.146 771.43V1056.12C367.148 1059.64 368.548 1063.02 371.039 1065.5C373.529 1067.99 376.905 1069.39 380.426 1069.39H619.355C622.875 1069.39 626.25 1067.99 628.739 1065.5C631.227 1063.01 632.626 1059.64 632.626 1056.12V778C632.626 765.82 626.745 758.16 613.655 758.16Z"
        fill={colors.clothing.white.base}
      />
      <Path
        d="M609.836 758.16C673.376 758.16 698.356 801.55 688.736 1030.16C669.996 1036.86 632.826 1034.75 632.826 1034.75L609.836 758.16Z"
        fill={colors.clothing.white.base}
      />
      <Path
        d="M448.056 855.4L496.506 831.31L545.086 855.4L508.026 812.38L464.136 813.21L448.056 855.4Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M632.626 831.31C632.626 831.31 609.836 915.85 613.316 1065.31L646.526 1034.31L650.106 896.73C644.486 824.5 632.626 831.31 632.626 831.31Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M385.996 758.16C324.216 758.16 297.116 814.61 305.246 1003.64C327.666 1013.55 361.436 1009.22 361.436 1009.22L385.996 758.16Z"
        fill={colors.clothing.white.base}
      />
      <Path
        d="M303.936 957.49C304.109 971.13 304.512 985.623 305.146 1000.97C320.416 1001.7 348.836 1001.85 362.256 1000.97L366.436 958.16C355.666 956.9 320.656 956.49 303.936 957.49Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M367.116 831.31L366.616 1009L353.266 1009.9C350.296 860.85 367.116 831.31 367.116 831.31Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M380.426 1069.39H496.996C387.806 1069.39 396.086 838.25 367.106 838.25V1056.12C367.107 1057.87 367.453 1059.6 368.124 1061.21C368.794 1062.82 369.776 1064.29 371.013 1065.52C372.251 1066.75 373.719 1067.73 375.334 1068.39C376.949 1069.06 378.679 1069.4 380.426 1069.39Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M589.506 763.64L514.836 818.45L556.976 852.83L616.396 763.59L589.506 763.64Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M609.836 758.16C677.256 758.16 688.286 814.44 688.736 891.94V1030.16C688.736 1030.16 638.736 1035.69 632.826 1034.75L632.726 892.64"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M385.996 758.16C360.266 758.16 342.476 766.28 330.286 780.6C310.836 803.47 305.656 842.14 305.286 888.87V1012.64C317.346 1015.96 366.646 1009 366.646 1009L367.136 890.4"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M369.596 1011.24C367.766 1013.85 295.826 1013.16 294.926 1011.24C294.026 1009.32 292.736 973.74 294.926 970.24C296.726 967.36 367.036 967.97 369.596 970.24C372.156 972.51 371.426 1008.63 369.596 1011.24Z"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M361.146 860.29C360.956 856.62 361.036 852.94 361.206 849.29C361.376 845.64 361.676 841.95 362.056 838.29C362.256 836.46 362.466 834.62 362.706 832.78C362.946 830.94 363.196 829.11 363.556 827.28C364.263 823.472 365.47 819.773 367.146 816.28C368.821 819.773 370.028 823.472 370.736 827.28C371.096 829.11 371.356 830.95 371.586 832.78C371.816 834.61 372.036 836.46 372.236 838.29C372.622 841.97 372.909 845.637 373.096 849.29C373.256 852.96 373.336 856.64 373.096 860.29H361.146Z"
        fill={colors.outline}
      />
      <Path
        d="M632.626 869.4V877.4C632.886 911.4 632.886 946.4 632.626 980.16C632.626 983.03 632.626 985.88 632.626 988.69V1056.1C632.626 1059.62 631.228 1062.99 628.739 1065.48C626.25 1067.97 622.875 1069.37 619.356 1069.37H380.426C376.905 1069.37 373.529 1067.97 371.039 1065.48C368.549 1063 367.148 1059.62 367.146 1056.1V990.3C366.886 955.44 366.886 920.44 367.146 885V860.29"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M694.416 970.24C696.636 972.5 696.006 1008.63 694.416 1011.24C692.826 1013.85 630.416 1013.16 629.646 1011.24C628.876 1009.32 627.746 973.74 629.646 970.24C629.916 969.74 631.926 969.35 635.096 969.06"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path d="M675.916 968.3C679.716 968.6 690.916 967.12 691.336 967.54Z" fill="black" />
      <Path
        d="M675.916 968.3C676.499 967.543 677.126 966.821 677.796 966.14C678.341 965.595 678.937 965.102 679.576 964.67C680.151 964.288 680.757 963.954 681.386 963.67C681.996 963.38 682.606 963.13 683.216 962.88C684.445 962.383 685.712 961.989 687.006 961.7C687.665 961.554 688.333 961.451 689.006 961.39C689.366 961.39 689.736 961.39 690.176 961.39C690.426 961.39 690.636 961.39 690.996 961.39C691.116 961.39 691.436 961.39 691.706 961.46H692.056L692.546 961.57L692.796 961.63L692.996 961.69L693.566 961.9C694.313 962.226 694.992 962.691 695.566 963.27L699.766 967.56L691.116 976.04L686.996 971.67C687.536 972.236 688.186 972.685 688.906 972.99C689.086 973.07 689.266 973.13 689.446 973.19H689.616L689.806 973.24C689.93 973.281 690.057 973.311 690.186 973.33H690.376C690.476 973.33 690.636 973.33 690.596 973.33C690.556 973.33 690.526 973.33 690.446 973.33H689.696C689.126 973.33 688.506 973.33 687.876 973.33C686.558 973.252 685.248 973.075 683.956 972.8C683.286 972.65 682.616 972.5 681.956 972.31C681.27 972.127 680.601 971.886 679.956 971.59C679.211 971.237 678.512 970.794 677.876 970.27C677.115 969.73 676.452 969.064 675.916 968.3V968.3Z"
        fill={colors.outline}
      />
      <Path
        d="M626.626 869.4C626.436 865.22 626.526 861.04 626.686 856.87C626.846 852.7 627.156 848.51 627.546 844.34C627.746 842.25 627.946 840.16 628.186 838.07C628.426 835.98 628.676 833.89 629.046 831.8C629.737 827.496 630.938 823.29 632.626 819.27C634.32 823.288 635.526 827.495 636.216 831.8C636.576 833.89 636.846 835.98 637.066 838.07C637.286 840.16 637.516 842.25 637.716 844.34C638.106 848.51 638.406 852.69 638.566 856.87C638.726 861.05 638.826 865.22 638.626 869.4H626.626Z"
        fill={colors.outline}
      />
      <Path
        d="M380.426 758.26L613.656 758.16"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M497.036 813.21V1069.39"
        fill="none"
        stroke={colors.outline}
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M416.616 758.8C416.616 758.8 459.886 798.14 491.276 813.61C475.996 838.82 449.146 848 449.146 848L389.716 758.77L416.616 758.8Z"
        fill={colors.clothing.white.base}
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M577.376 758.8C577.376 758.8 537.996 800 502.716 813.61C512.716 833.89 544.846 847.98 544.846 847.98L604.276 758.75L577.376 758.8Z"
        fill={colors.clothing.white.base}
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path d="M635.096 969.06C642.606 968.35 656.606 968.17 669.096 968.39Z" fill="black" />
      <Path
        d="M634.536 963.08C637.463 962.667 640.421 962.51 643.376 962.61C646.276 962.68 649.156 962.91 652.036 963.26C653.466 963.44 654.906 963.63 656.336 963.87C657.779 964.081 659.211 964.365 660.626 964.72C663.646 965.455 666.52 966.696 669.126 968.39C666.482 969.987 663.608 971.167 660.606 971.89C659.196 972.25 657.786 972.52 656.376 972.75C654.966 972.98 653.566 973.22 652.166 973.44C649.366 973.86 646.576 974.22 643.816 974.44C641.056 974.66 638.296 974.94 635.656 974.98L629.656 975.08L628.656 963.95L634.536 963.08Z"
        fill={colors.outline}
      />
      <Path
        d="M312 982H332V974.307C335.343 974.307 341.5 974.418 342 974.418V982H352V974.684C354.833 974.789 359.5 975 360.78 975.1L360.716 990H311.281V974.555L312 974.5V982Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M312 962V962.512L311.281 962.543V886.979C311.281 883.369 311.435 874.264 311.981 865.044V882.012H332.002V861.996H312.159C312.308 859.927 312.676 855.029 312.957 851.99L331.996 852V842H314.039C314.215 840.458 314.75 836.486 315.562 832H332V812H320.39C321.326 809.03 323.509 803.293 324.157 801.997H332V792H329.392C335.543 782.822 338.727 780.191 341.961 777.519L342 777.486L342 781.998H351.999V771.082C353.638 770.25 357.924 768.326 362 767.281V782H382V764.262H386.189L392.003 773.027V782H397.978L417.961 812H412.004V832H431.273L441.996 848.102V852H444.601L446.708 855.175C452.09 853.427 454.567 852.564 462 848.676V852.005H481.998V842.001H472.623C481.998 835.748 489.639 826.382 492 823.22V832.003H494L494.039 841.992H492.006V852.009H494.031V862.011H491.984V882.03H494.046V892.001H492.024V901.992H494.034V912.027H491.995V931.98H494.034V941.971H492.009V951.977H494.034V961.983H491.995V982.009H494.034V989.961L377.25 989.996C377.248 988.049 377.231 983.726 377.175 982.012H381.995V962.04H372.961V951.979H382.034V941.956H372.984V932.03H381.985V912.001H373.081V901.994H381.985V892.004H373.13V881.981H382.001V861.984H373.179C373.222 859.443 373.282 853.887 373.179 851.993H382.026V841.982H372.595C372.406 839.914 371.939 835.584 371.521 831.984H381.998V812.014H361.993V831.984H362.805C361.727 838.571 361.414 844.8 361.109 850.857L361.109 850.86L361.109 850.862C361.073 851.577 361.037 852.29 361 853L360.827 963.056L352 962.66V962H342V962.402C341.729 962.402 340.841 962.392 339.667 962.378L339.654 962.378L339.644 962.378C337.348 962.351 333.978 962.312 332 962.312V962H312ZM312 952V942H332V952H312ZM342 842V852H352V842H342ZM342 882.012V861.996H352V882.012H342ZM342 892V902H352V892H342ZM311.981 902L312 892H332.002L332 902H311.981ZM312 912V932H332V912H312ZM342 932V912H352V932H342ZM342 942V952H352V942H342ZM392.003 831.984V812.014H402V832L392.003 831.984ZM392.003 792V801.997H402V792H392.003ZM361.993 801.997L362 792H381.998L382 801.997H361.993ZM342 792V801.997H352V792H342ZM342 832V812L352 812.014V831.984L342 832ZM392 861.984V881.981H402V861.984H392ZM412 881.981V861.984H432V881.981H412ZM392 841.982V852H402V841.982H392ZM412 851.993V841.982H432V851.993H412ZM441.996 861.984V881.981H452V861.984H441.996ZM462 881.981V862.011H481.998V881.981H462ZM462 892V902H481.998V892H462ZM441.996 902V892H452V902H441.996ZM392 892V901.994H402V892.004L392 892ZM412 902V892.004L432 892V901.994L412 902ZM412 912.001V932.03H432V912.001H412ZM392 932.03V912.001H402V932.03H392ZM441.996 912V932H452V912H441.996ZM462 932V912H481.998V932H462ZM392 941.956V951.979H402V941.956H392ZM412 951.979V941.956H432V951.979H412ZM412 962.04V982.012H432V962.04H412ZM392 982.012V962.04H402V982.012H392ZM442 941.956V951.977H452V941.971L442 941.956ZM462 951.977V941.956H482V951.977H462ZM462 962.04V982.009L482 982.012V962.04H462ZM442 982.009V961.983L452 962.04V982.012L442 982.009Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M682.046 981.998H662.046V971.51C658.134 972.613 653.538 973.204 652.046 973.448V981.998H642.046V974.587C640.508 974.712 640.073 974.741 638.793 974.841L638.792 989.998H682.738V972.52L682.046 972.343V981.998Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M682.046 963.367V961.998H662.046V965.101C658.565 964.119 653.929 963.461 652.046 963.255V961.998H642.046V962.546L638.792 962.642L638.736 864.012C638.699 863.302 638.772 864.727 638.736 864.012C638.103 838.635 635.823 825.885 632.622 819.275L632.053 820.697V812.012H612.048V831.983H629.011C628.378 835.86 627.952 839.912 627.763 841.98H612.02V851.991H626.955C626.744 855.102 626.537 859.566 626.537 861.982H612.044V881.979H626.69V892.002H612.061V901.992H626.757V911.999H612.061V932.029H626.757V941.954H612.012V951.977H626.742V962.039H612.051V982.011H622.621C622.565 983.724 622.623 988.047 622.621 989.994L500.012 989.959V982.007H502.051V961.981H500.012V951.975H502.037V941.97H500.012V931.978H502.051V912.026H500.012V901.99H502.022V891.999H500V882.028H502.062V862.01H500.015V852.007H502.04V841.99H500.007L500.046 832.002H502.046L501.995 823.729C506.175 828.959 511.084 834.315 522.02 841.999H512.048V852.003H532.046V848.198C539.479 852.086 541.825 853.235 547.065 855.504L549.445 851.998H552.05V848.1L562.773 831.998H582.042V811.998H576.085L596.068 781.998H602.043V773.025L607.857 764.26H612.046V781.998H632.046V766.797C636.122 767.842 640.03 769.44 642.047 770.397V781.996H652.046L652.046 776.523C652.052 776.529 652.062 776.536 652.072 776.543L652.098 776.562C655.332 779.234 659.869 782.871 665.469 791.998H662.046V801.995H670.501C671.149 803.291 673.16 808.795 674.109 811.998H662.046V831.998H678.684C679.562 837.32 679.906 840.434 680.109 841.998H662.05V851.998L681.088 851.989C681.369 855.027 681.738 859.925 681.887 861.994H662.044V882.011H682.065V865.042C682.495 874.279 682.444 878.504 682.691 886.977L682.737 963.078L682.046 963.367ZM682.046 951.998V941.998H662.046V951.998H682.046ZM682.046 931.998V911.998H662.046V931.998H682.046ZM652.046 931.998V911.998H642.046V931.998H652.046ZM652.046 951.998V941.998H642.046V951.998H652.046ZM652.046 901.998V891.998H642.046V901.998H652.046ZM682.065 901.998L682.046 891.998H662.044L662.046 901.998H682.065ZM652.046 882.011V861.994H642.046V882.011H652.046ZM652.046 851.998V841.998H642.046V851.998H652.046ZM652.046 831.998V811.998L642.046 812.012V831.983L652.046 831.998ZM652.046 801.995V791.998H642.046V801.995H652.046ZM632.053 801.995L632.046 791.998H612.048L612.046 801.995H632.053ZM602.043 801.995V791.998H592.046V801.995H602.043ZM602.043 831.983V812.012H592.046V831.998L602.043 831.983ZM602.046 851.998V841.98H592.046V851.998H602.046ZM582.046 851.991V841.98H562.046V851.991H582.046ZM602.046 881.979V861.982H592.046V881.979H602.046ZM582.046 881.979V861.982H562.046V881.979H582.046ZM552.05 881.979V861.982H542.046V881.979H552.05ZM532.046 881.979V862.01H512.048V881.979H532.046ZM532.046 901.998V891.998H512.048V901.998H532.046ZM552.05 901.998V891.998H542.046V901.998H552.05ZM602.046 901.992V891.998L592.046 892.002V901.992H602.046ZM582.046 901.998V892.002L562.046 891.998V901.992L582.046 901.998ZM602.046 932.029V911.999H592.046V932.029H602.046ZM582.046 932.029V911.999H562.046V932.029H582.046ZM552.05 931.998V911.998H542.046V931.998H552.05ZM532.046 931.998V911.998H512.048V931.998H532.046ZM602.046 951.977V941.954H592.046V951.977H602.046ZM582.046 951.977V941.954H562.046V951.977H582.046ZM602.046 982.011V962.039H592.046V982.011H602.046ZM582.046 982.011V962.039H562.046V982.011H582.046ZM552.046 951.975V941.954L542.046 941.97V951.975H552.046ZM552.046 982.007V961.981L542.046 962.039V982.011L552.046 982.007ZM532.046 951.975V941.954H512.046V951.975H532.046ZM532.046 982.007V962.039H512.046V982.011L532.046 982.007Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M541.242 830.394L546.107 835.296L551.747 826.829L548.283 823.378L562.412 809.202L563.069 809.834L593.083 764.781H588.716L590.679 766.796L576.556 780.919L569.976 774.357L562.549 781.071L569.456 788.014L562.421 795.049L555.365 787.974L560.348 782.979C554.724 788.141 537.2 803.091 514.012 815.177L512.912 816.271L512.529 815.889L511.492 816.391C516.771 823.241 523.821 828.881 535.388 836.21L541.242 830.394ZM526.998 830.414L519.971 823.386L527.088 816.268L534.134 823.386L526.998 830.414ZM555.309 802.184L548.286 795.049L534.129 809.263L541.208 816.285L555.309 802.184Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M459.56 836.198C458.387 836.939 453.618 839.404 451.381 840.545L426.382 803.059L428.771 805.39L435.85 798.368L428.742 791.288L422.658 797.401L416.971 788.956L421.691 784.18L407.588 770.077L405.655 771.897L400.968 764.759H414.341C422.963 772.384 432.725 780.467 436.528 783.556L435.827 784.21L442.922 791.244L444.412 789.776L452.409 795.845L449.999 798.364L464.15 812.478L469.05 807.525L477.718 812.998L471.185 819.582L475.507 823.903C473.778 825.776 469.797 829.073 468.022 830.488L464.164 826.63L457.091 833.703L459.56 836.198ZM449.957 826.647L435.81 812.5L442.942 805.426L457.06 819.544L449.957 826.647Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M381.999 801.997H392.001V812.014H381.997L381.999 801.997Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path d="M411.299 802L401.999 801.997V812.014L412.002 812V803.056L411.299 802Z" fill={base} fillOpacity="0.37" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M311.28 962H311.999V952L311.28 952V962ZM331.999 952V962H341.999V952H331.999ZM311.999 932V942H311.28V932H311.999ZM351.999 962H360.827L360.842 952H351.999V962ZM341.999 942H331.999V932H341.999V942ZM360.858 942L360.874 932H351.999V942H360.858ZM311.999 912L311.98 902H311.28V912H311.999ZM360.906 912H351.999V902H360.921L360.906 912ZM341.999 912V902H331.999V912H341.999ZM360.937 892H351.999V882.012H360.953L360.937 892ZM341.999 892H332.001V882.012H341.999V892ZM311.28 892V886.979C311.28 885.826 311.295 884.112 311.335 882.012H311.98L311.999 892H311.28ZM360.984 861.996L360.999 853C361.016 852.667 361.033 852.334 361.05 852H351.999V861.996H360.984ZM341.999 861.996V852H331.995L332.001 861.996H341.999ZM341.999 842V832H331.999L331.995 842H341.999ZM361.636 842H351.999V831.984H361.991V838.086C361.852 839.403 361.736 840.707 361.636 842ZM341.999 812H331.999V801.997H341.999V812ZM361.991 801.997V812.014H351.999V801.997H361.991Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M312 990L311.998 982H311.28V990L312 990ZM341.998 990L331.998 990V982H341.998V990ZM351.998 982L351.999 990L360.715 990L360.749 982H351.998Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M455.257 852.005H461.999V862.011L451.999 861.984V853.357C453.043 852.96 454.092 852.528 455.257 852.005Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path d="M451.999 951.977V962.04H461.999V951.977H451.999Z" fill={base} fillOpacity="0.37" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M331.999 792V788.248C333.986 785.504 335.624 783.536 337.068 781.998H341.999V792H331.999ZM351.999 792L351.998 781.998L361.999 782V792H351.999ZM401.999 832H412.002L411.999 841.981H401.999V832ZM401.999 861.984V852L411.999 851.993V861.984H401.999ZM411.999 881.981H401.999V892.004H411.999V881.981ZM401.999 901.994V912.001H411.999V902L401.999 901.994ZM391.999 941.956V932.03H381.984L382.032 941.956H391.999ZM382.032 951.979L381.994 962.04H391.999V951.979H382.032ZM381.994 989.995L391.999 989.992V982.012H381.994V989.995ZM401.999 982.012V989.989L411.999 989.986V982.012H401.999ZM441.999 989.977L431.999 989.98V982.012L441.999 982.009V989.977ZM451.999 989.974L462.149 989.97L461.999 982.009L451.999 982.012V989.974ZM491.993 989.961L481.999 989.964V982.012L491.993 982.009V989.961ZM411.999 951.979V962.04H401.999V951.979H411.999ZM431.999 962.04L441.999 961.983V951.977L431.999 951.979V962.04ZM491.993 961.983L492.008 951.977H481.999V962.04L491.993 961.983ZM401.999 941.956H411.999V932.03H401.999V941.956ZM492.008 941.971L491.993 931.98L481.996 932L481.999 941.956L492.008 941.971ZM441.995 932L441.999 941.956H431.999V932.03L441.995 932ZM451.999 941.971L461.999 941.956V932H451.999V941.971ZM381.984 912.001H391.999V901.994H381.984V912.001ZM431.999 912.001L441.995 912V902L431.999 901.994V912.001ZM451.999 912H461.999V902H451.999V912ZM491.993 912.027L492.022 901.992L481.996 902V912L491.993 912.027ZM492.022 892.001L491.983 882.03L481.996 881.981V892L492.022 892.001ZM451.999 881.981H461.999V892H451.999V881.981ZM492.004 852.009L491.983 862.011H481.996V852.005L492.004 852.009ZM481.996 842.001L492.004 841.992L491.999 832.003H484.406C483.643 832.786 482.838 833.585 481.996 834.387V842.001ZM391.999 881.981V892L381.984 892.004L382 881.981H391.999ZM441.995 892V881.981H431.999V892H441.995ZM441.995 852L431.999 851.993V861.984H441.995V852ZM391.999 861.984H382L382.025 851.993L391.999 852V861.984ZM391.999 841.981L392.001 831.984H381.997L382.025 841.981H391.999ZM437.919 841.981L431.999 833.092V841.981H437.919ZM404.638 792H401.999V788.038L404.638 792ZM392.001 792V782H381.999L381.997 792H392.001Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M662.045 981.998V989.998H652.044L652.045 981.998H662.045ZM682.044 989.998H682.737V982.011L682.045 981.998L682.044 989.998ZM638.791 982.011L642.045 981.998V989.998H638.791L638.791 982.011Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M662.044 901.998V911.998H652.044V901.998H662.044Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M682.044 963.367V961.998V951.998H682.729L682.735 961.998L682.736 963.078L682.044 963.367ZM682.723 941.998H682.044V931.998H682.717L682.723 941.998ZM682.705 911.998L682.699 901.998H682.063L682.044 911.998H682.705ZM682.69 886.977L682.693 891.998H682.044L682.063 882.011H682.564C682.597 883.531 682.637 885.156 682.69 886.977ZM662.042 882.011H652.044V891.998H662.042V882.011ZM642.044 882.011V891.998H638.75L638.745 882.011H642.044ZM662.042 861.994L662.048 851.998H652.044V861.994H662.042ZM652.044 841.998H662.048L662.044 831.998H652.044V841.998ZM662.044 811.998H652.044V801.995H662.044V811.998ZM632.052 801.995H642.044V812.012H632.052V801.995ZM612.044 801.995L612.046 812.012H602.042V801.995H612.044ZM602.042 831.983L602.044 841.98H612.018L612.046 831.983H602.042ZM612.018 851.991L602.044 851.998V861.982H612.043L612.018 851.991ZM612.043 881.979H602.044V891.998L612.059 892.002L612.043 881.979ZM612.059 901.992H602.044V911.999H612.059V901.992ZM592.044 881.979V892.002H582.044V881.979H592.044ZM582.044 901.998V911.999H592.044V901.992L582.044 901.998ZM562.044 901.992V911.999L552.048 911.998V901.998L562.044 901.992ZM562.044 891.998V881.979H552.048V891.998H562.044ZM542.044 911.998V901.998H532.044V911.998H542.044ZM512.047 931.978V931.998L512.044 941.954L502.035 941.97L502.05 931.978H512.047ZM502.05 961.981L502.035 951.975H512.044V962.039L502.05 961.981ZM512.044 982.011V989.963L502.035 989.96L502.05 982.007L512.044 982.011ZM512.047 911.998L502.05 912.026L502.021 901.99L512.047 901.998V911.998ZM512.047 891.998L502.021 891.999L502.06 882.028L512.047 881.979V891.998ZM532.044 989.968L542.044 989.971V982.011L532.044 982.007V989.968ZM532.044 962.039V951.975H542.044V962.039H532.044ZM542.044 931.998V941.97L532.044 941.954V931.998H542.044ZM542.044 881.979V891.998H532.044V881.979H542.044ZM552.048 931.998L552.044 941.954H562.044V932.029L552.048 931.998ZM552.044 951.975V961.981L562.044 962.039V951.977L552.044 951.975ZM552.044 989.974V982.007L562.044 982.011V989.977L552.044 989.974ZM582.044 989.983V982.011H592.044V989.986L582.044 989.983ZM592.044 951.977V962.039H582.044V951.977H592.044ZM592.044 932.029V941.954H582.044V932.029H592.044ZM612.059 932.029H602.044V941.954H612.011L612.059 932.029ZM612.011 951.977H602.044V962.039H612.049L612.011 951.977ZM612.049 989.991V982.011H602.044V989.988L612.049 989.991ZM512.047 852.003V862.01H502.06L502.039 852.007L512.047 852.003ZM542.044 853.355V861.982L532.044 862.01V852.003H538.786C539.951 852.526 541 852.958 542.044 853.355ZM562.044 851.991V861.982H552.048V851.998L562.044 851.991ZM592.044 851.998V861.982H582.044V851.991L592.044 851.998ZM556.124 841.98L562.044 833.09V841.98H556.124ZM592.044 831.998V841.98H582.044L582.041 831.998H592.044ZM512.047 834.3V841.99H502.039V832.001H502.044H509.512C510.311 832.765 511.16 833.533 512.047 834.3ZM592.044 812.012V801.995H582.747L582.041 803.055V811.998L592.044 812.012ZM602.042 791.998H612.046L612.044 781.998H602.042V791.998ZM632.044 781.998V791.998H642.044L642.045 781.996L632.044 781.998ZM589.405 791.998L592.044 788.036V791.998H589.405ZM642.044 831.983V841.998H637.522C637.155 838.193 636.721 834.882 636.229 831.998L642.044 831.983ZM652.044 791.998H662.044L662.132 787C660.672 785.001 659.301 783.368 658.025 781.998L652.044 781.996V791.998ZM642.044 851.998H638.265C638.436 855.081 638.575 858.406 638.68 861.994H642.044V851.998ZM662.044 931.998V941.998H652.044V931.998H662.044ZM642.044 901.998V911.998H638.762L638.756 901.998H642.044ZM638.773 931.998L638.779 941.998H642.044V931.998H638.773ZM652.044 951.998H662.044V961.998H652.044V951.998ZM638.785 951.998L638.79 961.998H642.044V951.998H638.785Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M512.054 817.221L512.894 816.269L519.948 823.304L518.959 824.387C517.379 822.944 513.786 819.49 512.054 817.221Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M521.819 811.026L527.09 816.297L534.129 809.209L530.545 805.609C528.209 807.112 523.195 810.299 521.819 811.026Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M534.145 823.363L541.198 830.378L548.28 823.368L541.252 816.268L534.145 823.363Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M555.329 802.112L562.464 809.227L565.537 806.069L568.715 801.376L562.464 795.061L555.329 802.112Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M547.053 793.844L548.247 795.039L555.347 788.01L554.925 787.553C552.594 789.434 547.755 793.324 547.053 793.844Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M592.719 764.762L590.688 766.779L591.324 767.375L593.085 764.762H592.719Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M569.49 787.974L574.333 792.912L580.03 784.413L576.588 780.924L569.49 787.974Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M457.077 819.587L464.133 826.622L471.23 819.587L464.133 812.491L457.077 819.587Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M450.887 839.81L457.101 833.686L449.971 826.622L445.21 831.383L450.887 839.81Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M428.287 805.923L428.791 805.419L435.846 812.451L433.962 814.401L428.287 805.923Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M435.845 798.363L442.867 791.212L449.966 798.363L442.867 805.384L435.845 798.363Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path
        d="M421.669 784.207L428.799 791.315L435.799 784.207L429.295 777.658L428.724 777.176L421.669 784.207Z"
        fill={base}
        fillOpacity="0.37"
      />
      <Path d="M402.278 764.779L407.571 770.072L412.845 764.779H402.278Z" fill={base} fillOpacity="0.37" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M596 990.051V782.011L598 778.987V990.051H596Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M396 989.952V779.041L398 782.017V989.952H396Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M646 974.245V990.037H648V974.022L646 974.245ZM648 962.842V773.64C647.681 773.424 646.534 772.747 646 772.435V962.731L648 962.842Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M348 962.543V773.27C347.638 773.476 346.516 774.208 346 774.548V962.501L348 962.543ZM346 974.486V989.985H348V974.55L346 974.486Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M360.891 946H311.283V948H360.891V946ZM372.939 948H494.054V946H372.939V948ZM500.022 948H626.748V946H500.022V948ZM682.734 948H638.798V946H682.734V948Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M361.116 896H311.28V898H361.116V896ZM373.121 898H494.036V896H373.121V898ZM500.019 898H626.732V896H500.019V898ZM682.741 898H638.734V896H682.741V898Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M494.02 846H466.61L463.194 848H494.02V846ZM500.065 848H531.783L528.362 846H500.065V848ZM448 989.984V854.735L446.709 855.176L446 854.102V989.984H448ZM372.906 846H440.616L441.938 848H373.017L372.906 846ZM361.275 848L361.386 846H313.548C313.484 846.563 313.352 847.751 313.339 848H361.275ZM408.63 798H326.034C326.418 797.23 326.896 796.346 327.088 796H407.288L408.63 798ZM553.38 846H627.398L627.239 848H552.037L553.38 846ZM680.773 848H638.022L637.852 846H680.566L680.773 848ZM546 990.051V855.037L547.054 855.499L548 854.078V990.051H546ZM585.329 798L586.675 796H667.716L668.715 798H585.329Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M525.639 823.35L527.056 821.933L518.161 813.03L516.3 814.01L525.639 823.35Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M528.469 823.348L527.053 824.764L542.419 840.131L542.754 840.292L543.806 838.7L528.469 823.348Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M527.056 821.933L525.639 823.35L527.053 824.764L528.469 823.348L527.056 821.933Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M563.795 788.03L562.387 789.438L570.99 797.964L572.097 796.294L563.795 788.03Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M560.964 788.028L562.376 786.617L559.451 783.706L557.897 784.988L560.964 788.028Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M521.996 826.992L523.578 828.238L527.053 824.764L525.639 823.35L521.996 826.992ZM562.387 789.438L528.469 823.348L527.056 821.933L560.964 788.028L562.387 789.438ZM563.795 788.03L587.036 764.794H584.201L562.376 786.617L563.795 788.03Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M562.387 789.438L563.795 788.03L562.376 786.617L560.964 788.028L562.387 789.438Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M463.073 834.033L464.745 832.896L464.159 832.311L462.757 833.717L463.073 834.033Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M482.528 815.801L481.294 815.133L464.159 832.311L464.745 832.896C472.886 827.186 479.172 820.282 482.528 815.801Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M461.334 835.143C461.922 834.781 462.502 834.41 463.073 834.033L462.757 833.717L461.334 835.143Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M428.746 796.975L430.175 798.402L441.276 787.348L439.641 786.033L428.746 796.975Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M428.78 799.791L427.357 798.37L424.922 800.816L426.044 802.516L428.78 799.791Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M464.159 832.311L462.757 833.717L428.78 799.791L430.175 798.402L464.159 832.311ZM428.746 796.975L409.721 777.992L415.316 786.348L427.357 798.37L428.746 796.975Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M430.175 798.402L428.746 796.975L427.357 798.37L428.78 799.791L430.175 798.402Z"
        fill={base}
        fillOpacity="0.17"
      />
      <Path
        d="M512.766 987.73C515.417 987.73 517.566 985.581 517.566 982.93C517.566 980.279 515.417 978.13 512.766 978.13C510.115 978.13 507.966 980.279 507.966 982.93C507.966 985.581 510.115 987.73 512.766 987.73Z"
        fill={colors.outline}
      />
      <Path
        d="M512.77 961.6C515.421 961.6 517.57 959.451 517.57 956.8C517.57 954.149 515.421 952 512.77 952C510.119 952 507.97 954.149 507.97 956.8C507.97 959.451 510.119 961.6 512.77 961.6Z"
        fill={colors.outline}
      />
      <Path
        d="M512.8 934.6C515.451 934.6 517.6 932.451 517.6 929.8C517.6 927.149 515.451 925 512.8 925C510.149 925 508 927.149 508 929.8C508 932.451 510.149 934.6 512.8 934.6Z"
        fill={colors.outline}
      />
      <Path
        d="M512.8 907.6C515.451 907.6 517.6 905.451 517.6 902.8C517.6 900.149 515.451 898 512.8 898C510.149 898 508 900.149 508 902.8C508 905.451 510.149 907.6 512.8 907.6Z"
        fill={colors.outline}
      />
      <Path
        d="M512.8 880.6C515.451 880.6 517.6 878.451 517.6 875.8C517.6 873.149 515.451 871 512.8 871C510.149 871 508 873.149 508 875.8C508 878.451 510.149 880.6 512.8 880.6Z"
        fill={colors.outline}
      />
      <Path
        d="M512.8 853.6C515.451 853.6 517.6 851.451 517.6 848.8C517.6 846.149 515.451 844 512.8 844C510.149 844 508 846.149 508 848.8C508 851.451 510.149 853.6 512.8 853.6Z"
        fill={colors.outline}
      />
    </G>
  )
}
