var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    recconect: true
  },
  identity: {
    username: "USERNAME",
    password: "OAUTH TOKEN"
  },
  channels: ["#CHANNEL"]
};

var client = new tmi.client(options);
client.connect();

client.on("chat", function(channel, user, message, self){
  if(message === "!pony"){
    client.say("CHANNEL", "https://bit.ly/2JAvusC");
  };
});

client.on("chat", function(channel, user, message, self){
  if(message.startsWith("!pony->")){
    var input = message.split(" ")[1];
    client.say("CHANNEL", input + " https://bit.ly/2JAvusC");
  };
});

client.on("chat", function(channel, user, message, self){
  if(message.startsWith("!so")){
    var input = message.split(' ')[1];
    if(input.count < 2) return;
    if(user.mod){
      client.say("CHANNEL", "Go check out " + input + " at http://twitch.tv/" + input);
    };
  };
});

client.on("chat", function(channel, user, message, self){
  if (message.startsWith("!donate->")) {
    var input = message.split(' ')[1];
    client.say("CHANNEL", input + " To donate go here http://streamlabs.com/fluffyscab");
  } 
});

client.on("chat", function(channel, user, message, self){
  if(message === "!donate"){
    client.say("CHANNEL", "To donate go here http://streamlabs.com/fluffyscab");
  };
});

client.on("chat", function(channel, user, message, self){
   if(message.startsWith("!commands->")){
    var input = message.split(' ')[1];
     if(input != undefined){
    client.say("fluffyscab", input + " the current commands are - !pony - !donate - mod only commands - !so (shout out)");
    client.say("fluffyscab", "To direct a command at someone type -> after the word for example \"!donate->\"");
     } if(input === undefined){
     client.say("CHANNEL", "The current commands are - !pony - !donate - !so (Mod only)")
     client.say("CHANNEL", "To directa command at someone put there name after the command")
     }
   };
});
