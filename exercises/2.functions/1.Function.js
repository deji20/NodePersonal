function interact(callbackFunction, name, interaction){
    console.log(callbackFunction(name, interaction));
}

interact((name, interaction) => {return interaction + name}, "Anders", "kick: ");