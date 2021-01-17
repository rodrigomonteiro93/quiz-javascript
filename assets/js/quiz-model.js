const quiz = [
    {
        identify: 'dog',
        name: 'Cachorro',
        background: '#13a89e',
        icon: '/assets/images/icon-dog.png',
        response: [
            {
                valid : [
                    {
                        message: 'Cachorro válido,<br /> Lorem ipsum dollor',
                        icon: './assets/images/icon-valid.png'
                    }
                ],
                invalid : [
                    {
                        message: 'Cachorro inválido,<br /> Lorem ipsum dollor',
                        icon: './assets/images/icon-invalid.png'
                    }
                ],
            }
        ],
        question: [
            {
                id: 1,
                name: 'Question Dog 01',
                correct: 'y'
            },{
                id: 2,
                name: 'Question Dog 02',
                correct: 'n'
            },{
                id: 3,
                name: 'Question Dog 03',
                correct: 'y'
            },{
                id: 4,
                name: 'Question Dog 04',
                correct: 'y'
            }
        ]
    },{
        identify: 'cat',
        name: 'Gato',
        background: '#ed4d59',
        icon: '/assets/images/icon-cat.png',
        response: [
            {
                valid : [
                    {
                        message: 'Gato válido,<br /> Lorem ipsum dollor',
                        icon: './assets/images/icon-valid.png'
                    }
                ],
                invalid : [
                    {
                        message: 'Gato inválido,<br /> Lorem ipsum dollor',
                        icon: './assets/images/icon-invalid.png'
                    }
                ],
            }
        ],
        question: [
            {
                id: 5,
                name: 'Question Cat 01',
                correct: 'y'
            },{
                id: 6,
                name: 'Question Cat 02',
                correct: 'y'
            },{
                id: 7,
                name: 'Question Cat 03',
                correct: 'y'
            },{
                id: 8,
                name: 'Question Cat 04',
                correct: 'y'
            }
        ]
    }
]