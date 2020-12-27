module.exports = {
  name:"verrole",
aliases:["vrole"],
  code:`$setServerVar[vr;$findRole[$message[]]] 成功設置驗證完給身份組/Successfully set the authentication to the role
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]]
$onlyIf[$message[]!=;{title:不能為空白/Cannot be blank}
{description:
可以使用\`$getServerVar[prefix]serverprofile\`尋找設定類指令的簡指令
You can use \`$getServerVar[prefix]serverprofile\` to find a simple command for setting class commands\`\`\`❌ | 用法/usage:
$getServerVar[prefix]verrole (身份組名字或ID/role name or ID)\`\`\`}]`}

