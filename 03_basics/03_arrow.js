const user = {
    userName : 'Salim',
    price :  399,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
    }
}

user.welcomeMessage()