class ClassicUser{
    async execute(name: string, last_name: string, age: number, eyes: string){
        console.log(name, last_name, age, eyes)
    }
}

interface ModerUserData {
    name: string,
    last_name: string
    age: number
    eyes: 'brown' | 'blue' | 'green'
}

class ModernUser{
    async execute(data: ModerUserData){
        console.log(data.name, data.last_name)
    }
}

