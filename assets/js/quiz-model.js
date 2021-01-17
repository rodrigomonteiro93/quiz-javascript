const quiz = [
    {
        identify: 'dog',
        name: 'Cachorro',
        background: '#13a89e',
        icon: './assets/images/icon-dog.png',
        response: [
            {
                valid : [
                    {
                        message: 'Ótimo, seu cachorro pode ser um doador.',
                        icon: './assets/images/icon-valid.png'
                    }
                ],
                invalid : [
                    {
                        message: 'Que pena!<br /> Infelizmente seu cachorro não pode ser um doador.',
                        icon: './assets/images/icon-invalid.png'
                    }
                ],
            }
        ],
        question: [
            {
                id: 1,
                name: 'Seu cachorro tem pulga?',
                correct: 'n'
            },{
                id: 2,
                name: 'Seu cachorro tem alguma doênça?',
                correct: 'n'
            },{
                id: 3,
                name: 'Seu cachorro é bonito?',
                correct: 'y'
            },{
                id: 4,
                name: 'Seu cachorro tem sangue?',
                correct: 'y'
            }
        ]
    },{
        identify: 'cat',
        name: 'Gato',
        background: '#ed4d59',
        icon: './assets/images/icon-cat.png',
        response: [
            {
                valid : [
                    {
                        message: 'Ótimo, seu gato pode ser um doador.',
                        icon: './assets/images/icon-valid.png'
                    }
                ],
                invalid : [
                    {
                        message: 'Que pena!<br /> Infelizmente seu gato não pode ser um doador.',
                        icon: './assets/images/icon-invalid.png'
                    }
                ],
            }
        ],
        question: [
            {
                id: 5,
                name: 'Seu gato tem pulga?',
                correct: 'n'
            },{
                id: 6,
                name: 'Seu gato tem alguma doênça?',
                correct: 'n'
            },{
                id: 7,
                name: 'Seu gato é bonito?',
                correct: 'y'
            },{
                id: 8,
                name: 'Seu gato tem sangue?',
                correct: 'y'
            }
        ]
    }
]