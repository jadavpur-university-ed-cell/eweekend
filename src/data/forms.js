import { social } from '../constants.js'

const forms = {
    dataleads: {
        title: 'Get in Touch',
        fields: {
            name: {
                label: 'Your name',
                placeholder: 'i.e. Jelly McJellyfish',
                required: true
            },
            email: {
                label: 'Your email',
                placeholder: 'i.e. jelly@mcjellyfish.com',
                type: 'email',
                required: true
            },
            company: {
                label: 'Your Company Name',
                placeholder: 'i.e. Jellyfish Inc.'
            },
            about: {
                label: 'About you',
                type: 'checkbox',
                required: true,
                options: [
                    {
                        value: 'provider',
                        label: 'I can provide data'
                    },
                    {
                        value: 'consumer',
                        label: 'I want to use data'
                    }
                ]
            },
            message: {
                label: 'Your Message',
                placeholder:
                    'Tell us why you would like to publish or get data',
                maxWords: 100,
                tag: 'textarea',
                required: true
            }
        },
        button: 'Submit',
        success: `Thank you! Assuming your profile is a good fit, we will be in touch with you.`,
        baseUrl:
            '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13',
        listIdProvider: 'b402d6b267',
        listIdConsumer: '482c337540'
    },
    whiteCollar: {
        title: 'White Collar Event Registration',
        fields: {
            name: {
                label: 'Your Name',
                placeholder: 'i.e. John Doe',
                required: true
            },
            email: {
                label: 'Your Email',
                placeholder: 'i.e. johndoe@gmail.com',
                type: 'email',
                required: true
            },
            contact: {
                label: 'Your Contact number',
                placeholder: 'i.e. 9876543210',
                type: 'number',
                required: true
            },
            department: {
                label: 'Your Department',
                placeholder: 'i.e. FTBE',
                required: true
            },
            college: {
                label: 'Your College/University',
                placeholder: 'i.e. Jadavpur University',
                required: true
            },
            year: {
                label: 'Your Year',
                type: 'checkbox',
                required: true,
                options: [
                    {
                        value: '1',
                        label: 'Freshers ( First Year )'
                    }
                ]
            }
        },
        button: 'Submit',
        success: `Thank you! Stay connected with us on Social media for latest updates.`,
        baseUrl:
            'https://script.google.com/macros/s/AKfycbzipMZgJwkXnW9FNDFjC2wLJKAt2c0kKLU4kzEqJFsK538EWSI/exec',
        listIdProvider: 'b402d6b267',
        listIdConsumer: '482c337540',
        sheetName: 'whitecollar' 
    },
    test: {
        title: 'dummy Event Registration',
        fields: {
            name: {
                label: 'Your Name',
                placeholder: 'i.e. John Doe',
                default: 'test',
                required: true
            }
        },
        button: 'Submit',
        success: `Thank you! Stay connected with us on Social media for latest updates.`,
        sheetName: 'test' 
    }, 
    technokraft: {
        title: 'Technokraft Event Registration',
        fields: {
            name: {
                label: 'Your Name',
                placeholder: 'i.e. John Doe',
                required: true
            },
            email: {
                label: 'Your Email',
                placeholder: 'i.e. johndoe@gmail.com',
                type: 'email',
                required: true
            },
            contact: {
                label: 'Your Contact number',
                placeholder: 'i.e. 9876543210',
                type: 'number',
                required: true
            },
            department: {
                label: 'Your Department',
                placeholder: 'i.e. FTBE',
                required: true
            },
            year: {
                label: 'Your Year',
                type: 'number',
                required: true
            },
            hobbies: {
                label: 'What are your Hobbies?',
                maxWords: 50
            },
            interest: {
                label: 'Why are you interested in the event?',
                maxWords: 100,
                tag: 'textarea'
            }
        },
        button: 'Submit',
        success: `Thank you! Stay connected with us on Social media for latest updates.`,
        sheetName: 'technokraft' 
    },    
    bPlan: {
        title: 'Weekend Pitch Event Registration',
        fields: {
            college: {
                label: 'College/University',
                placeholder: 'i.e. Jadavpur University',
                required: true
            },
            teamName: {
                label: 'Team name',
                placeholder: 'i.e. Fire Spirits',
                required: true
            },
            leaderName: {
                label: 'Team Captain name',
                placeholder: 'i.e. John Doe',
                required: true
            },
            email: {
                label: 'Team Captain email',
                placeholder: 'i.e. johndoe@gmail.com',
                type: 'email',
                required: true
            },
            contact: {
                label: 'Captain Contact number',
                placeholder: 'i.e. 9876543210',
                type: 'number',
                required: true
            },
            waContact: {
                label: 'Captain Whatsapp number',
                placeholder: 'i.e. 9876543210',
                type: 'number',
                required: true
            },
            teamMates: {
                label: 'Teammates',
                placeholder:
                    'Enter full names in new lines, Maximum team of 4.',
                maxWords: 10,
                tag: 'textarea',
                required: true
            },
            ideaStage: {
                label: 'How far your idea is currently?',
                type: 'radio',
                required: true,
                options: [
                    {
                        value: 'ideation',
                        label: 'Just an idea'
                    },
                    {
                        value: 'planning',
                        label: 'Idea and plan'
                    },
                    {
                        value: 'prototype',
                        label: 'Idea, plan and prototype'
                    },
                    {
                        value: 'sales',
                        label: 'Ready for sales'
                    },
                    {
                        value: 'revenue',
                        label: 'Already made 1st rupee in revenue'
                    }
                ]
            },
            ip: {
                label: 'Do you own a IP of your idea?',
                type: 'radio',
                required: true,
                options: [
                    {
                        value: 'yes',
                        label: 'Yes'
                    },
                    {
                        value: 'no',
                        label: 'No'
                    }
                ]
            },

        },
        button: 'Submit',
        success: `Thank you! Stay connected with us on Social media for latest updates.`,
        sheetName: 'bplan' 
    },    
    ambassadors: {
        title: 'Ocean Protocol Ambassador Program',
        description:
            'Thank you for your interest in becoming an Ocean Protocol Ambassador. To help us learn more about you and why you are interested in representing Ocean Protocol please fill out the information below.\n\nWe look forward to hearing from you!',
        fields: {
            name: {
                label: 'Your name',
                placeholder: 'i.e. Jelly McJellyfish',
                required: true
            },
            email: {
                label: 'Your email',
                placeholder: 'i.e. jelly@mcjellyfish.com',
                type: 'email',
                required: true
            },
            location: {
                label: 'Your location',
                placeholder: 'i.e. Amsterdam',
                help: 'Where in the world are you located (geographically)?',
                required: true
            },
            background: {
                label: 'Your background',
                help:
                    'Please tell us a bit about your background (100 words or less).',
                maxWords: 100,
                tag: 'textarea',
                required: true
            },
            interest: {
                label: 'Your interest',
                help:
                    'Why would you like to be an Ocean Protocol Ambassador and what would you bring to the Ocean Protocol community (100 words or less)?',
                maxWords: 100,
                tag: 'textarea',
                required: true
            },
            community: {
                label: 'Your communities',
                help: `What kind of communities are you a part of, which are relevant to advancing Ocean's cause and vision?`,
                placeholder: 'i.e. data science, Python, etc.',
                required: true
            },
            publicspeaking: {
                label: 'Public speaking',
                help: 'How do you feel about public speaking?',
                type: 'radio',
                options: [
                    {
                        value: 'yes',
                        label: 'I love it!'
                    },
                    {
                        value: 'no',
                        label: 'I would rather not.'
                    }
                ],
                required: true
            },
            linkedin: {
                label: 'Your LinkedIn profile',
                placeholder: 'i.e. https://www.linkedin.com/company/13429589/',
                type: 'url'
            },
            github: {
                label: 'Your GitHub profile',
                placeholder: 'i.e. https://github.com/oceanprotocol',
                type: 'url'
            },
            twitter: {
                label: 'Your Twitter profile',
                placeholder: 'i.e. https://twitter.com/oceanprotocol',
                type: 'url'
            }
        },
        button: 'Submit',
        success: `Thank you for your submission. We will review your application shortly and get back to you if your profile is a good fit. \n\nIn the mean time join the conversation and connect with the <a href=${
            social.telegram
        }>Ocean community on Telegram</a>`,
        baseUrl:
            '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=ee0c0eec08'
    }
}

export default forms
