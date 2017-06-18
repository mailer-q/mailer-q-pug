const fs = require("fs");
const path = require("path");
const pug = require("pug");

const MailerQRenderer = (dirPath) => {
    return (templateFileName, vars) => {
        const templateString = fs.readFileSync(path.join(dirPath, templateFileName), "utf8");

        const templateFunc = pug.compile(templateString);

        return templateFunc(vars);
    }
}

module.exports = MailerQRenderer;
