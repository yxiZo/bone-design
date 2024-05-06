import postcssRTLCSS from 'postcss-rtlcss';
import { Mode, Source } from 'postcss-rtlcss/options';

const defaultOptions = {
    mode: Mode.combined,
    ignorePrefixedRules: true,
    ltrPrefix: '[dir="ltr"]',
    rtlPrefix: '[dir="rtl"]',
    bothPrefix: '[dir]',
};
const options = {
    ...defaultOptions,
    safeBothPrefix: true,
    processUrls: true,
    processKeyFrames: true,
    useCalc: true,
};

export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
}
