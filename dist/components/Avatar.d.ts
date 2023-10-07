import React from 'react';
import { colors } from 'theme';
import * as LongHair from '../components/hair/LongHair';
import * as BunHair from '../components/hair/BunHair';
import * as ShortHair from '../components/hair/ShortHair';
import * as PixieCut from '../components/hair/PixieCut';
import * as BaldingHair from '../components/hair/BaldingHair';
import * as BuzzCut from '../components/hair/BuzzCut';
import * as Afro from '../components/hair/Afro';
import * as BobCut from '../components/hair/BobCut';
import * as Beanie from '../components/hats/Beanie';
import * as Turban from '../components/hats/Turban';
import * as Chest from '../components/bodies/Chest';
import * as Breasts from '../components/bodies/Breasts';
import * as Dress from './clothing/Dress';
import { ViewProps, ViewStyle } from 'react-native';
import * as ChequeredShirt from './clothing/ChequeredShirt';
import * as ChequeredShirtDark from './clothing/ChequeredShirtDark';
import * as Mohawk from './hair/Mohawk';
import * as Party from './hats/Party';
import * as Hijab from './hats/Hijab';
import { Svg, SvgProps } from 'react-native-svg';
export declare const eyesMap: {
    normal: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    leftTwitch: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    happy: () => React.JSX.Element;
    content: () => React.JSX.Element;
    squint: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    simple: () => React.JSX.Element;
    dizzy: () => React.JSX.Element;
    wink: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    hearts: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    crazy: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    cute: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    dollars: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    stars: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    cyborg: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    simplePatch: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
    piratePatch: ({ withLashes }: import("./eyes/types").EyeProps) => React.JSX.Element;
};
export declare const eyebrowsMap: {
    raised: () => React.JSX.Element;
    leftLowered: () => React.JSX.Element;
    serious: () => React.JSX.Element;
    angry: () => React.JSX.Element;
    concerned: () => React.JSX.Element;
};
export declare const mouthsMap: {
    grin: () => React.JSX.Element;
    sad: () => React.JSX.Element;
    openSmile: () => React.JSX.Element;
    lips: ({ lipColor }: import("./mouths/types").MouthProps) => React.JSX.Element;
    open: () => React.JSX.Element;
    serious: () => React.JSX.Element;
    tongue: () => React.JSX.Element;
    piercedTongue: () => React.JSX.Element;
    vomitingRainbow: () => React.JSX.Element;
};
export declare const hairMap: {
    none: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    long: typeof LongHair;
    bun: typeof BunHair;
    short: typeof ShortHair;
    pixie: typeof PixieCut;
    balding: typeof BaldingHair;
    buzz: typeof BuzzCut;
    afro: typeof Afro;
    bob: typeof BobCut;
    mohawk: typeof Mohawk;
};
export declare const facialHairMap: {
    none: () => React.JSX.Element;
    none2: () => React.JSX.Element;
    none3: () => React.JSX.Element;
    stubble: () => React.JSX.Element;
    mediumBeard: ({ color }: import("./facialHair/types").FacialHairProps) => React.JSX.Element;
    goatee: ({ color }: import("./facialHair/types").FacialHairProps) => React.JSX.Element;
};
export declare const clothingMap: {
    naked: {
        Back: () => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    shirt: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    dressShirt: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    vneck: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    tankTop: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    dress: typeof Dress;
    denimJacket: {
        Back: ({ color }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    hoodie: {
        Back: ({ color }: import("./clothing/types").ClothingProps) => React.JSX.Element;
        Front: () => React.JSX.Element;
    };
    chequeredShirt: typeof ChequeredShirt;
    chequeredShirtDark: typeof ChequeredShirtDark;
};
export declare const accessoryMap: {
    none: () => React.JSX.Element;
    roundGlasses: () => React.JSX.Element;
    tinyGlasses: () => React.JSX.Element;
    shades: () => React.JSX.Element;
    faceMask: () => React.JSX.Element;
    hoopEarrings: () => React.JSX.Element;
};
export declare const graphicsMap: {
    none: () => React.JSX.Element;
    redwood: () => React.JSX.Element;
    gatsby: () => React.JSX.Element;
    vue: () => React.JSX.Element;
    react: () => React.JSX.Element;
    graphQL: () => React.JSX.Element;
    donut: () => React.JSX.Element;
    rainbow: () => React.JSX.Element;
};
export declare const hatMap: {
    none: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    none2: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    none3: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    none4: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    none5: {
        Front: () => React.JSX.Element;
        Back: () => React.JSX.Element;
    };
    beanie: typeof Beanie;
    turban: typeof Turban;
    party: typeof Party;
    hijab: typeof Hijab;
};
export declare const bodyMap: {
    chest: typeof Chest;
    breasts: typeof Breasts;
};
export declare const bgShapeMap: {
    circle: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => React.JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => React.JSX.Element;
    };
    square: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => React.JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => React.JSX.Element;
    };
    squircle: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => React.JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => React.JSX.Element;
    };
};
export interface AvatarProps extends SvgProps {
    skinTone?: keyof typeof colors.skin;
    eyes?: keyof typeof eyesMap;
    eyebrows?: keyof typeof eyebrowsMap;
    mouth?: keyof typeof mouthsMap;
    hair?: keyof typeof hairMap;
    facialHair?: keyof typeof facialHairMap;
    clothing?: keyof typeof clothingMap;
    accessory?: keyof typeof accessoryMap;
    graphic?: keyof typeof graphicsMap;
    hat?: keyof typeof hatMap;
    body?: keyof typeof bodyMap;
    hairColor?: keyof typeof colors.hair;
    clothingColor?: keyof typeof colors.clothing;
    bgShape?: keyof typeof bgShapeMap;
    bgColor?: keyof typeof colors.bgColors;
    lipColor?: keyof typeof colors.lipColors;
    hatColor?: keyof typeof colors.clothing;
    showBackground?: boolean;
    lashes?: boolean;
    size?: number;
    containerStyles?: ViewStyle;
    containerProps?: ViewProps;
    svgRef?: React.Ref<Svg>;
}
export declare const Avatar: ({ skinTone, eyes, eyebrows, mouth, hair, facialHair, clothing, accessory, graphic, hat, body, hairColor, clothingColor, bgShape, bgColor, lipColor, hatColor, showBackground, lashes, size, containerStyles, containerProps, svgRef, ...rest }: AvatarProps) => React.JSX.Element;
