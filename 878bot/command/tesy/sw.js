module.exports = {
name: "sw",
code: `$sendWebhook[$message[1];$replaceText[$message[];$message[1];]]`}