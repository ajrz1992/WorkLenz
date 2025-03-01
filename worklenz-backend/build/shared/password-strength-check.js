"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordStrengthChecker = void 0;
class PasswordStrengthChecker {
    static defaultOptions = [
        {
            value: 0,
            text: "Too weak",
            minDiversity: 0,
            minLength: 0
        },
        {
            value: 1,
            text: "Weak",
            minDiversity: 2,
            minLength: 6
        },
        {
            value: 2,
            text: "Strong",
            minDiversity: 4,
            minLength: 8
        },
        {
            value: 3,
            text: "Excellent",
            minDiversity: 4,
            minLength: 10
        }
    ];
    static defaultAllowedSymbols = "!\"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\\\\]\^_`\{|\}~";
    static validate(password, options = this.defaultOptions, allowedSymbols = this.defaultAllowedSymbols) {
        const passwordCopy = password || "";
        options[0].minDiversity = 0;
        options[0].minLength = 0;
        const rules = [
            {
                regex: "[a-z]",
                message: "lowercase"
            },
            {
                regex: "[A-Z]",
                message: "uppercase"
            },
            {
                regex: "[0-9]",
                message: "number"
            },
        ];
        if (allowedSymbols) {
            rules.push({
                regex: `[${allowedSymbols}]`,
                message: "symbol"
            });
        }
        const strength = {};
        strength.contains = rules
            .filter(rule => new RegExp(`${rule.regex}`).test(passwordCopy))
            .map(rule => rule.message);
        strength.length = passwordCopy.length;
        const fulfilledOptions = options
            .filter(option => strength.contains.length >= option.minDiversity)
            .filter(option => strength.length >= option.minLength)
            .sort((o1, o2) => o2.value - o1.value)
            .map(option => ({ value: option.value, text: option.text }));
        Object.assign(strength, fulfilledOptions[0]);
        return strength;
    }
}
exports.PasswordStrengthChecker = PasswordStrengthChecker;
