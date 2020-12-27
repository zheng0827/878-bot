
//discordbot-script
const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")
const bot = new discordScript({
  token:"",
  prefix: [`$getServerVar[prefix]`]})
const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./878bot/command/")

for (const files of folders) {
    const folder = fs.readdirSync(`./878bot/command/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./878bot/command/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            code: command.code,
        })
       console.log(`成功載入${command.name}!`)
    }
}

bot.MessageEvent()
bot.MessageEditEvent()
bot.Variables({
version:"V 1.9.5",    
helppage:"5",
v5prefix:"8!",
snipe: "這裡沒有我可以snipe的東西",
user: "698375522039758858",
update:"nothing",
wc:"0",
lc:"0",
wm:"歡迎{user}來到\`{guild}\`現在我們有\`{membercount}\`位成員",
lm:"{user}離開了\`{guild}\`現在我們有\`{membercount}\`位成員",
prefix:"8!",
bank:"0",
level:"0",
time:"20",
rep:"0",
role:"0",
lvch:"0",
number:"1",
bank:"0",
premium:"0",
money:"0",
item1:"Not set",
item2:"Not set",
item3:"Not set",
item4:"Not set",
item5:"Not set",
item6:"Not set",
item7:"Not set",
item8:"Not set",
item9:"Not set",
item10:"Not set",
leveloo:"open",
i1a:"0",
i2a:"0",
i3a:"0",
i4a:"0",
i5a:"0",
i6a:"0",
i7a:"0",
i8a:"0",
i9a:"0",
i10a:"0",
log:"0",
warnr:"0",
member:"0",
u1:"no name",
u2:"no name",
u3:"no name",
u4:"no name",
u5:"no name",
u6:"no name",
u7:"no name",
u8:"no name",
u9:"no name",
u10:"no name",
id1:"no set",
id2:"no set",
tvroleID:"0",
vroleID:"0",
id3:"no set",
id4:"no set",
id5:"no set",
id6:"no set",
id7:"no set",
id8:"no set",
id9:"no set",
id10:"no set",
casino:"0",
verify:"",
vr:"0",
wic:"0",
swic:"0",
test:"",
tvr:"0",
ca:"",
warn:"0",
878:"f",
day:"",
month:"",
afk:"",
})

bot.Status({
        0: {
            description: "ping me to get my prefix", 
            type: "PLAYING" 
        }, 
        1: {
            description: "srv: $serverCount, members:$allMembersCount", 
            type: "WATCHING" 
        },
     2: {
            description: "thanks NCT skyouo", 
            type: "PLAYING" 
        },
    3: {
            description: "i have music function",
            type: "PLAYING"
        }
    }, 13000)
bot.ExecutableCommand({
name:"sexy1",
code:`$author[性感探測器;$userAvatar[$message[]]]
$description[<@$message[]> 有 $random[0;100]% 很性感]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "sexy",
code: `$author[性感探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]>有 $random[0;100]%  很性感]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"mp1",
code:`$author[變態探測器;$userAvatar[$message[]]]
$description[<@$message[]> 有 $random[0;100]% 是變態]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "mp",
code: `$author[變態探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]>有  $random[0;100]%  是變態]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"ugly1",
code:`$author[醜陋探測器;$userAvatar[$message[]]]
$description[<@$message[]> 有 $random[0;100]% 很醜]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"smart1",
code:`$author[智商探測器;$userAvatar[$message[]]]
$description[<@$message[]>的智商是 $random[0;100]]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "ugly",
code: `$author[;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]>有  $random[0;100]%  很醜]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"beautiful1",
code:`$author[美麗探測器;$userAvatar[$message[]]]
$description[<@$message[]>有 $random[0;100]% 是美女]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "smart",
code: `$author[智商探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]>的智商是  $random[0;100]]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "beautiful",
code: `$author[美麗探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]>有 $random[0;100]%  是美女]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"luck1",
code:`$author[幸運探測器;$userAvatar[$message[]]]
$description[<@$message[]>有 $random[0;100]% 是幸運]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"gay1",
code:`$author[同性戀探測器; $userAvatar[$message[]]]
$description[<@$message[]> $random[0;100]% 是同性戀]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "cute",
code: `$author[可愛探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]> $random[0;100]% 很可愛]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "gay",
code: `$author[同性戀探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]> $random[0;100]%  是同性戀]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name: "handsome",
code: `$author[帥哥探測儀;$userAvatar[$mentioned[1]]]
$description[<@$mentioned[1]> $random[0;100]%  是帥哥]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"handsome1",
code:`$author[帥哥探測儀;$userAvatar[$message[]]]
$description[<@$message[]> $random[0;100]%  是帥哥]
$color[$random[0;999999]]`})
bot.ExecutableCommand({
name:"userinfo",
code:`
$thumbnail[$userAvatar[$mentioned[1]]]
$title[$username[$mentioned[1]]'s information]
$description[
名字/name
\`$username[$mentioned[1]]\`

tag
\`$discriminator[$mentioned[1]]\`

ID
\`$mentioned[1]\`

是機器人嗎？/Is it a bot?
\`$replaceText[$replaceText[$isBot[$mentioned[1]];false;不是/false];true;是/true]\`

創建帳號的時間/Time to create account
\`$creationDate[$mentioned[1];user]($creationTime[$mentioned[1];user])\`

加入此群的時間/Time to join this group
\`$creationDate[$mentioned[1];member]($creationTime[$mentioned[1];member])\`

有管理員權限嗎？/have admin rights?
\`$replaceText[$replaceText[$hasPerm[$mentioned[1];admin];true;有/have];false;沒有/haven't]\`

有的身份組(排序為低到高)/has roles(Sort low to high)
\`\`\`$memberRoles[$mentioned[1]]\`\`\`]
$footer[In $serverName[$guildID];$serverIcon]
$color[ff$discriminator[$mentioned[1]]]`})
bot.ExecutableCommand({
  name:"help1",
  code:`$title[**一般 General**]
$description[
$getServerVar[prefix]afk \`設置tag發的訊息/Set the message sent by the tag\`
$getServerVar[prefix]delafk \`刪除tag發的訊息/Delete the message sent by the tag\`
$getServerVar[prefix]dav\`另一個avatar/another avatar\`
$getServerVar[prefix]say \`重複輸入說話/Repeat typing\`
$getServerVar[prefix]embedsay\`用embed說一些東西/use embed Talk something\`
$getServerVar[prefix]sayto\`對某人說一些東西/Say something to someone\`
$getServerVar[prefix]botinvite \`{@機器人} 查看他的邀請連結/{@bot} view it's invite URL\`
$getServerVar[prefix]botinfo \`Info of 878 bot\`
$getServerVar[prefix]server \`伺服器信息/server information\`
$getServerVar[prefix]av \`查看頭像/view avatar\`
$getServerVar[prefix]checkwarns \`查看警告/view warn\`
$getServerVar[prefix]invite \`邀878 Bot/invite 878 Bot\`
$getServerVar[prefix]report \`{錯誤} 錯誤回報/{error} Error report\`
$getServerVar[prefix]snipe \`查看上一個刪除的訊息/View the last deleted message\`
$getServerVar[prefix]rank \`查看等級/view level\` 名字不可為特殊文字
$addTimestamp] $color[$random[0;999999]] $footer[Page 1/$getVar[helppage;670194432657588234]]
`})
bot.ExecutableCommand({
  name:"help2",
  code:`
$title[**管理員 Admin**]
$description[
管理員:
Admin:
$getServerVar[prefix]warn \`{@成員} 警告/{@member} warn\`
$getServerVar[prefix]clearwarns \`{@成員} 清徐警告/{@member} clear warns\`
$getServerVar[prefix]kick \`{@成員} 踢掉/{@member} kick\`
$getServerVar[prefix]ban \`{@成員} 禁止/{@member} ban\`
$getServerVar[prefix]purge \`{數字} 清除訊息/{number} clear message\`
$getServerVar[prefix]poll \`{問題} 投票/{Question} Vote\`
$getServerVar[prefix]mute \`{@成員} 禁言/{@MEMBER} Mute\`
$getServerVar[prefix]unmute \`{@成員} 取消禁言/{@member} unmute\`
$getServerVar[prefix]welcomechannel \`加入訊息/ welcome message\`
$getServerVar[prefix]leavechannel \`離開訊息/leave message\`
$getServerVar[prefix]clearwelcomechannel \`移除歡迎訊息/remove welcome message\`
$getServerVar[prefix]clearleavechannel \`移除離開訊息/remove leave message\`
$getServerVar[prefix]autorole \`{身份組名字} 加入給身份組/{role name}join  give role\`***(一定要設置)***
$getServerVar[prefix]setlog \`{頻道編號} 設定log/{channel ID} set log\`
$getServerVar[prefix]delwarn \`{成員} 刪除警告/{member} Delete warn\`
$getServerVar[prefix]welcomemessage \`{歡迎訊息} 歡迎訊息/{welcome message} set wlcome message\`
$getServerVar[prefix]leavemessage \`{離開訊息} 離開訊息/{leave message} set leave message\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 2/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
  name:"help3",
  code:`$title[**物品 Item**]
$description[
$getServerVar[prefix]shop \`商店/shop\`
$getServerVar[prefix]buy \`{1~10} 買在$getServerVar[prefix]shop裡的物品/buy in $getServerVar[prefix]shop's item\`
$getServerVar[prefix]bal \`查看餘額/View balance\`
$getServerVar[prefix]work \`工作/work\`
$getServerVar[prefix]setitem \`{物品名稱 物品價錢 物品數字}創造物品/{item name item price item number} Create item\`
$getServerVar[prefix]moveitem \`{數字} 移除物品/{item number} Remove item\`
$getServerVar[prefix]save \`{金錢} 儲存銀行/{money} save to bank\`
$getServerVar[prefix]take \`{金錢} 拿取金錢/{money} take money in your bank\`
$getServerVar[prefix]day \`每日獎勵/Daily Reward\`
$getServerVar[prefix]week \`每週獎勵/week Reward\`
$getServerVar[prefix]lb \`金錢排行榜/money Leaderboard\`
$getServerVar[prefix]blb \`銀行排行榜/bank Leaderboard\`
$getServerVar[prefix]fish \`釣魚/fishing\`
$getServerVar[prefix]pay \`{@使用者} {金錢} 給予金錢/{@member} {money} give money\`
$getServerVar[prefix]interest \`獲得利息/get interest\`
$getServerVar[prefix]eat \`吃飯/eat\`
$getServerVar[prefix]rob \`{@名字} 搶劫/{@user name} rob\`
$getServerVar[prefix]month \`每月獎勵/month Reward (Premium)\`
$getServerVar[prefix]bankrob \`{@名字} 搶劫銀行/{@user name} rob bank(Premium)\`
$getServerVar[prefix]bpre \`購買高級版/buy premium\`
$getServerVar[prefix]beg \`乞丐/begger (Premium)\`
$getServerVar[prefix]casino \`老虎機/Slot machine\`
$getServerVar[prefix]number \`幸運號碼/number\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 3/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
  name:"help4",
  code:`
$title[娛樂]
$description[
$getServerVar[prefix]gay \`同性戀探測器\`
$getServerVar[prefix]handsome \`帥哥探測器\`
$getServerVar[prefix]luck \`運氣指數\`
$getServerVar[prefix]beautiful \`美女探測器\`
$getServerVar[prefix]cute \`可愛探測器\`
$getServerVar[prefix]sexy \`性感探測器\`
$getServerVar[prefix]mp \`變態探測器\`
$getServerVar[prefix]ugly \`醜探測器\`
$getServerVar[prefix]earth \`地球毀滅探測器\`
$getServerVar[prefix]smart \`智商探測器\`
$getServerVar[prefix]rubbish  \`垃圾探測器\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 4/$getVar[helppage;670194432657588234]]`})

bot.ExecutableCommand({
    name:"help5",
    code:`$title[**音樂 music**]
$description[\`$getServerVar[v5prefix]8d\` - (V5 premium) 8D音響, 單聲道手機勿用
\`$getServerVar[v5prefix]bass\` - (V5 premium) 重音加速, 訊號不好者勿用
\`$getServerVar[v5prefix]configure\` - 調整伺服器設置
\`$getServerVar[v5prefix]download\` - (V5 premium) 下載歌曲, 本人不負任何法律責任
\`$getServerVar[v5prefix]eval\` - (Developer) 運行 JS 代碼
\`$getServerVar[v5prefix]export\` - 用目前的隊列創建自製歌單
\`$getServerVar[v5prefix]forceexport\` - 強制用目前的隊列創建自製歌單
\`$getServerVar[v5prefix]getlist\` - 獲取指定歌單的訊息
\`$getServerVar[v5prefix]help\` - 獲得指令幫助
\`$getServerVar[v5prefix]info\` - 作者的話
\`$getServerVar[v5prefix]karaoke\` - (V5 premium) 去人聲, 不太乾淨
\`$getServerVar[v5prefix]list\` - 獲取總歌單
\`$getServerVar[v5prefix]lyrics\` - 從魔鏡歌詞網獲取歌詞
\`$getServerVar[v5prefix]nightcore\` - (V5 premium) nightcore 訊號不好者勿用
\`$getServerVar[v5prefix]now-playing\` - 獲取目前播放

\`$getServerVar[v5prefix]pause\` - 暫停隊列
\`$getServerVar[v5prefix]play\` - 播放您最愛的歌曲
\`$getServerVar[v5prefix]playlist\` - 播放您最愛的自制歌單
\`$getServerVar[v5prefix]queue\` - 查詢目前隊列
\`$getServerVar[v5prefix]remove\` - 從隊列裡移除歌曲
\`$getServerVar[v5prefix]removelist\` - 移除指定歌單
\`$getServerVar[v5prefix]repeat\` - 單曲循環
\`$getServerVar[v5prefix]remuse\` - 繼續播放
\`$getServerVar[v5prefix]search\` - 搜尋歌曲並播放
\`$getServerVar[v5prefix]seek\` - 跳至指定時間
\`$getServerVar[v5prefix]skip\` - 跳過歌曲
\`$getServerVar[v5prefix]stop\` - 停止播放
\`$getServerVar[v5prefix]subboost\` - (V5 premium) 採樣率不同的重音加速
\`$getServerVar[v5prefix]volume\` - 調整音量]
$color[fow0w1]
$footer[Page 5/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
name:"help6",
code:`$title[only for my developer]
$description[你不是我主人，你也沒辦法用
\`up\` 設定help更新
\`version\`設置版本
\`srv\`查看群組
\`helppage\`]
$color[fow0w1]
$footer[Page 5/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
  name:"checkwarns",
  code:`$title[警告數Warns]
$addTimestamp
$description[<@$mentioned[1]>有 \` $getUserVar[warn;$mentioned[1]]\`  次警告]
$color[0000ff]`})
bot.ExecutableCommand({
  name:"av",
  code:`$description[**<@$mentioned[1]>的頭像**]
$image[$replaceText[$userAvatar[$mentioned[1]];?size=128;?size=4096]]`})
bot.LeaveCommand({
name: "$getServerVar[lc]",
code: `
$useChannel[$getServerVar[lc]]
$author[掰掰！我們失去了一位成員;$userAvatar[$authorID]]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[lm];{user};$username[$authorID]#$discriminator[$authorID]];{membercount};$membersCount[]];{guild};$serverName[]]]
$color[ff0000]
$addTimestamp`});
bot.onLeave()
bot.JoinedCommand({
name: "$getServerVar[wc]",
code: `
$useChannel[$getServerVar[wc]]
$author[歡迎!;$userAvatar[$authorID]]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[wm];{user};<@$authorID>];{membercount};$membersCount[]];{guild};$serverName[]]]
$color[ff92of]
$addTimestamp
$giveRole[$authorID;$getServerVar[role]]`});
bot.onJoined()
bot.SpaceCommand({
  name:"levelup",
  code:`
$useChannel[$getServerVar[lvch]]
$username[$authorID],你現在為\`Lv.$sum[$getUserVar[level];1]\`
$onlyIf[$getServerVar[lvch]!=0;{execute:levelupup}]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[time;$sum[$getUserVar[time];$random[24;98]]]
$onlyIf[$getUserVar[rep]==$getUserVar[time];]
$setUserVar[rep;$sum[$getUserVar[rep];1]]
$onlyIf[$getServerVar[leveloo]==open;]`})

bot.ExecutableCommand({
    name:"levelupup",
    code:`
$useChannel[$channelID[]]

$username[$authorID],你現在為\`Lv.$sum[$getUserVar[level];1]\`

$onlyIf[$getUserVar[rep]==$getUserVar[time];]`})
bot.SpaceCommand({
  name:"878bot",
  code:`
$channelSendMessage[$channelID[];{title:我的前輟}
{description:我在這裡的一般指令前輟是 \`$getServerVar[prefix]\`}
{color:ff0000}]
$onlyIf[$mentioned[1]==$client[id];]`})
bot.ExecutableCommand({
name: "nummber",
code: `
<@$authorID>,我說的是\`$getUserVar[number]\`
你輸入\`$message[]\`
所以要扣25元
$setUserVar[money;$sub[$getUserVar[money];25];$authorID]`})
bot.MessageDeleteCommand({
name: "$channelID[]",
code: `$setChannelVar[snipe;$message[]]
$setChannelVar[user;$authorID]`})
bot.onMessageDelete()
