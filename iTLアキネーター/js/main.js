const Tlist = [
    [0, 1, 50, 0, 0, 0, 1, 0, "", 1, "", 1, 1, 0, 1, 1, 1],
    [1, 1, 50, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [2, 1, 50, 0, 1, 1, 1, 0, "", 1, 1, "", 0, 1, 0, 0, 1],
    [3, 1, 30, 0, 1, 0, 1, 0, "", 0, "", "", 1, 1, 0, 0, 0],
    [4, 1, 60, 0, 1, 1, 1, 0, 1, 1, "", "", 1, 0, 0, 0, 1],
    [5, 1, 40, 0, 0, 0, 1, 0, "", 0, 0, "", "", 1, 0, 0, 1],
    [6, 1, 30, 0, 1, 1, 1, 0, "", 0, 0, "", 0, 0, 0, 1, 1],
    [7, 0, 40, 1, 0, 1, 1, 1, 1, 1, 0, "", 1, 1, 1, 0, 0],
    [8, 1, 50, 1, 1, 1, 1, 1, "", 1, 0, 1, 1, 0, 0, 0, 0],
    [9, 1, 40, 1, 1, 1, 0, 0, "", 0, "", "", "", 1, 0, 0, 1],
    [10, 1, 50, 1, 1, 1, 1, 1, 1, 1, 0, "", "", 0, 1, 0, 0],
    [11, 0, 40, 1, 0, 1, 1, 0, "", 0, 0, "", 1, 1, 1, 0, 0],
    [12, 0, 30, 1, 0, 1, 1, 1, "", 0, "", "", 1, 1, 1, 0, 0],
    [13, 1, 60, 1, 1, 1, 1, 1, "", 1, "", "", 1, 0, 1, 0, 0],
    [14, 0, 50, 2, 0, 0, 1, 0, "", 1, "", "", "", "", 0, 1, 0],
    [15, 0, 60, 2, 0, 0, 1, 0, "", 1, 0, "", 0, 1, 0, 0, 1],
    [16, 1, 40, 2, 0, 0, 1, 0, "", 1, 0, "", "", "", 0, 0, 0],
    [17, 1, 60, 2, 1, 0, 1, 0, 1, 1, "", "", "", 0, 0, 1, 0],
    [18, 1, 60, 2, 1, 0, 1, 0, "", 1, "", "", "", "", 0, 0, 1],
    [19, 1, 60, 2, 0, 0, 1, 0, 1, 1, "", "", 0, 0, 0, 0, 1],
    [20, 1, 30, 2, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1]
]; //先生リスト[先生no][属性]

var count = 21; //候補数カウンター
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //候補チェッカー
const button = document.getElementById('button') //回答ボタン

//質問選択関数
function Qselect() {
    var maxcl = 0;
    var text = "";
    var max = 0;
    //有効要素の一番多い属性列番号を選ぶ
    for (let n = 1; n < 17; n++) {
        var num = 0;
        for (let i = 0; i < 21; i++) {
            if ((check[i] == 0 && !(Tlist[i][n] === ""))) {
                num = num + 1;
            }
        }
        var random = Math.floor(Math.random() * 11);
        num = num + random;
        if (num >= max) {
            maxcl = n;
            max = num
        }
    }

    //属性列番号を基に質問文呼び出し
    text = question(maxcl);
    var ret = [text[0], maxcl, text[1]];
    return ret;
}
//質問文取り出し関数
function question(maxcl) {
    var text = ""
    if (maxcl == 1) {
        text = "男性ですか";
    }
    if (maxcl == 2) {
        var random = 1 + (Math.floor(Math.random() * 4));
        if (random == 1) {
            text = "年齢は30代ですか";
        } else if (random == 2) {
            text = "年齢は40代ですか";
        } else if (random == 3) {
            text = "年齢は50代ですか";
        } else {
            text = "年齢は60代以上ですか";
        }
    }
    if (maxcl == 3) {
        var random = 1 + (Math.floor(Math.random() * 3));
        if (random == 1) {
            text = "情報系ですか";
        } else if (random == 2) {
            text = "法律系ですか";
        } else {
            text = "教養系ですか";
        }
    }
    if (maxcl == 4) {
        text = "眼鏡をかけていますか";
    }
    if (maxcl == 5) {
        text = "1,2年生の授業で必修がありますか";
    }
    if (maxcl == 6) {
        text = "ゼミを持っていますか";
    }
    if (maxcl == 7) {
        text = "卒業大学（大学院）は中央大学ですか";
    }
    if (maxcl == 8) {
        text = "結婚していますか";
    }
    if (maxcl == 9) {
        text = "（准教授ではなく、）教授ですか";
    }
    if (maxcl == 10) {
        text = "指導は厳しいですか";
    }
    if (maxcl == 11) {
        text = "Twitterはやっていますか";
    }
    if (maxcl == 12) {
        text = "学期末の評価方法はテストですか";
    }
    if (maxcl == 13) {
        text = "講義でレスポンはとりますか";
    }
    if (maxcl == 14) {
        text = "講義で教科書は使いますか";
    }
    if (maxcl == 15) {
        text = "サークルの顧問はやっていますか";
    }
    if (maxcl == 16) {
        text = "卒業大学（大学院）は国公立大学ですか";
    }
    var list = [text, random];
    return list
}

function candec(checkValue, check, cl, rand,) {
    console.log(rand);
    console.log(cl);
    console.log(checkValue);
    if (cl == 2) {
        if (rand == 1) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][2] == 30) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][2] == 30)) {
                        check[i] = 1;
                    }
                }
            }
        }
        if (rand == 2) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][2] == 40) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][2] == 40)) {
                        check[i] = 1;
                    }
                }
            }
        }
        if (rand == 3) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][2] == 50) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][2] == 50)) {
                        check[i] = 1;
                    }
                }
            }
        } 
        if (rand == 4) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][2] == 60) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][2] == 60)) {
                        check[i] = 1;
                    }
                }
            }
        }
    }else if (cl == 3) {
        if (rand == 1) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    console.log(Tlist[i][3]);
                    if (Tlist[i][3] == 0) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][3] == 0)) {
                        check[i] = 1;
                    }
                }
            }
        }
        if (rand == 2) {
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][3] == 1) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][3] == 1)) {
                        check[i] = 1;
                    }
                }
            }
        }
        if (rand == 3){
            if (checkValue == 0) {
                for(let i = 0; i < 21; i++){
                    if (Tlist[i][3] == 2) {
                        check[i] = 1;
                    }
                }
            }else {
                for(let i = 0; i < 21; i++){
                    if (!(Tlist[i][3] == 2)) {
                        check[i] = 1;
                    }
                }
            }
        }
    }else {
        if (checkValue == 0) {
            for(let i = 0; i < 21; i++){
                if (Tlist[i][cl] == 1) {
                    check[i] = 1;
                }
            }
        }else {
            for(let i = 0; i < 21; i++){
                if (Tlist[i][cl] == 0) {
                    check[i] = 1;
                }
            }
        }
    }
    return check;

}

//クリック時のイベント関数
function Buttonclick() {
    let elements = document.getElementsByName('first');
    let len = elements.length;
    let checkValue = '';
    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = elements.item(i).value;
        }
    }

    //候補の更新
    if (!(checkValue === "")) {
        check = candec(checkValue, check, cl, rand)
    }
    console.log(check);

    //候補数の更新
    var n = 21;
    for (let i = 0; i < 21; i++) {
        if (check[i] == 1) {
            n = n - 1;
        }
        count = n;
    }
    if (count == 1) {
        for (let i = 0; i < 21; i++){
            if (check[i] == 0){
                var indent = i
                break
            }
        }
        var address = indent + ".html"
        location.href = address
    }
    console.log(count);
    ret = Qselect(check); //質問選定
    console.log(ret);
    Qtext = ret[0]; //質問文
    cl = ret[1]; //属性列番号
    rand = ret[2]; //乱数があったら表示
    element.value = Qtext;
}

var ret = Qselect(check); //質問選定
console.log(ret)
var Qtext = ret[0]; //質問文
var cl = ret[1]; //属性列番号
var rand = ret[2]; //乱数があったら表示

let element = document.getElementById("question-text"); //質問テキストボックス取得
element.value = Qtext;
button.addEventListener('click',Buttonclick);