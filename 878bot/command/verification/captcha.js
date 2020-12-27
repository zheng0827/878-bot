module.exports = {
  name:"captcha",
  code:`
$title[驗證碼]
$description[你的驗證碼為:\`$randomString[6]\`]
$footer[use: $getServerVar[prefix]verify $randomString[6]] 
$setUserVar[ca;$randomString[6]]
$onlyIf[$getServerVar[vr]!=0;請叫管理員設置要給予的身份組•|•$getServerVar[prefix]verrole]
$onlyIf[$getServerVar[tvr]!=0;請叫管理員設置要拿走的身份組•|•$getServerVar[prefix]takeverrole]`}

