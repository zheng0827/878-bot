module.exports = {
name: "number",
code: `
<@$authorID>,你答對了！
加50元
$setUserVar[money;$sum[50;$getUserVar[money]];$authorID]
$onlyIf[$message[]==$random[1;10];{execute:nummber}]
$setUserVar[number;$random[1;10]]
$cooldown[1m;還有{time}]
$onlyIf[$message[]<=10;不能超過十]
$onlyIf[$message[]>=1;不能低於1]`}

