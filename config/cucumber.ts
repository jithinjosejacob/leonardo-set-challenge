module.exports = {
    default: {
        tags: process.env.TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "tests/"
        ],
        dryRun: false,
        require: [
            "steps/*.ts",
            "config/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-logs/cucumber-report.html",
            "json:test-logs/cucumber-report.json",
        ],
        parallel: 1
    }
}