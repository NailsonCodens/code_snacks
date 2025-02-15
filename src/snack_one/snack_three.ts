class BadConditionals{
    async execute(email: string){
        if(!email){
            throw new Error("Empty e-mail");
        }else if (email == 'teste@teste.com'){
            throw new Error("Bad e-mail");
        }else{
            return 'Valid e-mail'
        }
    }
}

class GoodCondtitionals{
    async execute(email: string){
        if(!email) throw new Error("Empty e-mail");

        if(email == 'teste@teste.com') throw new Error("Bad e-mail");

        return 'Valid e-mail'
    }
}