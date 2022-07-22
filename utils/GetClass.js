
const timetable = [
    //Monday
    [
        {
            subject: "20CS2037 Optimization Methodologies",
            class: "CSLH201",
            time: "9:00 - 9:45"
        },
        {
            subject: "20CS2052L System Administration",
            class: "CTC LAB 9",
            time: "10:00 - 12:45"
        },
        {
            subject: "20CS2021 Distributed Computing",
            class: "CSLH206",
            time: "2:00 - 2:45"
        },
        {
            subject: "20CS2016 Database Management System",
            class: "CSLH202",
            time: "3:00 - 3:45"
        },
    ],
    //Tuesday
    [
        {
            subject: "20CS2021 Distributed Computing",
            class: "CSLH206",
            time: "9:00 - 9:45"
        },
        {
            subject: "20CS2016 Database Management System",
            class: "CSLH202",
            time: "10:00 - 10:45"
        },
        {
            subject: "20CS2045 RFID Technologies",
            class: "CSLH206",
            time: "12:00 - 12:45"
        },
        {
            subject: "20CS2016L Database Management System",
            class: "CTC Lab 4",
            time: "2:00 - 4:45"
        },
    ],
    //wednesday
    [
        {
            subject: "20CS2052 System Administration",
            class: "CSLH206",
            time: "9:00 - 9:45"
        },
        {
            subject: "20CS2037 Optimization Methodologies",
            class: "CSLH201",
            time: "10:00 - 10:45"
        },
        {
            subject: "20CS2045 RFID Technologies",
            class: "CSLH206",
            time: "11:00 - 11:45"
        },
        {
            subject: "20CS2025 Theory Of Computation",
            class: "CSLH203",
            time: "12:00 - 12:45"
        },
    ],
    //Thursday
    [
        {
            subject: "20CS2052 System Administration",
            class: "CSLH206",
            time: "10:00 - 10:45"
        },
        {
            subject: "20CS2016 Database Management System",
            class: "CSLH202",
            time: "11:00 - 11:45"
        },
        {
            subject: "20CS2025 Theory Of Computation",
            class: "CSLH203",
            time: "12:00 - 12:45"
        },
        {
            subject: "20CS2045 RFID Technologies",
            class: "CSLH206",
            time: "2:00 - 2:45"
        },
    ],
    //Friday
    [
        {
            subject: "20CS2052 System Administration",
            class: "CSLH206",
            time: "9:00 - 9:45"
        },
        {
            subject: "20CS2021 Distributed Computing",
            class: "CSLH206",
            time: "11:00 - 11:45"
        },
        {
            subject: "20CS2025 Theory Of Computation",
            class: "CSLH203",
            time: "12:00 - 12:45"
        },
        {
            subject: "20CS2037 Optimization Methodologies",
            class: "CSLH201",
            time: "2:00 - 2:45"
        },
    ]
]

export const getClass = (day) => {
    if(day < 5){
        return timetable[day];
        // console.log(timetable[day]);
    }
    else{
        return null;
    }     
}



