


var callLength = function () {
    var ip1 = document.getElementById("string1").value;
    var string_obj1 = new string_manipulation(ip1);
    var res = document.getElementById("result");
    var len = string_obj1.strlen;
    res.innerHTML = len;
}
var callConcat = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var res = document.getElementById("result");
    var con_cat = string_obj1.concat(string_obj2);
    res.innerHTML = con_cat;
}
var callSubstring = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var ip3 = document.getElementById("string3").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var string_obj3 = new string_manipulation(ip3);
    var res = document.getElementById("result");
    var char = string_obj1.mySubString(string_obj2, string_obj3);
    res.innerHTML = char;
}
var callCharAT = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var res = document.getElementById("result");
    var char = string_obj1.char_at(string_obj2);
    res.innerHTML = char;
}

var callLastIndex = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var res = document.getElementById("result");
    var char = string_obj1.getLastIndexOf(string_obj2);
    res.innerHTML = char;
}

var callIndexOf = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var res = document.getElementById("result");
    var char = string_obj1.index_of(string_obj2);
    res.innerHTML = char;
}

var callReplace = function () {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var res = document.getElementById("result");
    var char = string_obj1.Replace(string_obj2);
    res.innerHTML = char;

}


var string_manipulation = function (val) {
    this.value = val;
    this.strlen = mylength.call(this);
    this.concat = function (str2) {
        var final = this.value + str2.value;
        return final;
    }
    this.char_at = function (index) {
        var ret;
        var ind = parseInt(index.value, 10);
        ret = this.value[ind];
        return ret;
    }
    this.index_of = function (str) {
        var ret;
        for (var i = 0; this.value[i] != null; i++) {
            if (this.value[i] == str.value) {
                return i;
            }
            
        }
        return -1;
    }
    this.Replace = function (str) {
        var ret = "";
        for (var i = 0; i < this.strlen; i++) {
            if (str.value == this.value[i])
                ret += '*';
            else
                ret += this.value[i];
        }
        return ret;
    }
    this.mySubString = function (i, j) {
        var ch="";
        for (var k = i.value; k < j.value; k++)
            ch += this.value[k];
          return ch;
    }
    this.getLastIndexOf = function (v) {
        var i = 0, result = "";
        while (this.val[i] != null) {
            if (this.val[i] == v[0]) {
                result = i;
            }
            i++;
        }
        return result;
    };

}


var mylength = function () {
    var i = 0;
    while (this.value[i] != null)
        i += 1;
    return i;
}


var e = document.getElementById("btn-Length");
e.onclick = callLength;

var e = document.getElementById("btn-concat");
e.onclick = callConcat;

var e = document.getElementById("btn-substring");
e.onclick = callSubstring;

var e = document.getElementById("btn-charat");
e.onclick = callCharAT;

var e = document.getElementById("btn-last_index");
e.onclick = callLastIndex;

var e = document.getElementById("btn-indexof");
e.onclick = callIndexOf;

var e = document.getElementById("btn-Replace");
e.onclick = callReplace;

