/**
 * Internal dependencies
 */
import { space } from '../ui/utils/space';

const CONTROL_HEIGHT = '30px';
const CARD_PADDING_X = space( 3 );
const CARD_PADDING_Y = space( 3 );

export default {
	colorDivider: 'rgba(0, 0, 0, 0.1)',
	colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
	colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
	colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
	radiusBlockUi: '2px',
	borderWidth: '1px',
	borderWidthFocus: '1.5px',
	borderWidthTab: '4px',
	spinnerSize: '18px',
	fontSize: '13px',
	fontSizeH1: 'calc(2.44 * 13px)',
	fontSizeH2: 'calc(1.95 * 13px)',
	fontSizeH3: 'calc(1.56 * 13px)',
	fontSizeH4: 'calc(1.25 * 13px)',
	fontSizeH5: '13px',
	fontSizeH6: 'calc(0.8 * 13px)',
	fontSizeInputMobile: '16px',
	fontSizeMobile: '15px',
	fontSizeSmall: 'calc(0.92 * 13px)',
	fontSizeXSmall: 'calc(0.75 * 13px)',
	fontLineHeightBase: '1.2',
	fontWeight: 'normal',
	fontWeightHeading: '600',
	gridBase: '4px',
	controlHeight: CONTROL_HEIGHT,
	controlHeightLarge: `calc( ${ CONTROL_HEIGHT } * 1.2 )`,
	controlHeightSmall: `calc( ${ CONTROL_HEIGHT } * 0.8 )`,
	controlHeightXSmall: `calc( ${ CONTROL_HEIGHT } * 0.6 )`,
	cardBorderRadius: '2px',
	cardPaddingX: CARD_PADDING_X,
	cardPaddingY: CARD_PADDING_Y,
	cardPadding: `${ CARD_PADDING_X } ${ CARD_PADDING_Y }`,
	cardHeaderFooterPaddingY: space( 1 ),
	cardHeaderHeight: '44px',
	surfaceBorderColor: 'rgba(0, 0, 0, 0.1)',
	transitionDuration: '200ms',
	transitionDurationFast: '160ms',
	transitionDurationFaster: '120ms',
	transitionDurationFastest: '100ms',
	transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
	transitionTimingFunctionControl: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
};
