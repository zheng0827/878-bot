module.exports = {
name:"addmoney",
code:`$setVar[money;$message[];$authorID]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`}
