import { day, month, date, year, fulldate, time } from "../../components/common/Date-Time";

const path = '../../assets/images/'
const imageData = [
    { 
        
        file:[
            require(path+'pdf.png'),
            require(path+'client.png'), 
            require(path+'client.png'),
            require(path+'client.png'),
            require(path+'ppt.png')
        ],
        created_on:[`${day}`,`${month}`, `${date}`, `${year}`,`${time}`],
    },
    { 
        id:2, 
        note: 'quote',
        client_name: 'Smith Moragn',
        comment: 'This is where the text part or “commet” will appear. There will be no limitations for text and the box will dynamicall resize to account for more text. Picture area will only appear if there are pictures added.',
        file: [],
        created_on:[`${day}`,`${month}`, `${date}`, `${year}`,`${time}`],
    },
    { 
        id:3, 
        note: 'job',
        client_name: 'Micheal',
        comment: 'This is where the text part or “commet” will appear. There will be no limitations for text and the box will dynamicall resize to account for more text. Picture area will only appear if there are pictures added.',
        file: [],
        created_on:[`${day}`,`${month}`, `${date}`, `${year}`,`${time}`],
    },
    { 
        id:4, 
        note: 'invoices',
        client_name: 'Alysha',
        comment: 'This is where the text part or “commet” will appear. There will be no limitations for text and the box will dynamicall resize to account for more text. Picture area will only appear if there are pictures added.',
        file: [],
        created_on:[`${day}`,`${month}`, `${date}`, `${year}`,`${time}`],
    },
];


export default imageData;



/* 
team: ['Alysha', 'Jordan', 'Marley'],
*/