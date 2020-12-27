module.exports = {
    name:"version",
    code:`
$setVar[version;$message[];670194432657588234]
you set my version to $message[]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`}

