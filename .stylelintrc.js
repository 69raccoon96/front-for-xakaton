module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
    rules: {
        'declaration-no-important': true,
        'declaration-property-unit-disallowed-list': {
            'line-height': ['px', 'em', 'rem', '%'],
        },
        'property-no-vendor-prefix': [true, { ignoreProperties: ['appearance'] }],
    },
};
