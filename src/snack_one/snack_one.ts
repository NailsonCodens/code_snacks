class LinkedInProfileNoCleanCode {
    private name: string;
    private title:  string;
    private about: string;
    private experience : number;

    constructor(name: string, title: string, about: string, experience: number){
        this.name = name
        this.title = title
        this.about = about
        this.experience = experience
    }
}

class LinkedInProfileCleanCode {
    constructor(
        private name: string, private title: string, private about: string, private experience: number
    ){
    }
}
