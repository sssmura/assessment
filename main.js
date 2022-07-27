'use strict'
//必要になるhtml要素を取得
const formValue=document.querySelector('#name');
const btn =document.querySelector("#send");
const resultSpace=document.querySelector('.result');

const arry=[
"{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。",
"{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。",
"{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。",
"{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。",
"{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。",
"{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。",
"{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。",
"{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。",
"{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。",
"{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。",
"{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。",
"{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。",
"{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。",
"{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。",
"{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。",
"{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。",
]
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
 function assessment(userName) {
    if (userName===''){
        return '名前を入力してください'
    }
    // TODO 診断処理を実装する
    let sum=0;
    const ary=userName.split('');
    for(let i=0; i<ary.length; i++){
        if(ary[i]!==" "){
        sum+=ary[i].charCodeAt(0);
        } 
    }
    const result=sum%16;
    return arry[result].replaceAll('{userName}',userName);
 }
 /**
  * ボタンに登録する、結果を表示する関数
  */
 function get_result(){
    const userName=formValue.value;
    const result= assessment(userName);
    resultSpace.innerHTML=`<div>${result}</div>`;
 }
 btn.addEventListener('click',get_result);

