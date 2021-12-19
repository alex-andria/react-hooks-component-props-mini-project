import React from "react";

function Article({title, date="January 1, 1970", preview, minutes, emoji = "☕️"}){
    console.log(minutes);
    // const emoji = ({minutes}) => {
    //     if(minutes < 30){
    //          if(minutes <= 5){
    //              return "☕️"
    //          }else if(minutes <= 10){
    //             return "☕️☕️"
    //         }else if(minutes <= 15){
    //             return "☕️☕️☕️"
    //         }else if(minutes <= 20){
    //             return "☕️☕️☕️☕️"
    //          }else{
    //              return "☕️☕️☕️☕️☕️";
    //          }
    //     } else {
    //         if(minutes <= 40){
    //             return "🍱🍱🍱🍱"
    //         }else if(minutes <= 50){
    //             return "🍱🍱🍱🍱🍱"
    //         }else{
    //             return "🍱🍱🍱🍱"
    //         }
    //     }
    // }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}
                <span>{` · ${emoji} ${minutes} min read`}</span>
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;