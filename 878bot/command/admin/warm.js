module.exports ={
  name:"warn",
  code:`
$title[警告Warn]
$color[FF0000]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$footer[你被 $username[$authorID] 警告]
$description[<@$mentioned[1]>被 <@$authorID> 警告
原因: \`$noMentionMessage[]\`
現在的警告次數是 \`$sum[$getUserVar[warn;$mentioned[1]];1]\`次警告]
$onlyIf[$mentioned[1]!=$authorID;\`你不能警告自己 You can't warn yourself\`]
$onlyAdmin[\`你不是管理員 You are not admin\`]`}