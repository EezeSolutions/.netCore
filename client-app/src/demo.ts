export interface Duck {

    name: string;
    age: number;
    makesound: (sound: string) => void;

}

const duck1: Duck =
{

    name: 'duck1',
    age: 45,
    makesound: (sound: string) => console.log(sound)
    
     
}
const duck2: Duck =
{

    name: 'duck2',
    age: 12,
    makesound: (sound: string) => alert(sound)


}
const ducks = [duck1, duck2]

const dog =
{
    name: "DOG",
    age:22
}

export { ducks, dog }