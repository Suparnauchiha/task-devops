export default[

    {
        files: ['**/*.js'], //only check js file in server directory
        rules:{ 
            semi: 'error', //force semicolons
            'no-unused-vars': 'warn' }, //warn if variables are unused
    },
];
