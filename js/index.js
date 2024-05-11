// 1. Birinci tapşırıq:
// "button.change-color" düyməsinə klik edildikdə <body> elementinin fon rənglərini dəyişən bir
// skript yazın və span.color'da rəng dəyərini göstərin.
// ```html
// <div class="widget">
// <p>Background color : <span class="color"></span></p>
// <button type="button" class="change-color">Rəngi Dəyiş</button>
// </div>
// ```
// "getRandomHexColor" funksiyasını istifadə edərək təsadüfi bir rəng üçün kodu daxil edin.
const body = document.querySelector("body");
body.addEventListener("click",function(event){
    const {currentTarget,target} = event;
    if(target.className=="change-color"){
        const hexColor = ('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
        currentTarget.style.backgroundColor=hexColor;
        let span = body.querySelector(".color");
        span.textContent = hexColor;
    }
});



// 2. İkinci tapşırıq:
// Sadə bir kalkulyator yaradın ki, onda rəqəmlər və əməliyyatlar üçün düymələr olsun.
// İstifadəçinin klikləri ilə daxil etdiyi rəqəmləri və əməliyyatların nəticəsini göstərin.
const calc = document.querySelector(".calculator");
const result = calc.querySelector(".result__text");
calc.addEventListener("click",(e)=>{
    let {currentTarget,target} = e;
    if(target.className == "buttons__digit"){
        if(result.textContent.length > 18){
            if(result.textContent.length > 22){
                alert("Max size should be 22 !");
                return;
            }
            result.style["font-size"] = "12px";
        }
        result.textContent += target.textContent;
    }else if(target.className == "buttons__symbol"){
        if(result.textContent.endsWith('+') || result.textContent.endsWith('-') || result.textContent.endsWith('*') || result.textContent.endsWith('/') || result.textContent.endsWith('.')){
            return;
        }if(result.textContent.length == 0){
            return;
        }else{
            result.textContent += target.textContent;
        }
    }else if(target.className == "buttons__delete"){
        result.textContent = result.textContent.slice(0,result.textContent.length - 1);
    }else if(target.className == "buttons__equals"){
        result.textContent = eval(result.textContent);
    }
});



// 3 -
// Əkrana genişlik və hündürlük bütün sahəni tutan bir futbol meydanı ilə 100x100 piksel
// ölçülərində bir top olan bir HTML səhifə yaradın. Səhifəyə klik etdikdə, topun mərkəzi klik
// edilən yerdə dayansın və top sahənin sərhədlərindən kənarda olmasın.

const field = document.querySelector(".football-field");
const stadium = field.querySelector(".football-stad");
const ball = field.querySelector(".football-ball");


field.addEventListener('click',(e)=>{
      if(e.target.className == "football-field"){
            if(e.x <= 100 || e.x >= field.offsetWidth-100 || e.y <= 100 || e.y >= field.offsetHeight-100){
                return;
            }
            ball.style.left = `${e.x}px`;
            ball.style.top = `${e.y}px`;
      }
});