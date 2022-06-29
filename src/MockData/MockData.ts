import { IMundaneList, IMundaneRoutine } from "../types/MundaneTypes";

export const MockMundaneLists : IMundaneList[] = [
    {
        id: 1,
        name: "Chores",
        created: new Date("01/01/2022"),
        items: [
            {
                id: 1,
                name : "Tidy Apartment",
                created: new Date("01/02/2022"),
                complete: false            
            },
            {
                id: 2,
                name : "Do Laundry",
                created: new Date("01/02/2022"),
                complete: false            
            },
            {
                id: 3,
                name : "Clean Car",
                created: new Date("01/02/2022"),
                complete: false            
            }
        ]
    },
    {
        id: 2,
        name: "Appointments to Schedule",
        created: new Date("01/02/2022"),
        items: [
            {
                id: 4,
                name : "Call Doctor",
                created: new Date("01/02/2022"),
                complete: false            
            },
            {
                id: 5,
                name : "Find Mechanic",
                created: new Date("01/02/2022"),
                complete: false            
            },
            {
                id: 6,
                name : "Call Dentist",
                created: new Date("01/02/2022"),
                complete: false            
            }
        ]
    }
]


export const MockMundaneRoutines: IMundaneRoutine[] = [
    {
        id: 1,
        name: "Wash Dishes",
        created: new Date("01/03/2022"),
        difficulty: 1
    },
    {
        id: 2,
        name: "Water Garden",
        created: new Date("01/03/2022"),
        difficulty: 1
    }
]