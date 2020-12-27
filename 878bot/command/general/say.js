module.exports = {
  name: "say",
  code: `$deletecommand[1ms]
$replaceText[$replaceText[$message[];@everyone;@ everyone];@here; @ here]`}