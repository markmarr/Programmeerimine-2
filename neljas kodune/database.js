database = {
    weeks: [
        {
            id: 1,
            lessons: [
                {
                    id: 1,
                    courseId: 1,
                    name: "Vanatehnika restaureerimine",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Kontaktõpe individuaalse graafiku järgi",
                    startTime: new Date("2021-02-25T10:00+02:00"),
                    duration: 7.3,
                },
                {
                    id: 2,
                    courseId: 2,
                    name: "Meistritöökoja praktika 2",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Kontaktõpe individuaalse graafiku järgi",
                    startTime: new Date("2021-02-25T10:00+02:00"),
                    duration: 7.3,
                },
                {
                    id: 3,
                    courseId: 3,
                    name: "Loomeettevõtlus",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Zoom",
                    startTime: new Date("2021-02-25T17:30+02:00"),
                    duration: 2.5,
                }
            ]
        },
        {
            id: 2,
            lessons: [
                {
                    id: 1,
                    courseId: 1,
                    name: "Vanatehnika restaureerimine",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Kontaktõpe individuaalse graafiku järgi",
                    startTime: new Date("2021-02-25T10:00+02:00"),
                    duration: 7.3,
                },
                {
                    id: 2,
                    courseId: 2,
                    name: "Meistritöökoja praktika 2",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Kontaktõpe individuaalse graafiku järgi",
                    startTime: new Date("2021-02-25T10:00+02:00"),
                    duration: 7.3,
                },
                {
                    id: 3,
                    courseId: 3,
                    name: "Loomeettevõtlus",
                    teacher: "Laine Lemmik",
                    room: 301,
                    comment: "Zoom",
                    startTime: new Date("2021-02-25T17:30+02:00"),
                    duration: 2.5,
                }
            ]
        }
    ],
    courseNames: [
        "Käsitöötehnoloogiad ja disain 2",
        "Käsitöötehnoloogiad ja disain 3",
        "Tervisejuht 2"
    ],
    users: [
        {
            //parool: es14
            //token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InVzZXIiLCJpYXQiOjE2MTYxNzk2NjAsImV4cCI6MTYxNjE4MzI2MH0.1AoENGFqru3T-THzYOr1Uux1ZbgCjKTNPtA4gMDnzK0
            id: 1,
            firstName: "Evo",
            lastName: "Saare",
            email: "ESaare14@gmail.com",
            password: "$2b$10$Pj6SFlgBvonk.1TK2XcJ1OgMkobkgfFudvbP6tcLA4xVapLVYJU4u",
            role: "user"
        },
        {
            //parool: olenss
            //token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE2MTgwODA1LCJleHAiOjE2MTYxODQ0MDV9.g9FVOAByTUnf3oFteQ3S1r_Eu5ogrJP5OTcjMpAVnUE
            id: 2,
            firstName: "Siiri",
            lastName: "Saar",
            email: "SS@gmail.com",
            password: "$2b$10$ChVIyE7e4xzYNJY/QMGSK.LAiRlWmOMnsq6HdRlLgMdrDfzAgWkXy",
            role: "admin"
        }

    ]
};

module.exports = database;