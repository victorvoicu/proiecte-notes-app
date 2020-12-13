let utils = require('./utils')
let notes = require('./notes')
let validator = require('validator')
let fs = require('fs')

const chalk = require('chalk')

const error = chalk.bold.green;
const warning = chalk.keyword('orange');
// console.log('ceva');
//  console.log(name);
//  console.log(utils);
// console.log(utils.utils3)
// utils.ceva(1,4)
//  console.log(notes.gn())
//  let x=validator.escape("&ceva&")
//  console.log(x)

//  console.log(warning(validator.isEmail('7@v.tb')));
//  console.log(chalk.magenta('success'))
// console.log(process.argv[0]);
// if (process.argv[2]=='victor') {
//     console.log('am primit');
// }
const yargs = require('yargs')
const { demandOption } = require('yargs')
// const { hideBin } = require('yargs/helpers')
// add, remove, read, list?? fs.readdir




yargs.command('add [t] [b]', 'add a file',
    {
        title: {
            type: 'string',
            alias: 't',
            demandOption: true,
        },
        body: {
            type: 'string',
            alias: 'b',
            demandOption: true,
        },
    },
    function (argv) {

        let x = fs.readFileSync('notes.json') //buffer de json

        let notesArr = JSON.parse(x)

        let t1 = argv.title; let b1 = argv.body

        let checkArr = notesArr.filter((elem) => elem.title == t1)
        if (checkArr.length > 0) {
            console.log('nota deja exista')
        } else {
            notesArr.push({ title: t1, body: b1 })
            let notesJson = JSON.stringify(notesArr)
            fs.writeFileSync('notes.json', notesJson)
            console.log('new note added');
        }

    }
)

yargs.command('remove [title]', 'remove a note', {
    title: {
        type: 'string',
        demandOption: true,
        alias: 't'
    },

},
    (argv) => {

        let x = fs.readFileSync('notes.json') //json buffer
        let notesArr = JSON.parse(x)
        let t1 = argv.title
        let notesCheck = notesArr.filter(function (elem) { return elem.title == argv.title })
        if (notesCheck.length == 0) {
            console.log(chalk.bgGreen('nota nu exista'));
        } else {
            notesArr.slice(0).forEach(element => {
                if (element.title == t1) {
                    let index1 = notesArr.indexOf(element)

                    notesArr.splice(index1, 1)
                    console.log(chalk.bgRed('am scos nota cu titlul ' + element.title));
                }
            });
            let notesJson = JSON.stringify(notesArr)
            fs.writeFileSync('notes.json', notesJson)
        }

    })
 
yargs.command('read', 'read a note', {
    title: {
        type: 'string',
        demandOption: true,
        alias: 't',
    },
 },
    (argv) => {
        let x; //va fi json 
        // try {
        //     x = fs.readFileSync(argv.title + '.json').toString()
        // } catch (error) {
        //     x = fs.readFileSync(argv.title).toString()
        // }
        // console.log(JSON.parse(x))
        x = fs.readFileSync('notes.json')
        let notesArr = JSON.parse(x)
        // notesArr.forEach(element => {
        //     if (element.title == argv.title) {
        //         console.log(element)
        //     }
        // });
        let xx = notesArr.find(e => e.title === argv.title)
        if (xx == undefined) {
            console.log(chalk.red('nota nu exista'));
        } else {
            console.log(chalk.bgRed(xx.title) + ' ' + xx.body)
        }
    })

yargs.command(
    'list', 'list all notes',
    // {
    //     title: {
    //         type: 'string',
    //         demandOption: true
    //     }
    // },
    function (argv) {
        let x = fs.readFileSync('notes.json')
        let notesArr = JSON.parse(x)
        // console.log(notesArr)
        notesArr.forEach(e => console.log(e.title))
    }
)

yargs.parse()



