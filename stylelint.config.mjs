/**
 * @type {import("stylelint").Config}
 */
const stylelintConfig = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html/astro"],
  rules: {
    "declaration-empty-line-before": null,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    "media-feature-range-notation": "context",
    "rule-empty-line-before": null,
    "scss/dollar-variable-empty-line-before": null,
    "selector-pseudo-class-no-unknown": null
  }
};

export default stylelintConfig;
