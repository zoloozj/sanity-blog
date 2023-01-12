export default {
    name: 'post',
    type: 'document',
    title: 'Нийтлэл',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Гарчиг',
            description: 'Нийтлэлийн гарчиг 50 тэмдэгтээс ихгүй байх ёстой.'
        },
        {
            title: 'Нийтлэгч',
            name: 'publisher',
            type: 'reference',
            to: [{type: 'publisher'}]
            
        },
        {
            name: 'category',
            type: 'string',
            title: 'Ангилал'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Сэдэв',
            
        },
        {
            name: 'cover_image',
            type: 'image',
            'title': 'Зураг'
        },
        {
            name: 'date',
            type: 'datetime',
            'title': 'Огноо'
        },
        {
            name: 'slug',
            type: 'slug',
            'title': 'хаяг',
            options: {
                source: 'title',
                maxLength: 50,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 50)
            }
        },
    ]
}