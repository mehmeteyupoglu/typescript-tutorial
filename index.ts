let username: string = 'Mehmet'
let numbers: any[] = []
let arrayOfNumbers: number[] = [1, 2, 3]

// PascalCase
enum Size { Small = 's', Medium = 'm', Large = 'l'}

let mySize: Size = Size.Medium

function calculateTax(income: number): number {
    if (income < 50000)
        return income * 1.2
    return income * 1.3
}

console.log(mySize)

type Employee = {
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Mehmet', 
    retire: (date: Date) => {
        console.log(date)
    }
}

function kgToLbs(weight: number | string): number {
    // Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }

    return parseInt(weight) * 2.2
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

// intersection type
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {}, 
    resize: () => {}
}


// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;
