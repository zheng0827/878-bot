module.exports = {
  name:"shop",
  code:`商店:
$title[$serverName[$guildID]'s Shop!]
$description[
輸入 \`$getServerVar[prefix]setitem {物品名稱} {物品金額} 1~10\`
enter \`$getServerVar[prefix]setitem {item name} {item money} 1~10\`
__________________
輸入 \`$getServerVar[prefix]buy 1~10\`來購買物品，被賣掉的會歸0
Enter \`$getServerVar[prefix]buy 1~10\` to buy items]
$addField[Item 1;**名稱 Name: \`$getServerVar[item1]\`
金錢 Money: \`$getServerVar[i1a]\`
創造者: \`$getServerVar[u1]\`**]
$addField[Item 2;**名稱 Name: \`$getServerVar[item2]\`
金錢 Money: \`$getServerVar[i2a]\`
創造者: \`$getServerVar[u2]\`**]
$addField[Item 3;**名稱 Name:\`$getServerVar[item3]\`
金錢 Money: \`$getServerVar[i3a]\`
創造者: \`$getServerVar[u3]\`**]
$addField[Item 4;**名稱 Name: \`$getServerVar[item4]\`
金錢 Money: \`$getServerVar[i4a]\`
創造者: \`$getServerVar[u4]\`**]
$addField[Item 5;**名稱 Name: \`$getServerVar[item5]\`
金錢 Money: \`$getServerVar[i5a]\`
創造者: \`$getServerVar[u5]\`**]
$addField[Item 6;**名稱 Name: \`$getServerVar[item6]\`
金錢 Money: \`$getServerVar[i6a]\`
創造者: \`$getServerVar[u6]\`**]
$addField[Item 7;**名稱 Name: \`$getServerVar[item7]\`
金錢 Money: \`$getServerVar[i7a]\`
創造者: \`$getServerVar[u7]\`**]
$addField[Item 8;**名稱 Name: \`$getServerVar[item8]\`
金錢 Money: \`$getServerVar[i8a]\`
創造者: \`$getServerVar[u8]\`**]
$addField[Item 9;**名稱 Name: \`$getServerVar[item9]\`
金錢 Money: \`$getServerVar[i9a]\`
創造者: \`$getServerVar[u9]\`**]
$addField[Item 10;**名稱 Name: \`$getServerVar[item10]\`
金錢 Momey: \`$getServerVar[i10a]\`
創造者: \`$getServerVar[u10]\`**]
$color[00FF00]
$cooldown[3s;\`請等等三秒 Please wait 3s\`]`}