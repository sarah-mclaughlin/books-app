exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(() => {
      // Inserts seed entries
      return knex('books').insert([
        {
          id: 1,
          title: 'The hungry caterpillar',
          author: 'Sarah',
          image: 'https://images-na.ssl-images-amazon.com/images/I/516ZF5J67HL._SY360_BO1,204,203,200_.jpg',
          status: 'toread'
        },
        {
          id: 2,
          title: "Grandpa's slippers",
          author: 'Julian',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51s5Y30vhLL._SY355_BO1,204,203,200_.jpg',
          status: 'reading'
        },
        {
          id: 3,
          title: 'The little yellow digger',
          author: 'Yasha',
          image: 'https://www.thechildrensbookshop.co.nz/document/photos/002/609/566/large_9781869432126.jpg?1531871597',
          status: 'read'
        },
        {
          id: 4,
          title: 'Moo moo and little calf too',
          author: 'David',
          image: 'https://www.calliopegifts.co.uk/img/product//were-going-on-a-bear-hunt-gift-wrap-9029908-0-1423495705000.jpg',
          status: 'toread'
        },
        {
          id: 5,
          title: 'Slinky malinky',
          author: 'Damien',
          image: 'https://images-na.ssl-images-amazon.com/images/I/61ulN35aErL.jpg',
          status: 'reading'
        }
      ])
    })
}
