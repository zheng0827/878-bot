module.exports = {
  name:"verify",
  code:`
$title[驗證]
$description[$username[$authorID]已驗證成功，已給 $username[$authorID]身份組]
$color[19ff07]
$setUserVar[ca;]
$giveRole[$authorID;$getServerVar[vr]]
$takeRole[$authorID;$getServerVar[tvr]]
$onlyIf[$message[]==$getUserVar[ca];{title:驗證失敗} {description:驗證碼錯誤} {color:19ff07}]
$onlyIf[$message[]!=;{title:驗證失敗} {description:驗證碼不為空白} {color:19ff07}]
$onlyIf[$getServerVar[vr]!=0;請叫管理員設置要給予的身份組•|•$getServerVar[prefix]verrole]
$onlyIf[$getServerVar[tvr]!=0;請叫管理員設置要拿走的身份組•|•$getServerVar[prefix]takeverrole]`}

