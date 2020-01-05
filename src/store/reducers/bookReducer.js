const initState = {
    books:[
        {id:'1',category:'Fiction',title:'The Hunger Games',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'https://jlongroadmedia.files.wordpress.com/2013/12/hungergamescover.jpg'},
        {id:'2',category:'Fiction',title:'Catching Fire',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'https://kbimages1-a.akamaihd.net/a7d5f0ab-2aa6-4db9-af9a-5a4ec0256a0e/1200/1200/False/catching-fire-movie-tie-in.jpg'},
        {id:'3',category:'Fiction',title:'Mocking Jay',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'https://kbimages1-a.akamaihd.net/c0d8d81a-7b9c-4136-8d4b-6fd4db99456d/1200/1200/False/mockingjay-classic-adult.jpg'},
        {id:'4',category:'Fiction',title:'Twilight',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'https://ccrsbteenchoice.files.wordpress.com/2012/01/twilight.jpg'},
        {id:'5',category:'Fiction',title:'Moon Something',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'https://akns-images.eonline.com/eol_images/Entire_Site/20090623/293.new.moon.bookcover.062309.jpg?fit=inside|828:*&output-quality=90'},
        {id:'6',category:'Fiction',title:'Eclipse',author:'Suzanne Collins',format:'PaperBack',price:'1234.00',bookDescription:'I volunteer as tribute!',isbn:'123456789',publisher:'blah blah',publicationYear:'2016',img:'http://images2.fanpop.com/image/photos/11300000/HQ-Eclipse-Book-Covers-twilight-series-11366613-1252-2031.jpg'}
    ]
}

const bookReducer = (state = initState, action) => {
    return state
}

export default bookReducer