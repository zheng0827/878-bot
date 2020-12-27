module.exports = {
name:"botinvite",
code:`$title[bot invite ink]
$description[
bot name: $username[$mentioned[1]]
{hyper:$username[$mentioned[1]]'s invite link:https://discordapp.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=2146958847}]
$color[19ff07]
$onlyIf[$message[1]!=;沒有標注機器人]
$onlyIf[$isBot[$mentioned[1]]==true;he isn't a bot.]`}