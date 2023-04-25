module.exports = {
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    trailingComma: "all",
    proseWrap: "never",
    arrowParens: "always",
    htmlWhitespaceSensitivity: "strict",
    overrides: [
        {
            files: [
                "*.json",
                "*.md",
                "*.yaml",
                "*.yml"
            ],
            options: {
                tabWidth: 2
            }
        },
    ]
};
