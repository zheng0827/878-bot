module.exports = {
  name:"checkwarns",
  code:`$title[警告數]
$addTimestamp
$description[<@$authorID>有 \` $getUserVar[warn;$authorID]\`  次警告]
$color[0000ff]

$onlyIf[$message[]==;{execute:checkwarns}]`}

