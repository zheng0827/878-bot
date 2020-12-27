module.exports = {
  name:"buy",
  code:`
$description[
物品名: $getServerVar[item$message[1]]
價格: $getServerVar[i$message[1]a]
創造者: $getServerVar[u$message[1]]
購買者: $username
在 $year 年 $month $day 日 $hour 點 $minute 分 $second 秒購買]$time[Etc/GMT-8]
$setServerVar[item$message[1];Not set]
$setServerVar[i$message[1]a;0]
$setServerVar[u$message[1];no name]
$setServerVar[id$message[1];no set]
$setVar[Money;$sub[$getVar[Money;$authorID];$getServerVar[i$message[1]a]];$authorID]
$setVar[Money;$sum[$getVar[Money;$getServerVar[id$message[1]]];$getServerVar[i$message[1]a]];$getServerVar[id$message[1]]]
$onlyIf[$getVar[money;$authorID]>$getServerVar[i$message[1]a];\`你的金錢不夠 You don't have enough money\`]`}
