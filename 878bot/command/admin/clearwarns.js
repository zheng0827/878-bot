module.exports ={
  name:"clearwarns",
  code:`
$setUserVar[warn counter;0;$mentioned[1]]
你成功清除 <@$mentioned[1]> 的所有警告!
$onlyAdmin[\`你不是管理員\`]
$onlyIf[$getVar[Blacklist;$authorID]==0;\`你被加入黑名單,請聯絡 zheng878#4893!\`]
$cooldown[3s;\`請等等三秒\`]
$onlyIf[$mentioned[1]!=;\`名稱是空的\`]
$onlyIf[$mentioned[1]!=$authorID;\`你不能清除警告自己\`]`}