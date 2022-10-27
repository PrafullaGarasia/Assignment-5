/*
    Assignment 05
    Name: Prafulla Garasia
    Student Id: 0797964
*/

$(document).ready(function () 
{
    class ContentCard
    {
        id = 0;
        name = "name";
        description = "Description";
        genre = "genre";
        constructor(id, name, description, genre) 
        {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
        }

        get id() 
        {
        return this.id;
        }
        set id(value) 
        {
            this.id = value;
        }
        get name() 
        {
        return this.name;
        }
        set name(value) 
        {
            this.name = value;
        }
        get description() 
        {
        return this.description;
        }
        set description(value) 
        {
            this.description = value;
        }
        get genre() 
        {
        return this.genre;
        }
        set genre(value) 
        {
            this.genre = value;
        }

        updateContentItem(name, description, genre)
        {
            if(name != null && description != null && genre != null)
            {
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
        }
        toString()
        {
            return `<div id = "content-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.genre}</div>
                    </div>`;
        }

    }


    let languages = [
    [0, 'HTML', 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. ', 'Markup Language'],
    [1, 'CSS', 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' ,'style sheet language'],
    [2, 'php', 'PHP is a general-purpose scripting language geared towards web development','scripting language'],
    [3, 'Javascript', 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.', 'scripting language'],
    [4,'c#','C# is a general-purpose, multi-paradigm programming language.','general-purpose']
    ];

    languages.forEach(language => 
    {
        let ccard = new ContentCard(language[0],language[1],language[2],language[3]);
        $("#content-item-list").append(ccard.toString());
    });


});


