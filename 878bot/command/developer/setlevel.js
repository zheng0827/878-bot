module.exports = {
    name:"setlevel",
    code:`
$setUserVar[level;$message[2];$mentioned[1]]
成功
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`}

