module.exports = {
  name:"av",
  code:`$description[**<@$authorID>的頭像**]
$image[$replaceText[$userAvatar[$authorID];size=128;size=4096]]
$onlyIf[$message[]==;{execute:av}]`}
  
